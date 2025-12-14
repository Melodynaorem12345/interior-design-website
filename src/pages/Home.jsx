const Home = () => (
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
      <header className="main-header">
        <div className="shape z_1 float-bob-y" style={{backgroundImage: 'url(/assets/images/shape/shape-2.png)'}} />
        {/* header-top */}
        <div className="header-top">
          <div className="bg-shape" style={{backgroundImage: 'url(/assets/images/shape/shape-1.png)'}} />
          <div className="inner-container">
            <div className="top-inner">
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
          <div className="inner-container">
            <div className="outer-box">
              <figure className="logo-box"><a href="/"><img src="/assets/images/logo.png" alt="" /></a></figure>
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
                      <li className="current dropdown"><a href="#">Home</a>
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
                <div className="search-toggler ml_25 mr_40"><img src="/assets/images/icons/icon-3.png" alt="" /></div>
                <div className="nav-btn nav-toggler navSidebar-button clearfix"><img src="/assets/images/icons/icon-4.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
        {/*sticky Header*/}
        <div className="sticky-header">
          <div className="inner-container">
            <div className="outer-box">
              <figure className="logo-box"><a href="/"><img src="/assets/images/logo.png" alt="" /></a></figure>
              <div className="menu-area">
                <nav className="main-menu clearfix">
                  {/*Keep This Empty / Menu will come through Javascript*/}
                </nav>
                <div className="search-toggler ml_25 mr_40"><img src="/assets/images/icons/icon-3.png" alt="" /></div>
                <div className="nav-btn nav-toggler navSidebar-button clearfix"><img src="/assets/images/icons/icon-4.png" alt="" /></div>
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
      {/* banner-section */}
      <section className="banner-section p_relative">
        <div className="banner-carousel owl-theme owl-carousel owl-dots-none">
          <div className="slide-item p_relative">
            <div className="bg-layer" style={{backgroundImage: 'url(/assets/images/banner/banner-1.jpg)'}} />
            <div className="inner-container">
              <div className="content-box">
                <h2>Design Your Kitchen With Our Experts</h2>
                <p>Inoterior design consultancy firm that brings sensitivity to the design top restaurants, hotels, offices &amp; homes around the world. We stand for quality, safety and credibility</p>
                <div className="btn-box"><a href="/" className="theme-btn">discover more</a></div>
              </div>
            </div>
          </div>
          <div className="slide-item p_relative">
            <div className="bg-layer" style={{backgroundImage: 'url(/assets/images/banner/banner-1.jpg)'}} />
            <div className="inner-container">
              <div className="content-box">
                <h2>Design Your Kitchen With Our Experts</h2>
                <p>Inoterior design consultancy firm that brings sensitivity to the design top restaurants, hotels, offices &amp; homes around the world. We stand for quality, safety and credibility</p>
                <div className="btn-box"><a href="/" className="theme-btn">discover more</a></div>
              </div>
            </div>
          </div>
          <div className="slide-item p_relative">
            <div className="bg-layer" style={{backgroundImage: 'url(/assets/images/banner/banner-1.jpg)'}} />
            <div className="inner-container">
              <div className="content-box">
                <h2>Design Your Kitchen With Our Experts</h2>
                <p>Inoterior design consultancy firm that brings sensitivity to the design top restaurants, hotels, offices &amp; homes around the world. We stand for quality, safety and credibility</p>
                <div className="btn-box"><a href="/" className="theme-btn">discover more</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="year-box">Est. <br /><span>1920</span></div>
      </section>
      {/* banner-section end */}
      {/* about-section */}
      <section className="about-section">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-sm-12 image-column">
              <div className="image-box">
                <figure className="image image-hov-one"><img src="/assets/images/resource/about-1.jpg" alt="" /></figure>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 content-column">
              <div className="content_block_one">
                <div className="content-box ml_40">
                  <div className="sec-title mb_25">
                    <span className="sub-title mb_19">about our workshop</span>
                    <h2>Discover a New Look For Your Kitchen</h2>
                  </div>
                  <div className="text-box">
                    <p>Imagine a utopia where all of your wishes are granted and all of your desires are satisfied. From our magnificent private beach to our sophisticated palatial house, Bluebell offers unrivalled luxury. In this luxurious getaway, no expense has been spared. Our 8,000 Sq feet contemporary luxury estate can accommodate up to 20 guests.</p>
                    <h4>You will receive special privileges and perks across many parts of our hotel and resort offers every time you stay with us.</h4>
                  </div>
                  <ul className="list-style-one clearfix">
                    <li>Modular Kitchen</li>
                    <li>Drafting Design</li>
                    <li>Kitchen Planning</li>
                    <li>Commercial Interior</li>
                    <li>Design Discussion</li>
                    <li>Kitchen Cabinet and more</li>
                  </ul>
                  <div className="btn-box"><a href="/about" className="theme-btn">discover more</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about-section end */}
      {/* faq-section */}
      <section className="faq-section">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-5 col-md-12 col-sm-12 title-column">
              <div className="sec-title mb_25">
                <span className="sub-title mb_19">our services</span>
                <h2>We provide all type of <span>modular kitchen</span> services</h2>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 accordion-column">
              <ul className="accordion-box ml_20">
                <li className="accordion block active-block">
                  <div className="acc-btn active"><span>01.</span>Kitchen Designs <div className="icon-box"><img src="/assets/images/icons/icon-13.png" alt="" /></div></div>
                  <div className="acc-content current">
                    <div className="content">
                      <p>Publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years</p>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn"><span>02.</span>Kitchen Planner <div className="icon-box"><img src="/assets/images/icons/icon-13.png" alt="" /></div></div>
                  <div className="acc-content">
                    <div className="content">
                      <p>Publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years</p>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn"><span>03.</span>Home Check <div className="icon-box"><img src="/assets/images/icons/icon-13.png" alt="" /></div></div>
                  <div className="acc-content">
                    <div className="content">
                      <p>Publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years</p>
                    </div>
                  </div>
                </li>
                <li className="accordion block">
                  <div className="acc-btn"><span>04.</span>Smart Care <div className="icon-box"><img src="/assets/images/icons/icon-13.png" alt="" /></div></div>
                  <div className="acc-content">
                    <div className="content">
                      <p>Publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* faq-section end */}
      {/* project-section */}
      <section className="project-section">
        <div className="auto-container">
          <div className="title-box mb_70">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 title-column">
                <div className="sec-title light">
                  <span className="sub-title mb_19">Unique Gallery</span>
                  <h2>Our Latest Kitchens <br />Design</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                <div className="text-box">
                  <p>The of your kitchen varies from one layout to another. The shape of the kitchen also determines the and space for cabinets, countertops, and accessories.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="outer-container pl_95 pr_95">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 project-block">
              <div className="project-block-one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><img src="/assets/images/project/project-1.jpg" alt="" /></figure>
                    <figure className="overlay-image"><img src="/assets/images/project/project-1.jpg" alt="" /></figure>
                  </div>
                  <div className="content-box">
                    <ul className="info-list clearfix">
                      <li><a href="/assets/images/project/project-1.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/assets/images/icons/icon-14.png" alt="" /></a></li>
                      <li><a href="/project"><img src="/assets/images/icons/icon-15.png" alt="" /></a></li>
                    </ul>
                    <div className="text-box">
                      <p>Kitchens</p>
                      <h3><a href="/project">Our Kitchens Design</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 project-block">
              <div className="project-block-one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><img src="/assets/images/project/project-2.jpg" alt="" /></figure>
                    <figure className="overlay-image"><img src="/assets/images/project/project-2.jpg" alt="" /></figure>
                  </div>
                  <div className="content-box">
                    <ul className="info-list clearfix">
                      <li><a href="/assets/images/project/project-2.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/assets/images/icons/icon-14.png" alt="" /></a></li>
                      <li><a href="/project"><img src="/assets/images/icons/icon-15.png" alt="" /></a></li>
                    </ul>
                    <div className="text-box">
                      <p>Kitchens</p>
                      <h3><a href="/project">Our Kitchens Design</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 project-block">
              <div className="project-block-one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><img src="/assets/images/project/project-3.jpg" alt="" /></figure>
                    <figure className="overlay-image"><img src="/assets/images/project/project-3.jpg" alt="" /></figure>
                  </div>
                  <div className="content-box">
                    <ul className="info-list clearfix">
                      <li><a href="/assets/images/project/project-3.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/assets/images/icons/icon-14.png" alt="" /></a></li>
                      <li><a href="/project"><img src="/assets/images/icons/icon-15.png" alt="" /></a></li>
                    </ul>
                    <div className="text-box">
                      <p>Kitchens</p>
                      <h3><a href="/project">Our Kitchens Design</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 project-block">
              <div className="project-block-one">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><img src="/assets/images/project/project-4.jpg" alt="" /></figure>
                    <figure className="overlay-image"><img src="/assets/images/project/project-4.jpg" alt="" /></figure>
                  </div>
                  <div className="content-box">
                    <ul className="info-list clearfix">
                      <li><a href="/assets/images/project/project-4.jpg" className="lightbox-image" data-fancybox="gallery"><img src="/assets/images/icons/icon-14.png" alt="" /></a></li>
                      <li><a href="/project"><img src="/assets/images/icons/icon-15.png" alt="" /></a></li>
                    </ul>
                    <div className="text-box">
                      <p>Kitchens</p>
                      <h3><a href="/project">Our Kitchens Design</a></h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* project-section end */}
      {/* funfact-section */}
      <section className="funfact-section">
        <div className="outer-container">
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="count-outer">
                      <span className="odometer" data-count={27}>00</span><span className="symble">+</span>
                    </div>
                    <p>Architecture</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="count-outer">
                      <span className="odometer" data-count={78}>00</span><span className="symble">+</span>
                    </div>
                    <p>Interior Designs</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="count-outer">
                      <span className="odometer" data-count={38}>00</span><span className="symble">+</span>
                    </div>
                    <p>Modular Kitchens</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 funfact-block">
                <div className="funfact-block-one">
                  <div className="inner-box">
                    <div className="count-outer">
                      <span className="odometer" data-count={98}>00</span><span className="symble">+</span>
                    </div>
                    <p>Project done</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* funfact-section end */}
      {/* testimonial-section */}
      <section className="testimonial-section centred">
        <div className="auto-container">
          <div className="single-item-carousel owl-carousel owl-theme owl-dots-none">
            <div className="testimonial-block">
              <div className="image-box">
                <figure className="thumb-box"><img src="/assets/images/resource/testimonial-1.png" alt="" /></figure>
                <div className="icon-box"><img src="/assets/images/icons/icon-16.png" alt="" /></div>
              </div>
              <div className="text-box">
                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                <span className="name">Michale Joe</span>
              </div>
            </div>
            <div className="testimonial-block">
              <div className="image-box">
                <figure className="thumb-box"><img src="/assets/images/resource/testimonial-2.png" alt="" /></figure>
                <div className="icon-box"><img src="/assets/images/icons/icon-16.png" alt="" /></div>
              </div>
              <div className="text-box">
                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                <span className="name">Alex Rok</span>
              </div>
            </div>
            <div className="testimonial-block">
              <div className="image-box">
                <figure className="thumb-box"><img src="/assets/images/resource/testimonial-3.png" alt="" /></figure>
                <div className="icon-box"><img src="/assets/images/icons/icon-16.png" alt="" /></div>
              </div>
              <div className="text-box">
                <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                <span className="name">Wa Janson</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* testimonial-section end */}
      {/* video-section */}
      <section className="video-section">
        <div className="bg-layer" style={{backgroundImage: 'url(/assets/images/background/video-bg.jpg)'}} />
        <div className="outer-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content_block_two">
                <div className="content-box">
                  <h2>Our core values allow us to stay on track and <span>innovate in design.</span></h2>
                  <h3>Feel good experience from design to installation</h3>
                  <p>We’re following all protocols to ensure your safety and vaccination drives are underway to ensure our employees.</p>
                  <a href="/" className="theme-btn">checkout videos</a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 video-column">
              <div className="video_block_one">
                <div className="video-content ml_75 mr_60">
                  <div className="video-box" style={{backgroundImage: 'url(/assets/images/resource/video-1.jpg)'}}>
                    <div className="video-btn">
                      <a href="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s" className="lightbox-image" data-caption=""><img src="/assets/images/icons/icon-19.png" alt="" /><span className="border-animation" /><span className="border-animation border-1" /><span className="border-animation border-2" /><span className="border-animation border-3" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* video-section end */}
      {/* working-section */}
      <section className="working-section centred">
        <div className="pattern-layer" style={{backgroundImage: 'url(/assets/images/shape/shape-3.png)'}} />
        <div className="auto-container">
          <div className="sec-title mb_60 centred">
            <span className="sub-title mb_19">how we do work</span>
            <h2>Our Work Progress</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 working-block">
              <div className="working-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="icon"><img src="/assets/images/icons/icon-20.png" alt="" /></div>
                    <span>1</span>
                  </div>
                  <h3>Meet Customers</h3>
                  <p>Osed quia consequuntur magni dolores eos qui rati one volu ptatem sequi nesciunt.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 working-block">
              <div className="working-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="icon"><img src="/assets/images/icons/icon-21.png" alt="" /></div>
                    <span>2</span>
                  </div>
                  <h3>Meeting On Table</h3>
                  <p>Osed quia consequuntur magni dolores eos qui rati one volu ptatem sequi nesciunt.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 working-block">
              <div className="working-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="icon"><img src="/assets/images/icons/icon-22.png" alt="" /></div>
                    <span>3</span>
                  </div>
                  <h3>Drafting Design</h3>
                  <p>Osed quia consequuntur magni dolores eos qui rati one volu ptatem sequi nesciunt.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 working-block">
              <div className="working-block-one">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="icon"><img src="/assets/images/icons/icon-23.png" alt="" /></div>
                    <span>4</span>
                  </div>
                  <h3>Implimentation</h3>
                  <p>Osed quia consequuntur magni dolores eos qui rati one volu ptatem sequi nesciunt.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* working-section end */}
      {/* transforming-section */}
      <section className="transforming-section pt_120">
        <div className="outer-container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6 col-sm-12 title-column">
              <div className="title-text align-3">
                <h2>Transforming <span>space into dream</span> come true</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 image-column">
              <figure className="image-box"><img src="/assets/images/resource/transforming-1.png" alt="" /></figure>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 text-column">
              <div className="text-box ml_100">
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* transforming-section end */}
      <div className="slide-text-outer p_relative pb_80 pt_60">
        <span className="text-box italic">Modular Kitchen&nbsp;&nbsp;&nbsp;&nbsp;Interior&nbsp;&nbsp;&nbsp;&nbsp;Cabinet Finish&nbsp;&nbsp;&nbsp;&nbsp;Modular Kitchen&nbsp;&nbsp;&nbsp;&nbsp;Interior&nbsp;&nbsp;&nbsp;&nbsp;Cabinet Finish&nbsp;&nbsp;&nbsp;&nbsp;Modular Kitchen&nbsp;&nbsp;&nbsp;&nbsp;Interior&nbsp;&nbsp;&nbsp;&nbsp;Cabinet Finish&nbsp;&nbsp;&nbsp;&nbsp;Modular Kitchen&nbsp;&nbsp;&nbsp;&nbsp;Interior&nbsp;&nbsp;&nbsp;&nbsp;Cabinet Finish&nbsp;&nbsp;&nbsp;&nbsp;Modular Kitchen&nbsp;&nbsp;&nbsp;&nbsp;Interior&nbsp;&nbsp;&nbsp;&nbsp;Cabinet Finish&nbsp;&nbsp;&nbsp;&nbsp;Modular Kitchen&nbsp;&nbsp;&nbsp;&nbsp;Interior&nbsp;&nbsp;&nbsp;&nbsp;Cabinet Finish&nbsp;&nbsp;&nbsp;&nbsp;Modular Kitchen&nbsp;&nbsp;&nbsp;&nbsp;Interior&nbsp;&nbsp;&nbsp;&nbsp;Cabinet Finish&nbsp;&nbsp;&nbsp;&nbsp;Modular Kitchen&nbsp;&nbsp;&nbsp;&nbsp;Interior&nbsp;&nbsp;&nbsp;&nbsp;Cabinet Finish&nbsp;&nbsp;&nbsp;&nbsp;Modular Kitchen&nbsp;&nbsp;&nbsp;&nbsp;Interior&nbsp;&nbsp;&nbsp;&nbsp;Cabinet Finish&nbsp;&nbsp;&nbsp;&nbsp;Modular Kitchen&nbsp;&nbsp;&nbsp;&nbsp;Interior&nbsp;&nbsp;&nbsp;&nbsp;Cabinet Finish&nbsp;&nbsp;&nbsp;&nbsp;Modular Kitchen&nbsp;&nbsp;&nbsp;&nbsp;Interior&nbsp;&nbsp;&nbsp;&nbsp;Cabinet Finish&nbsp;&nbsp;&nbsp;&nbsp;Modular Kitchen&nbsp;&nbsp;&nbsp;&nbsp;Interior&nbsp;&nbsp;&nbsp;&nbsp;Cabinet Finish&nbsp;&nbsp;&nbsp;&nbsp;Modular Kitchen&nbsp;&nbsp;&nbsp;&nbsp;Interior&nbsp;&nbsp;&nbsp;&nbsp;Cabinet Finish&nbsp;&nbsp;&nbsp;&nbsp;Modular Kitchen&nbsp;&nbsp;&nbsp;&nbsp;Interior&nbsp;&nbsp;&nbsp;&nbsp;Cabinet Finish&nbsp;&nbsp;&nbsp;&nbsp;Modular Kitchen&nbsp;&nbsp;&nbsp;&nbsp;Interior&nbsp;&nbsp;&nbsp;&nbsp;Cabinet Finish</span>
      </div>
      {/* news-section */}
      <section className="news-section bg-color-1">
        <div className="auto-container">
          <div className="sec-title centred mb_50">
            <span className="sub-title mb_19">our blogs</span>
            <h2>Recent News &amp; Articles</h2>
          </div>
          <div className="row clearfix">
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><a href="/blog-details"><img src="/assets/images/news/news-1.jpg" alt="" /></a></figure>
                    <figure className="overlay-image"><a href="/blog-details"><img src="/assets/images/news/news-1.jpg" alt="" /></a></figure>
                  </div>
                  <div className="lower-content">
                    <ul className="post-info">
                      <li><a href="/blog-details">Admin</a></li>
                      <li>19 March 2024</li>
                    </ul>
                    <h3><a href="/blog-details">How we can fix any problem in kitchen things.</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div className="news-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><a href="/blog-details"><img src="/assets/images/news/news-2.jpg" alt="" /></a></figure>
                    <figure className="overlay-image"><a href="/blog-details"><img src="/assets/images/news/news-2.jpg" alt="" /></a></figure>
                  </div>
                  <div className="lower-content">
                    <ul className="post-info">
                      <li><a href="/blog-details">Admin</a></li>
                      <li>18 March 2024</li>
                    </ul>
                    <h3><a href="/blog-details">Transforming space into dream come true.</a></h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 news-block">
              <div className="news-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="inner-box">
                  <div className="image-box">
                    <figure className="image"><a href="/blog-details"><img src="/assets/images/news/news-3.jpg" alt="" /></a></figure>
                    <figure className="overlay-image"><a href="/blog-details"><img src="/assets/images/news/news-3.jpg" alt="" /></a></figure>
                  </div>
                  <div className="lower-content">
                    <ul className="post-info">
                      <li><a href="/blog-details">Admin</a></li>
                      <li>17 March 2024</li>
                    </ul>
                    <h3><a href="/blog-details">Our core values allow us to stay on track.</a></h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* news-section end */}
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

export default Home;
