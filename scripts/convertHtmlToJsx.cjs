const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const HTMLtoJSX = require('htmltojsx');

const pages = [
  { file: 'index.html', component: 'Home', route: '/' },
  { file: 'about.html', component: 'About', route: '/about' },
  { file: 'appointment.html', component: 'Appointment', route: '/appointment' },
  { file: 'blog.html', component: 'Blog', route: '/blog' },
  { file: 'blog-details.html', component: 'BlogDetails', route: '/blog-details' },
  { file: 'contact.html', component: 'Contact', route: '/contact' },
  { file: 'error.html', component: 'ErrorPage', route: '/error' },
  { file: 'faq.html', component: 'Faq', route: '/faq' },
  { file: 'project.html', component: 'Project', route: '/project' },
  { file: 'service.html', component: 'Service', route: '/service' },
  { file: 'team.html', component: 'Team', route: '/team' },
  { file: 'testimonial.html', component: 'Testimonial', route: '/testimonial' },
];

const extraRoutes = {
  'index-2.html': '/',
  'index-3.html': '/',
  'index-4.html': '/',
  'service-2.html': '/service',
  'project-2.html': '/project',
  'project-3.html': '/project',
  'project-details.html': '/project',
  'blog-2.html': '/blog',
};

const routeMap = pages.reduce((acc, page) => {
  acc[page.file] = page.route;
  return acc;
}, {...extraRoutes});

const htmlDir = path.resolve(__dirname, '../../html-code');
const outputDir = path.resolve(__dirname, '../src/pages');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const converter = new HTMLtoJSX({ createClass: false });

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const normalizeEmptyAttributes = (content) =>
  content
    .replace(/alt \/>/g, 'alt="" />')
    .replace(/alt title/g, 'alt="" title=""')
    .replace(/data-caption(?!=")/g, 'data-caption=""');

const indent = (str, spaces) => {
  const pad = ' '.repeat(spaces);
  return str
    .split('\n')
    .map((line) => (line.trim() ? pad + line : line))
    .join('\n');
};

const replaceAssetPaths = (content) => {
  const withAssets = content
    .replace(/="assets\//g, '="/assets/')
    .replace(/='assets\//g, "'/assets/")
    .replace(/url\((['"]?)assets\//g, (_, quote = '') => `url(${quote}/assets/`);

  return Object.entries(routeMap).reduce((acc, [fileName, route]) => {
    const escaped = escapeRegExp(fileName);
    const doublePattern = new RegExp(`="(${escaped})([^"]*)"`, 'g');
    const singlePattern = new RegExp(`='(${escaped})([^']*)'`, 'g');
    return acc
      .replace(doublePattern, (_, __, suffix) => `="${route}${suffix || ''}"`)
      .replace(singlePattern, (_, __, suffix) => `='${route}${suffix || ''}'`);
  }, withAssets);
};

pages.forEach((page) => {
  const htmlPath = path.join(htmlDir, page.file);
  if (!fs.existsSync(htmlPath)) {
    throw new Error(`Missing HTML file: ${htmlPath}`);
  }

  const rawHtml = fs.readFileSync(htmlPath, 'utf8');
  const $ = cheerio.load(rawHtml, { decodeEntities: false });
  $('script').remove();

  const bodyContent = $('body').html();
  if (!bodyContent) {
    throw new Error(`No body content found in ${page.file}`);
  }

  const processedHtml = replaceAssetPaths(bodyContent.trim());
  const jsxContent = converter.convert(processedHtml).trim();

  const componentTemplate = `const ${page.component} = () => (
  <>
${indent(jsxContent, 4)}
  </>
);

export default ${page.component};
`;

  const outputPath = path.join(outputDir, `${page.component}.jsx`);
  fs.writeFileSync(outputPath, normalizeEmptyAttributes(componentTemplate), 'utf8');
});

console.log('HTML to JSX conversion completed.');
