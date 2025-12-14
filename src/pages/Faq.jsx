const Faq = () => (
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
                      <li className="current dropdown"><a href="#">Pages</a>
                        <ul>
                          <li><a href="/appointment">Book An Appointment</a></li>
                          <li><a href="/faq">Faq</a></li>
                          <li><a href="/testimonial">Testimonials</a></li>
                        </ul>
                      </li>
                      <li className="dropdown"><a href="#">News</a>
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
            <h1>FAQ</h1>
            <ul className="bread-crumb clearfix">
              <li><a href="/">Home</a></li>
              <li>Faq</li>
            </ul>
          </div>
        </div>
      </section>
      {/* page-title end */}
      {/* faq-page-section */}
      <section className="faq-page-section">
        <div className="auto-container">
          <div className="sec-title">
            <span className="sub-title mb_14">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Discover you question from underneath or present your inquiry fromt the submit box.</p>
          </div>
          <div className="search-form">
            <form action="/faq" method="post">
              <div className="form-group">
                <input type="search" name="search-field" placeholder="Search Your Answer" required />
                <button type="submit"><img src="/assets/images/icons/icon-65.png" alt="" /></button>
              </div>
            </form>
          </div>
          <div className="accordion-inner">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-12 accordion-column">
                <ul className="accordion-box">
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer" />
                      <h3>Bring to the table win-win survival strategies ?</h3>
                    </div>
                    <div className="acc-content">
                      <div className="text">
                        <p>Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem. An utinam consulatu eos, est facilis.</p>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block active-block">
                    <div className="acc-btn active">
                      <div className="icon-outer" />
                      <h3>Override the digital divide with additional clickthroughs from DevOps ?</h3>
                    </div>
                    <div className="acc-content current">
                      <div className="text">
                        <p>Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem. An utinam consulatu eos, est facilis.</p>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer" />
                      <h3>At the end of the day, going forward ?</h3>
                    </div>
                    <div className="acc-content">
                      <div className="text">
                        <p>Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem. An utinam consulatu eos, est facilis.</p>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer" />
                      <h3>Information highway will close the loop on ?</h3>
                    </div>
                    <div className="acc-content">
                      <div className="text">
                        <p>Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem. An utinam consulatu eos, est facilis.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 accordion-column">
                <ul className="accordion-box">
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer" />
                      <h3>User generated content in real-time will have ?</h3>
                    </div>
                    <div className="acc-content">
                      <div className="text">
                        <p>Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem. An utinam consulatu eos, est facilis.</p>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer" />
                      <h3>Normal that has evolved from generation on the runwaay heading towards ?</h3>
                    </div>
                    <div className="acc-content">
                      <div className="text">
                        <p>Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem. An utinam consulatu eos, est facilis.</p>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer" />
                      <h3>Focusing solely on the bottom line ?</h3>
                    </div>
                    <div className="acc-content">
                      <div className="text">
                        <p>Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem. An utinam consulatu eos, est facilis.</p>
                      </div>
                    </div>
                  </li>
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer" />
                      <h3>Multiple touchpoints for offshoring ?</h3>
                    </div>
                    <div className="acc-content">
                      <div className="text">
                        <p>Lorem ipsum dolor sit amet, vix an natum labitur eleifd, mel am laoreet menandri. Ei justo complectitur duo. Ei mundi solet utos soletu possit quo. Sea cu justo laudem. An utinam consulatu eos, est facilis.</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faq-page-section end */}
      {/* faq-form-section */}
      <section className="faq-form-section">
        <div className="auto-container">
          <div className="title-text">
            <h2>Didn’t find your answer? Submit your question</h2>
          </div>
          <div className="form-inner">
            <form action="/faq" method="post">
              <div className="form-group">
                <input type="email" name="email" placeholder="Email Address*" required />
              </div>
              <div className="form-group">
                <input type="text" name="subject" placeholder="Subject*" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Question*" defaultValue={""} />
              </div>
              <div className="form-group message-btn">
                <button type="submit" className="theme-btn btn-one"><span>submit now</span></button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* faq-form-section end */}
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

export default Faq;
