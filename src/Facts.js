const Facts = () => {
    return (
        <section className="facts">
            <div className="container">
                <div className="about-head">
                    <h2>FACTS
                    </h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.

                    </p>
                </div>

                <div className="fact-bars">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="fact-box">
                                <div className="fact-progress-head">
                                    <h4>HTML</h4>
                                    <span> 100%</span></div>
                                <div class="progress fact-bar-color">
                                    <div class="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="fact-box">
                                <div className="fact-progress-head">
                                    <h4>CSS</h4>
                                    <span> 90%</span></div>
                                <div class="progress fact-bar-color">
                                    <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="fact-box">
                                <div className="fact-progress-head">
                                    <h4>JAVASCRIPT</h4>
                                    <span> 50%</span></div>
                                <div class="progress fact-bar-color">
                                    <div class="progress-bar" role="progressbar" style={{ width: "50%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        <div className="fact-box">
                                <div className="fact-progress-head">
                                    <h4>PHP</h4>
                                    <span> 60%</span></div>
                                <div class="progress fact-bar-color">
                                    <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="fact-box">
                                <div className="fact-progress-head">
                                    <h4>WORDPRESS</h4>
                                    <span> 10%</span></div>
                                <div class="progress fact-bar-color">
                                    <div class="progress-bar" role="progressbar" style={{ width: "10%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                            <div className="fact-box">
                                <div className="fact-progress-head">
                                    <h4>PHOTOSHOP</h4>
                                    <span> 00%</span></div>
                                <div class="progress fact-bar-color">
                                    <div class="progress-bar" role="progressbar" style={{ width: "00%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>




        </section>
    );
}

export default Facts;
