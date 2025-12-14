import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Appointment from './pages/Appointment.jsx';
import Blog from './pages/Blog.jsx';
import BlogDetails from './pages/BlogDetails.jsx';
import Contact from './pages/Contact.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Faq from './pages/Faq.jsx';
import Project from './pages/Project.jsx';
import Service from './pages/Service.jsx';
import Team from './pages/Team.jsx';
import Testimonial from './pages/Testimonial.jsx';

const resolveBaseUrl = () => {
  const rawBase = import.meta.env.BASE_URL || '/';
  // Ensure the base starts and ends with a single slash for URL construction.
  const normalized = rawBase.startsWith('/') ? rawBase : `/${rawBase}`;
  return normalized.endsWith('/') ? normalized : `${normalized}/`;
};

const base = resolveBaseUrl();
const scriptSources = [
  'assets/js/jquery.js',
  'assets/js/bootstrap.min.js',
  'assets/js/owl.js',
  'assets/js/wow.js',
  'assets/js/jquery.fancybox.js',
  'assets/js/appear.js',
  'assets/js/isotope.js',
  'assets/js/jquery.nice-select.min.js',
  'assets/js/nav-tool.js',
  'assets/js/scrolltop.min.js',
  'assets/js/odometer.js',
  'assets/js/script.js',
].map((path) => new URL(path, `${window.location.origin}${base}`).toString());

const ScriptLoader = () => {
  useEffect(() => {
    let isMounted = true;

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
          if (existing.dataset.loaded === 'true') {
            resolve();
            return;
          }
          existing.addEventListener('load', resolve);
          existing.addEventListener('error', reject);
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.dataset.loaded = 'false';
        script.onload = () => {
          script.dataset.loaded = 'true';
          resolve();
        };
        script.onerror = reject;
        document.body.appendChild(script);
      });

    const loadSequentially = async () => {
      for (const src of scriptSources) {
        if (!isMounted) return;
        // eslint-disable-next-line no-await-in-loop
        await loadScript(src);
      }
      window.dispatchEvent(new Event('load'));
    };

    loadSequentially().catch((error) => {
      console.error('Failed to load external scripts', error);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return null;
};

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
};

const App = () => (
  <>
    <ScriptLoader />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog-details" element={<BlogDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/project" element={<Project />} />
      <Route path="/service" element={<Service />} />
      <Route path="/team" element={<Team />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </>
);

export default App;
