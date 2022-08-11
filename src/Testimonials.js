import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Testimonials = () => {

    return (
        <section className="testimionals">
            <div className="container">
                <div className="about-head">
                    <h2>Testimonials
                    </h2>
                    <p>Magnam dolores commodi suscipit.Necessitatibus eius consequatur ex aliquid fuga eum quidem.Sit sint consectetur velit.Quisquam quos quisquam cupiditate.Et nemo qui impedit suscipit alias ea.Quia fugiat sit in iste officiis commodi quidem hic quas.

                    </p>
                </div>

                <div className="testimonial">
                <Carousel autoPlay infiniteLoop>
                <div>
                    <img src="/images/testimonials/testimonials-1.jpg" alt="" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                <img src="/images/testimonials/testimonials-2.jpg" alt="" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                <img src="/images/testimonials/testimonials-3.jpg" alt="" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
                    {/* <Testimonial>
                        <div className="card content mx-auto" >
                            <div className="card-body">
                                <div> <img src="/images/testimonials/testimonials-1.jpg" alt="" /> </div>
                                <span>
                                    I had the pleasure of working with him on an exciting project for over 18 months.
                                    We have shared some highs, lows and some real head scratching moments.
                                    He has been a real asset to the team and to me personally.
                                </span>
                                <p>Abc</p>
                            </div>
                        </div>
                        <div className="card content mx-auto" >
                            <div className="card-body">
                                <div> <img src="/images/testimonials/testimonials-2.jpg" alt="" /> </div>

                                <span>
                                    He has been a real asset to the team and able to pick up new technologies quickly. He has a passion for all flavours of development and is a team player with an excellent attitude both in and outside of work.
                                </span>
                                <p>Xyz</p>
                            </div>
                        </div>
                        <div className="card content mx-auto" >
                            <div className="card-body">
                                <div> <img src="/images/testimonials/testimonials-3.jpg" alt="" /> </div>
                                <span>
                                    He has been a real asset to the team and able to pick up new technologies quickly. He has a passion for all flavours of development and is a team player with an excellent attitude both in and outside of work.
                                </span>
                                <p>Xyz</p>
                            </div>
                        </div>
                    </Testimonial> */}

                    <div className="test">
                 

                    </div>


                </div>
            </div>
        </section>
    );
}

export default Testimonials;