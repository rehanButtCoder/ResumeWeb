import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Facts from "./Facts";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Portfolio1 from "./Porfolio1";
import Services from "./Services";
// import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Testimonials from "./Testimonials";

const Home = () => {


    return (
        <div>

            <Navbar />
            <Banner />

            <About />

            <Skills />
            <Facts />
            <Portfolio1 />

            <Services />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );

}

export default Home;