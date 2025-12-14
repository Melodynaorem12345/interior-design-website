const BlogDetails = () => (
  <>
    <div className="boxed_wrapper">
      {/* preloader */}
      <div className="loader-wrap">
        <div className="preloader">
          <div className="preloader-close">X</div>
          <div id="handle-preloader" className="handle-preloader">
            <div className="animation-preloader">
              <div className="spinner" />
              <div className="txt-loading">
                <span data-text-preloader="k" className="letters-loading">
                  k
                </span>
                <span data-text-preloader="i" className="letters-loading">
                  i
                </span>
                <span data-text-preloader="t" className="letters-loading">
                  t
                </span>
                <span data-text-preloader="c" className="letters-loading">
                  c
                </span>
                <span data-text-preloader="h" className="letters-loading">
                  h
                </span>
                <span data-text-preloader="n" className="letters-loading">
                  n
                </span>
                <span data-text-preloader="o" className="letters-loading">
                  o
                </span>
                <span data-text-preloader="x" className="letters-loading">
                  x
                </span>
              </div>
            </div>   
          </div>
        </div>
      </div>
      {/* preloader end */}
      {/*Search Popup*/}
      <div id="search-popup" className="search-popup">
        <div className="popup-inner">
          <div className="upper-box">
            <figure className="logo-box"><a href="/"><img src="/assets/images/logo.png" alt="" /></a></figure>
            <div className="close-search"><span className="fas fa-times" /></div>
          </div>
          <div className="overlay-layer" />
          <div className="auto-container">
            <div className="search-form">
              <form method="post" action="/">
                <div className="form-group">
                  <fieldset>
                    <input type="search" className="form-control" name="search-input" defaultValue placeholder="Type your keyword and hit" required />
                    <button type="submit"><img src="/assets/images/icons/icon-3.png" alt="" /></button>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* sidebar cart item */}
      <div className="xs-sidebar-group info-group info-sidebar">
        <div className="xs-overlay xs-bg-black" />
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a href="#" className="close-side-widget">X</a>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="logo">
                    <a href="/"><img src="/assets/images/logo-2.png" alt="" /></a>
                  </div>
                  <div className="text">
                    <h3>We Are Modular Kitchen Company</h3>
                    <p>Our experienced team offers services for both residential and commercial properties.With over 25 years of experience in the industry.</p>
                  </div>
                  <div className="info-box">
                    <h3>Conatct Us</h3>
                    <ul className="info clearfix">
                      <li><div className="icon"><img src="/assets/images/icons/icon-5.png" alt="" /></div>54B, Tailstoi Town 5238 MT, La city, IA 522364</li>
                      <li><div className="icon"><img src="/assets/images/icons/icon-6.png" alt="" /></div><a href="mailto:contact@example.com">contact@example.com</a></li>
                      <li><div className="icon"><img src="/assets/images/icons/icon-7.png" alt="" /></div><a href="tel:18004567890">+1800 456 7890</a></li>
                      <li><div className="icon"><img src="/assets/images/icons/icon-8.png" alt="" /></div>Working Hrs : 9.30am to 6.30pm</li>
                    </ul>
                  </div>
                  <div className="subscribe-inner">
                    <h3>Newsletter Subscription</h3>
                    <form action="/contact" method="post">
                      <div className="form-group">
                        <input type="email" name="email" placeholder="Enter Email Address" required />
                        <button type="submit" className="theme-btn"><span>subscribe now</span></button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END sidebar widget item */}
      {/* main header */}
      <header className="main-header header-style-five">
        {/* header-top */}
        <div className="header-top">
          <div className="auto-container">
            <div className="top-inner">
              <div className="text-box"><p>Welcome to Kitchnox Modular Kitchen !</p></div>
              <div className="left-column">
                <ul className="info-list">
                  <li><img src="/assets/images/icons/icon-1.png" alt="" />Call for help: <a href="tel:18004567890"><span>(+1800) 456 7890</span></a></li>
                  <li><img src="/assets/images/icons/icon-2.png" alt="" /><a href="/">Book An Appointment</a></li>
                </ul>
                <ul className="social-links">
                  <li><a href="/"><i className="fab fa-facebook-f" /></a></li>
                  <li><a href="/"><i className="fab fa-twitter" /></a></li>
                  <li><a href="/"><i className="fab fa-linkedin-in" /></a></li>
                  <li><a href="/"><i className="fab fa-instagram" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* header-lower */}
        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box">
              <figure className="logo-box"><a href="/"><img src="/assets/images/logo-2.png" alt="" /></a></figure>
              <div className="menu-area">
                {/*Mobile Navigation Toggler*/}
                <div className="mobile-nav-toggler">
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                  <i className="icon-bar" />
                </div>
                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div className="collapse navbar-collapse show clearfix" id="navbarSupportedContent">
                    <ul className="navigation clearfix">
                      <li className="dropdown"><a href="#">Home</a>
                        <ul>
                          <li><a href="/">Home Page 1</a></li>
                          <li><a href="/">Home Page 2</a></li>
                          <li><a href="/">Home Page 3</a></li>
                          <li><a href="/">Home Page 4</a></li>
                        </ul>
                      </li>  
                      <li className="dropdown"><a href="#">About Us</a>
                        <ul>
                          <li><a href="/about">About Us</a></li>
                          <li><a href="/team">Our Team</a></li>
                          <li><a href="/error">404</a></li>
                        </ul>
                      </li> 
                      <li className="dropdown"><a href="#">Services</a>
                        <ul>
                          <li><a href="/service">All Service 01</a></li>
                          <li><a href="/service">All Service 02</a></li>
                        </ul>
                      </li>
                      <li className="dropdown"><a href="#">Projects</a>
                        <ul>
                          <li><a href="/project">Project 01</a></li>
                          <li><a href="/project">Project 02</a></li>
                          <li><a href="/project">Project 03</a></li>
                          <li><a href="/project">Project Details</a></li>
                        </ul>
                      </li> 
                      <li className="dropdown"><a href="#">Pages</a>
                        <ul>
                          <li><a href="/appointment">Book An Appointment</a></li>
                          <li><a href="/faq">Faq</a></li>
                          <li><a href="/testimonial">Testimonials</a></li>
                        </ul>
                      </li>
                      <li className="current dropdown"><a href="#">News</a>
                        <ul>
                          <li><a href="/blog">Blog Grid</a></li>
                          <li><a href="/blog">Blog Standard</a></li>
                          <li><a href="/blog-details">Blog Details</a></li>
                        </ul>
                      </li>  
                      <li><a href="/contact">Contact Us</a></li> 
                    </ul>
                  </div>
                </nav>
                <div className="search-toggler ml_25 mr_40"><img src="/assets/images/icons/icon-52.png" alt="" /></div>
                <div className="nav-btn nav-toggler navSidebar-button clearfix"><img src="/assets/images/icons/icon-53.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
        {/*sticky Header*/}
        <div className="sticky-header">
          <div className="auto-container">
            <div className="outer-box">
              <figure className="logo-box"><a href="/"><img src="/assets/images/logo-2.png" alt="" /></a></figure>
              <div className="menu-area">
                <nav className="main-menu clearfix">
                  {/*Keep This Empty / Menu will come through Javascript*/}
                </nav>
                <div className="search-toggler ml_25 mr_40"><img src="/assets/images/icons/icon-52.png" alt="" /></div>
                <div className="nav-btn nav-toggler navSidebar-button clearfix"><img src="/assets/images/icons/icon-53.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* main-header end */}
      {/* Mobile Menu  */}
      <div className="mobile-menu">
        <div className="menu-backdrop" />
        <div className="close-btn"><i className="fas fa-times" /></div>
        <nav className="menu-box">
          <div className="nav-logo"><a href="/"><img src="/assets/images/logo.png" alt="" title="" /></a></div>
          <div className="menu-outer">{/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}</div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Chicago 12, Melborne City, USA</li>
              <li><a href="tel:+8801682648101">+88 01682648101</a></li>
              <li><a href="mailto:info@example.com">info@example.com</a></li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li><a href="/"><span className="fab fa-twitter" /></a></li>
              <li><a href="/"><span className="fab fa-facebook-square" /></a></li>
              <li><a href="/"><span className="fab fa-pinterest-p" /></a></li>
              <li><a href="/"><span className="fab fa-instagram" /></a></li>
              <li><a href="/"><span className="fab fa-youtube" /></a></li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}
      {/* page-title */}
      <section className="page-title p_relative">
        <div className="bg-layer" style={{backgroundImage: 'url(/assets/images/background/page-title.jpg)'}} />
        <div className="auto-container">
          <div className="content-box">
            <h1>Blog Details</h1>
            <ul className="bread-crumb clearfix">
              <li><a href="/">Home</a></li>
              <li>Blog Details</li>
            </ul>
          </div>
        </div>
      </section>
      {/* page-title end */}
      {/* sidebar-page-container */}
      <section className="sidebar-page-container pt_120 pb_120">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-9 col-md-12 col-sm-12 content-side">
              <div className="blog-details-content mr_30">
                <div className="news-block-two">
                  <div className="inner-box">
                    <div className="image-box">
                      <figure className="image"><img src="/assets/images/news/news-13.jpg" alt="" /></figure>
                      <div className="post-date">29<span>June</span></div>
                    </div>
                    <div className="lower-content">
                      <ul className="post-info">
                        <li>By :  <a href="/blog-details">Admin</a></li>
                        <li>kichen, modular</li>
                        <li>Comments: 7</li>
                      </ul>
                      <h3>A Stunning Classic Modular Kitchen In Losangle</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur velit esse cillum dolore eu ...</p>
                    </div>
                  </div>
                </div>
                <div className="content-one mb_50">
                  <h3>Two Column Text Sample</h3>
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                      <div className="text-box">
                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 text-column">
                      <div className="text-box">
                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est.</p>
                      </div>
                    </div>
                  </div>
                  <p>Here is main text quis nostrud exercitation ullamco laboris nisi here is itealic text ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla rure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat <a href="/blog-details">here is link</a> cupidatat non proident, sunt in culpa.</p>
                </div>
                <div className="comment-box">
                  <div className="group-title">
                    <h3>Comments 4</h3>
                  </div>
                  <div className="comment-inner">
                    <div className="comment">
                      <figure className="thumb-box"><img src="/assets/images/news/comment-1.jpg" alt="" /></figure>
                      <div className="comment-info">
                        <h5>Michale</h5>
                        <p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                        <ul className="info clearfix">
                          <li>25 Jan. 2022</li>
                          <li><a href="/blog-details" className="reply-btn">Reply</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="comment">
                      <figure className="thumb-box"><img src="/assets/images/news/comment-2.jpg" alt="" /></figure>
                      <div className="comment-info">
                        <h5>Michale</h5>
                        <p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                        <ul className="info clearfix">
                          <li>25 Jan. 2022</li>
                          <li><a href="/blog-details" className="reply-btn">Reply</a></li>
                        </ul>
                      </div>
                    </div>
                    <div className="comment">
                      <figure className="thumb-box"><img src="/assets/images/news/comment-3.jpg" alt="" /></figure>
                      <div className="comment-info">
                        <h5>Michale</h5>
                        <p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                        <ul className="info clearfix">
                          <li>25 Jan. 2022</li>
                          <li><a href="/blog-details" className="reply-btn">Reply</a></li>
                        </ul>
                      </div>
                      <div className="comment replay-comment">
                        <figure className="thumb-box"><img src="/assets/images/news/comment-4.jpg" alt="" /></figure>
                        <div className="comment-info">
                          <h5>Michale</h5>
                          <p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.</p>
                          <ul className="info clearfix">
                            <li>25 Jan. 2022</li>
                            <li><a href="/blog-details" className="reply-btn">Reply</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="comment">
                      <figure className="thumb-box"><img src="/assets/images/news/comment-5.jpg" alt="" /></figure>
                      <div className="comment-info">
                        <h5>Michale</h5>
                        <p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
                        <ul className="info clearfix">
                          <li>25 Jan. 2022</li>
                          <li><a href="/blog-details" className="reply-btn">Reply</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comments-form-area">
                  <div className="group-title">
                    <h3>Leave a Comment</h3>
                  </div>
                  <div className="form-inner">
                    <form action="/blog-details" method="post">
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input type="text" name="name" placeholder="Your name" required />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input type="email" name="email" placeholder="Email address" required />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea name="message" placeholder="Write message" defaultValue={""} />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          <button type="submit" className="theme-btn btn-one"><span>submit now</span></button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-12 col-sm-12 sidebar-side">
              <div className="blog-sidebar">
                <div className="sidebar-widget search-widget">
                  <div className="search-form">
                    <form action="/blog" method="post">
                      <div className="form-group">
                        <input type="search" name="search-field" placeholder="Enter Search Keywords" required />
                        <button type="submit"><img src="/assets/images/icons/icon-66.png" alt="" /></button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="sidebar-widget category-widget">
                  <div className="widget-title">
                    <h3>Categories</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="category-list clearfix">
                      <li><a href="/blog-details">Modular Kitchen</a></li>
                      <li><a href="/blog-details">Cabinet Installation</a></li>
                      <li><a href="/blog-details">Kitchen Remodeling</a></li>
                      <li><a href="/blog-details">Smart Care</a></li>
                      <li><a href="/blog-details">Kitchen Designs</a></li>
                      <li><a href="/blog-details">Repairing</a></li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar-widget post-widget">
                  <div className="widget-title">
                    <h3>Recent News</h3>
                  </div>
                  <div className="post-inner">
                    <div className="post">
                      <figure className="post-thumb"><a href="/blog-details"><img src="/assets/images/news/post-1.jpg" alt="" /></a></figure>
                      <h5><a href="/blog-details">Tips for leakage fixing in kitchen pipe ...</a></h5>
                      <span className="post-date">08 June 2020</span>
                    </div>
                    <div className="post">
                      <figure className="post-thumb"><a href="/blog-details"><img src="/assets/images/news/post-2.jpg" alt="" /></a></figure>
                      <h5><a href="/blog-details">A Stunning Classic Modular Kitchen In ...</a></h5>
                      <span className="post-date">07 June 2020</span>
                    </div>
                    <div className="post">
                      <figure className="post-thumb"><a href="/blog-details"><img src="/assets/images/news/post-3.jpg" alt="" /></a></figure>
                      <h5><a href="/blog-details">How we can fix any problem in kitchen ...</a></h5>
                      <span className="post-date">06 June 2020</span>
                    </div>
                    <div className="post">
                      <figure className="post-thumb"><a href="/blog-details"><img src="/assets/images/news/post-4.jpg" alt="" /></a></figure>
                      <h5><a href="/blog-details">Transforming space into dream come ...</a></h5>
                      <span className="post-date">05 June 2020</span>
                    </div>
                  </div>
                </div>
                <div className="sidebar-widget tags-widget">
                  <div className="widget-title">
                    <h3>Tages</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="tags-list clearfix">
                      <li><a href="/blog-details">Modular Kitchen</a></li>
                      <li><a href="/blog-details">Repairing</a></li>
                      <li><a href="/blog-details">Cabinet</a></li>
                      <li><a href="/blog-details">Maintenance</a></li>
                      <li><a href="/blog-details">Kitchen</a></li>
                      <li><a href="/blog-details">Remodeling</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* sidebar-page-container end */}
      {/* main-footer */}
      <footer className="main-footer">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-12 col-sm-12 footer-column">
              <div className="logo-widget footer-widget mt_5">
                <figure className="footer-logo"><a href="/"><img src="/assets/images/logo.png" alt="" /></a></figure>
                <h3>We made project specially for  Modular Kitchen &amp; Interior</h3>
                <ul className="info-list">
                  <li>
                    <span>Call Us</span>
                    <a href="tel:+180034567890">+1800 ( 345 ) 67890</a>
                  </li>
                  <li>
                    <span>Send a message</span>
                    <a href="mailto:info@Kitchnox.com">info@Kitchnox.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 footer-column">
              <div className="footer-widget ml_170">
                <div className="row clearfix">
                  <div className="col-lg-6 col-md-6 col-sm-12 links-column">
                    <div className="links-widget">
                      <div className="widget-title">
                        <span>company</span>
                      </div>
                      <ul className="links-list clearfix">
                        <li><a href="/about">Company</a></li>
                        <li><a href="/service">Service</a></li>
                        <li><a href="/project">Projects</a></li>
                        <li><a href="/contact">Contacts</a></li>
                        <li><a href="/blog">Blogs</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12 links-column">
                    <div className="links-widget">
                      <div className="widget-title">
                        <span>Services</span>
                      </div>
                      <ul className="links-list clearfix">
                        <li><a href="/">Kitchen Drawing</a></li>
                        <li><a href="/">Kitchen Installation</a></li>
                        <li><a href="/">Kitchen Modelling</a></li>
                        <li><a href="/">Kitchen Renovation</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="copyright mt_40"><p>© Copyright  <a href="/">Kitchnox</a> 2024 . All right reserved.</p></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* main-footer end */}
      {/*Scroll to top*/}
      <div className="scroll-to-top">
        <svg className="scroll-top-inner" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </div>
    {/* jequery plugins */}
    {/* main-js */}
  </>
);

export default BlogDetails;
