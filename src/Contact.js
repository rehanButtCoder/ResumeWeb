const Contact = () => {
    return (

        <section className="contact" id="Contact">
            <div className="container">
                <div className="about-head">
                    <h2>Contact
                    </h2>
                    <p>Magnam dolores commodi suscipit.Necessitatibus eius consequatur ex aliquid fuga eum quidem.Sit sint consectetur velit.Quisquam quos quisquam cupiditate.Et nemo qui impedit suscipit alias ea.Quia fugiat sit in iste officiis commodi quidem hic quas.

                    </p>

                </div>
                <div className="contact-body">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="c-box">
                                <i class="fa fa-map"></i>
                                <div className="c-box-content">
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>
                            </div>
                            <div className="c-box">
                                <i class="fa fa-mobile"></i>
                                <div className="c-box-content">
                                    <h4>Email:</h4>
                                    <p>info@example.com

                                    </p>
                                </div>
                            </div>
                            <div className="c-box">
                                <i class="fa fa-phone"></i>
                                <div className="c-box-content">
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s

                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <form>
        <div className="row">
                                <div class="form-group col-md-6">
                                    <input type="text" class="form-control" id="inputAddress" placeholder="Name" />
                                </div>
                                <div class="form-group col-md-6">
                                    <input type="Email" class="form-control" id="inputAddress2" placeholder="Email" />
                                </div>

                                </div>
                                <div class="form-group mt-4">
                                    <input type="Email" class="form-control" id="inputAddress2" placeholder="Subject" />
                                </div>
                                <div class="form-group mt-4">
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>

                                <button type="submit" class="btn btn-primary mt-4">Sign in</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;

