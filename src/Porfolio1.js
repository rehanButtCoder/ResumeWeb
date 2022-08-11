import { ImageGroup, Image } from 'react-fullscreen-image'

const portfolio1 = () => {
    const images = [
        '/images/portfolio/portfolio-2.jpg',
        '/images/portfolio/portfolio-1.jpg',
        '/images/portfolio/portfolio-3.jpg',
        '/images/portfolio/portfolio-4.jpg',
        '/images/portfolio/portfolio-5.jpg',
        '/images/portfolio/portfolio-6.jpg',
        '/images/portfolio/portfolio-7.jpg',
        '/images/portfolio/portfolio-8.jpg',
        // '/images/portfolio/portfolio-9.jpg',
     
      ]
    return (
        

        <section className="portfolio1" id="Portfolio">
            <ImageGroup>
      <ul className="images">
        {images.map(i => (
          <li key={i}>
            <Image
              src={i}
              alt="nature"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                height: '100%',
                width: '100%',
                objectFit: 'cover',
              }}
            />
          </li>
        ))}
      </ul>
    </ImageGroup>

            <div className="container">
                <div className="row">
                    <div className="about-head">
                        <h2>Portfolio
                        </h2>
                        <p>Magnam dolores commodi suscipit.Necessitatibus eius consequatur ex aliquid fuga eum quidem.Sit sint consectetur velit.Quisquam quos quisquam cupiditate.Et nemo qui impedit suscipit alias ea.Quia fugiat sit in iste officiis commodi quidem hic quas.

                        </p>
                    </div>
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">All</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">App</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Card</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-web" data-bs-toggle="pill" data-bs-target="#pills-web" type="button" role="tab" aria-controls="pills-web" aria-selected="false">Web</button>
                        </li>

                    </ul>


                    <div class="tab-content" id="pills-tabContent">
                      

                        <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="/images/portfolio/portfolio-1.jpg" alt="" />
                                    <img src="/images/portfolio/portfolio-2.jpg " alt="" />
                                    <img src="/images/portfolio/portfolio-3.jpg " alt="" />
                                    <img src="/images/portfolio/portfolio-4.jpg " alt="" />
                                </div>
                                <div className="col-md-4">
                                    <img src="/images/portfolio/portfolio-5.jpg" alt="" />
                                    <img src="/images/portfolio/portfolio-6.jpg " alt="" />
                        
                                </div>
                                <div className="col-md-4">
                                    <img src="/images/portfolio/portfolio-9.jpg" alt="" />
                                    <img src="/images/portfolio/portfolio-1.jpg " alt="" />
                                    <img src="/images/portfolio/portfolio-2.jpg " alt="" />
                                    <img src="/images/portfolio/portfolio-3.jpg " alt="" />
                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="/images/portfolio/portfolio-1.jpg" alt="" />

                                </div>
                                <div className="col-md-4">
                                    <img src="/images/portfolio/portfolio-5.jpg" alt="" />

                                </div>
                                <div className="col-md-4">
                                    <img src="/images/portfolio/portfolio-9.jpg" alt="" />

                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="/images/portfolio/portfolio-details-1.jpg" alt="" />

                                </div>
                                <div className="col-md-4">
                                    <img src="/images/portfolio/portfolio-details-2.jpg" alt="" />

                                </div>
                                <div className="col-md-4">
                                    <img src="/images/portfolio/portfolio-details-3.jpg" alt="" />

                                </div>
                            </div>
                        </div>

                        <div class="tab-pane fade show" id="pills-web" role="tabpanel" aria-labelledby="pills-contact-web">
                            <div className="row">
                                <div className="col-md-4">

                                    <img src="/images/portfolio/portfolio-4.jpg " alt="" />
                                </div>
                                <div className="col-md-4">

                                    <img src="/images/portfolio/portfolio-8.jpg " alt="" />
                                </div>
                                <div className="col-md-4">

                                    <img src="/images/portfolio/portfolio-3.jpg " alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default portfolio1;