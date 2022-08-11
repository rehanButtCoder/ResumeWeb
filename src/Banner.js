import Typewriter from "typewriter-effect";

const Banner = () => {

    return (

        <div>
            <div className="main" id="Banner">
                <div className="container">
                    <div className="main-content">
                        <h1>Brandon Johnson</h1>
                        <h2>I'm <span className="typeffect"></span>
                            {

                                <Typewriter
                                    options={{

                                        loop: true
                                    }}
                                    onInit={(typewriter) => {

                                        typewriter

                                            .typeString(" Developer")

                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString(" Freelancer")
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString(" Photographer")
                                            .start();
                                    }}
                                />

                            }

                        </h2>

                        <div className="main-icons">
                            <i class="fa fa-twitter"></i>
                            <i class="fa fa-facebook"></i>
                            <i class="fa fa-instagram"></i>
                            <i class="fa fa-whatsapp"></i>
                            <i class="fa fa-skype"></i>
                        </div>

                    </div>
                </div>
            </div>


        </div>

    );
}

export default Banner;