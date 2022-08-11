import CountUp from 'react-countup';




const Skills = () => {
  
   // const el = document.querySelector( '.skills-icon-box h2' )

    return (
        <section className="skills" id="Skills">
            <div className="container">
                <div className="about-head">
                    <h2>SKILLS
                    </h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.

                    </p>
                </div>
              
                <div className="skills-icons">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="skills-icon-box">
                                <div ><i class="fa fa-twitter"></i></div>
                                <CountUp 
                                start={0} 
                                end={100}
                                 delay={0}
  duration={6}
>
{({ countUpRef }) => (
    <div>
      <h2 ref={countUpRef} >0</h2>
    </div>
  )}
</CountUp>
                                <p>Happy Clients</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="skills-icon-box">
                                <div ><i class="fa fa-twitter"></i></div>
                                <CountUp 
                                start={0} 
                                end={512}
                                 delay={0}
  duration={6}
>
{({ countUpRef }) => (
    <div>
      <h2 ref={countUpRef} >0</h2>
    </div>
  )}
</CountUp>
                                <p>Projects</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="skills-icon-box">
                                <div ><i class="fa fa-twitter"></i></div>
                                <CountUp 
                                start={0} 
                                end={25}
                                 delay={0}
                                
  duration={6}
>
{({ countUpRef }) => (
    <div>
      <h2 ref={countUpRef} >0</h2>
    </div>
  )}
</CountUp>
                                <p>Help and Support</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="skills-icon-box">
                                <div ><i class="fa fa-twitter"></i></div>
                                <CountUp 
                                start={0} 
                                end={512}
                                 delay={0}
  duration={6}
>
{({ countUpRef }) => (
    <div>
      <h2 ref={countUpRef} >25</h2>
    </div>
  )}
</CountUp>
                                <p>Awards</p>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </section>
    );
}

export default Skills;
