import React from 'react';


class Home extends React.Component {
    
 
  render() {
   
    return (
     
     <div>
      <div id="topbar" className='fixed-top d-flex align-items-center'>
        <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope-fill"></i><a href="#"><span className="__cf_email__">kugankuganesh@gmail.com</span></a>
              <i className="bi bi-phone-fill phone-icon"></i> +94-756801040
          </div>
          <div className="cta d-none d-md-block">
            <a href="#about" className="scrollto">Get Started</a>
          </div>
        </div>
      </div>

      <header id="header" className="fixed-top d-flex align-items-center ">
            <div className="container d-flex align-items-center justify-content-between">

              <h1 className="logo"><a href="#">Untitle</a></h1>
            

              <nav id="navbar" className="navbar">
                <ul>
                  <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                  <li><a className="nav-link scrollto" href="#about">About</a></li>
                  <li><a className="nav-link scrollto" href="#services">Services</a></li>
                  <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li>
                  <li><a className="nav-link scrollto" href="#team">Team</a></li>
                  {/* <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
                  <li><a href="#">Blog</a></li>
                  <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                    <ul>
                      <li><a href="#">Drop Down 1</a></li>
                      <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                        <ul>
                          <li><a href="#">Deep Drop Down 1</a></li>
                          <li><a href="#">Deep Drop Down 2</a></li>
                          <li><a href="#">Deep Drop Down 3</a></li>
                          <li><a href="#">Deep Drop Down 4</a></li>
                          <li><a href="#">Deep Drop Down 5</a></li>
                        </ul>
                      </li>
                      <li><a href="#">Drop Down 2</a></li>
                      <li><a href="#">Drop Down 3</a></li>
                      <li><a href="#">Drop Down 4</a></li>
                    </ul>
                  </li> */}
                  <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>

            </div>
          </header>

          <section id="hero" className="d-flex justify-cntent-center align-items-center">
            <div id="heroCarousel" data-bs-interval="5000" className="container carousel carousel-fade" data-bs-ride="carousel">

             
              <div className="carousel-item active">
                <div className="carousel-container">
                  <h2 className="animate__animated animate__fadeInDown">Welcome to <span>Untitle</span></h2>
                  <p className="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                  <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                </div>
              </div>

             
              <div className="carousel-item">
                <div className="carousel-container">
                  <h2 className="animate__animated animate__fadeInDown">Lorem Ipsum Dolor</h2>
                  <p className="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                  <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                </div>
              </div>

            
              <div className="carousel-item">
                <div className="carousel-container">
                  <h2 className="animate__animated animate__fadeInDown">Rich Jassa</h2>
                  <p className="animate__animated animate__fadeInUp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                  <a href="#about" className="btn-get-started animate__animated animate__fadeInUp scrollto">Read More</a>
                </div>
              </div>

              <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
              </a>

              <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
              </a>

            </div>
          </section>

          <main id="main">
          <section id="icon-boxes" className="icon-boxes">
              <div className="container">

                <div className="row">
                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box">
                      <div className="icon"><i className="bx bxl-dribbble"></i></div>
                      <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                      <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box">
                      <div className="icon"><i className="bx bx-file"></i></div>
                      <h4 className="title"><a href="">Sed ut perspiciatis</a></h4>
                      <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box">
                      <div className="icon"><i className="bx bx-tachometer"></i></div>
                      <h4 className="title"><a href="">Magni Dolores</a></h4>
                      <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                  </div>

                  <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                    <div className="icon-box">
                      <div className="icon"><i className="bx bx-layer"></i></div>
                      <h4 className="title"><a href="">Nemo Enim</a></h4>
                      <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                    </div>
                  </div>

                </div>

              </div>
            </section>

            <section id="about" className="about">
              <div className="container">

                <div className="section-title">
                  <h2>About Us</h2>
                  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row content">
                  <div className="col-lg-6">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                    <ul>
                      <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                      <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                      <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                    </ul>
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0">
                    <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <a href="#" className="btn-learn-more">Learn More</a>
                  </div>
                </div>

              </div>
            </section>

            <section id="clients" className="clients">
              <div className="container">

                <div className="clients-slider swiper-container">
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide"><img src="assets/img/clients/client-1.png" className="img-fluid" alt="" /></div>
                    <div className="swiper-slide"><img src="assets/img/clients/client-2.png" className="img-fluid" alt="" /></div>
                    <div className="swiper-slide"><img src="assets/img/clients/client-3.png" className="img-fluid" alt="" /></div>
                    <div className="swiper-slide"><img src="assets/img/clients/client-4.png" className="img-fluid" alt="" /></div>
                    <div className="swiper-slide"><img src="assets/img/clients/client-5.png" className="img-fluid" alt="" /></div>
                    <div className="swiper-slide"><img src="assets/img/clients/client-6.png" className="img-fluid" alt="" /></div>
                    <div className="swiper-slide"><img src="assets/img/clients/client-7.png" className="img-fluid" alt="" /></div>
                    <div className="swiper-slide"><img src="assets/img/clients/client-8.png" className="img-fluid" alt="" /></div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>

              </div>
            </section>
            <section id="why-us" className="why-us">
              <div className="container-fluid">

                <div className="row">

                  <div className="col-lg-5 align-items-stretch position-relative video-box" style={{backgroundImage: "url(assets/img/why-us.jpg)"}}>
                    <a href="https://youtu.be/xe72dEeWtbA" className="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
                  </div>

                  <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch">

                    <div className="content">
                      <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                      </p>
                    </div>

                    <div className="accordion-list">
                      <ul>
                        <li>
                          <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1"><span>01</span> Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                          <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                            <p>
                              Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                            </p>
                          </div>
                        </li>

                        <li>
                          <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                          <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                            <p>
                              Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                            </p>
                          </div>
                        </li>

                        <li>
                          <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                          <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                            <p>
                              Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                            </p>
                          </div>
                        </li>

                      </ul>
                    </div>

                  </div>

                </div>

              </div>
            </section>

            <section id="services" className="services">
              <div className="container">

                <div className="section-title">
                  <h2>Services</h2>
                  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="icon-box">
                      <i className="bi bi-card-checklist"></i>
                      <h4><a href="#">Lorem Ipsum</a></h4>
                      <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                    <div className="icon-box">
                      <i className="bi bi-bar-chart"></i>
                      <h4><a href="#">Dolor Sitema</a></h4>
                      <p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                    <div className="icon-box">
                      <i className="bi bi-binoculars"></i>
                      <h4><a href="#">Sed ut perspiciatis</a></h4>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                    <div className="icon-box">
                      <i className="bi bi-brightness-high"></i>
                      <h4><a href="#">Nemo Enim</a></h4>
                      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                    <div className="icon-box">
                      <i className="bi bi-calendar4-week"></i>
                      <h4><a href="#">Magni Dolore</a></h4>
                      <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                    <div className="icon-box">
                      <i className="bi bi-briefcase"></i>
                      <h4><a href="#">Eiusmod Tempor</a></h4>
                      <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi</p>
                    </div>
                  </div>
                </div>

              </div>
            </section>

          
            <section id="portfolio" className="portfoio">
              <div className="container">

                <div className="section-title">
                  <h2>Portfoio</h2>
                  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">
                  <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                      <li data-filter="*" className="filter-active">All</li>
                      <li data-filter=".filter-app">App</li>
                      <li data-filter=".filter-card">Card</li>
                      <li data-filter=".filter-web">Web</li>
                    </ul>
                  </div>
                </div>

                <div className="row portfolio-container">

                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img src="assets/img/portfolio/portfolio-1.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>App 1</h4>
                      <p>App</p>
                      <a href="assets/img/portfolio/portfolio-1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
                      <a href="#" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src="assets/img/portfolio/portfolio-2.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                      <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                      <a href="#" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img src="assets/img/portfolio/portfolio-3.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>App 2</h4>
                      <p>App</p>
                      <a href="assets/img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
                      <a href="#" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img src="assets/img/portfolio/portfolio-4.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Card 2</h4>
                      <p>Card</p>
                      <a href="assets/img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
                      <a href="#" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src="assets/img/portfolio/portfolio-5.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Web 2</h4>
                      <p>Web</p>
                      <a href="assets/img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
                      <a href="#" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img src="assets/img/portfolio/portfolio-6.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>App 3</h4>
                      <p>App</p>
                      <a href="assets/img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
                      <a href="#" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img src="assets/img/portfolio/portfolio-7.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Card 1</h4>
                      <p>Card</p>
                      <a href="assets/img/portfolio/portfolio-7.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
                      <a href="#" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img src="assets/img/portfolio/portfolio-8.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Card 3</h4>
                      <p>Card</p>
                      <a href="assets/img/portfolio/portfolio-8.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
                      <a href="#" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src="assets/img/portfolio/portfolio-9.jpg" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                      <h4>Web 3</h4>
                      <p>Web</p>
                      <a href="assets/img/portfolio/portfolio-9.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
                      <a href="#" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                  </div>

                </div>

              </div>
            </section>
            <section id="team" className="team section-bg">
              <div className="container">

                <div className="section-title">
                  <h2>Team</h2>
                  <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div className="row">

                  <div className="col-lg-6">
                    <div className="member d-flex align-items-start">
                      <div className="pic"><img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" /></div>
                      <div className="member-info">
                        <h4>Jassa</h4>
                        <span>Chief Executive Officer</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                        <div className="social">
                          <a className=""><i class="ri-twitter-fill"></i></a>
                          <a className=""><i class="ri-facebook-fill"></i></a>
                          <a className=""><i class="ri-instagram-fill"></i></a>
                          <a className=""> <i class="ri-linkedin-box-fill"></i> </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 mt-4 mt-lg-0">
                    <div className="member d-flex align-items-start">
                      <div className="pic"><img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" /></div>
                      <div className="member-info">
                        <h4>Jassa</h4>
                        <span>Product Manager</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                        <div className="social">
                          <a href=""><i className="ri-twitter-fill"></i></a>
                          <a href=""><i className="ri-facebook-fill"></i></a>
                          <a href=""><i className="ri-instagram-fill"></i></a>
                          <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 mt-4">
                    <div className="member d-flex align-items-start">
                      <div className="pic"><img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" /></div>
                      <div className="member-info">
                        <h4>Jassa</h4>
                        <span>CTO</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                        <div className="social">
                          <a href=""><i className="ri-twitter-fill"></i></a>
                          <a href=""><i className="ri-facebook-fill"></i></a>
                          <a href=""><i className="ri-instagram-fill"></i></a>
                          <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 mt-4">
                    <div className="member d-flex align-items-start">
                      <div className="pic"><img src="assets/img/team/team-4.jpg" className="img-fluid" alt=""/></div>
                      <div className="member-info">
                        <h4>Jassa</h4>
                        <span>Accountant</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                        <div className="social">
                          <a href=""><i className="ri-twitter-fill"></i></a>
                          <a href=""><i className="ri-facebook-fill"></i></a>
                          <a href=""><i className="ri-instagram-fill"></i></a>
                          <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </section>

            <section id="contact" className="contact">
              <div className="container">

                <div className="section-title">
                  <h2>Contact Us</h2>
                </div>

                <div className="row mt-1 d-flex justify-content-end">
                  <div className="col-lg-5">
                    <div className="info">
                      <div className="address">
                        <i className="bi bi-geo-alt"></i>
                        <h4>Location:</h4>
                        <p>Ludhiana Punjab India</p>
                      </div>

                      <div className="email">
                        <i className="bi bi-envelope"></i>
                        <h4>Email:</h4>
                        <p><a href="#" className="__cf_email__" >therichposts@gmail.com</a></p>
                      </div>

                      <div className="phone">
                        <i className="bi bi-phone"></i>
                        <h4>Call:</h4>
                        <p>+0 000000 000000 000</p>
                      </div>

                    </div>

                  </div>

                  <div className="col-lg-6 mt-5 mt-lg-0">

                    <form action="#" method="#" role="form" className="php-email-form">
                      <div className="row">
                        <div className="col-md-6 form-group">
                          <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                        </div>
                        <div className="col-md-6 form-group mt-3 mt-md-0">
                          <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                        </div>
                      </div>
                      <div className="form-group mt-3">
                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                      </div>
                      <div className="form-group mt-3">
                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                      </div>
                      <div className="my-3">
                        <div className="loading">Loading</div>
                        <div className="error-message"></div>
                        <div className="sent-message">Your message has been sent. Thank you!</div>
                      </div>
                      <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>

                  </div>

                </div>

              </div>
            </section>
          </main>
          <footer id="footer">

            <div className="footer-newsletter">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <h4>Our Newsletter</h4>
                    <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                  </div>
                  <div className="col-lg-6">
                    <form action="" method="post">
                      <input type="email" name="email" /><input type="submit" value="Subscribe" />
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-top">
              <div className="container">
                <div className="row">

                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Useful Links</h4>
                    <ul>
                      <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                      <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                      <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                      <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                      <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Our Services</h4>
                    <ul>
                      <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                      <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                      <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                      <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                      <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-6 footer-contact">
                    <h4>Contact Us</h4>
                    <p>
                      Ludhiana <br />
                      Punjab<br />
                      India <br /><br />
                      <strong>Phone:</strong> +1 00000 00000 000<br />
                      <strong>Email:</strong> <a href="#" className="__cf_email__" >therichposts@gmail.com</a><br />
                    </p>

                  </div>

                  <div className="col-lg-3 col-md-6 footer-info">
                    <h3>About Jassa</h3>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                    <div className="social-links mt-3">
                      <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                      <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                      <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                      <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                      <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="container">
              <div className="copyright">
                &copy; Copyright <strong><span>Jassa</span></strong>. All Rights Reserved
              </div>
              <div className="credits">
              
                by <a href="https://therichpost.com/">Jassa</a>
              </div>
            </div>
          </footer>

          
     </div>
)
};
}

export default Home;