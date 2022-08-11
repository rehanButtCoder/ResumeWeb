const Navbar = () => {
    
    return (

        <section className="menu">
            <ul>
                <li><a href="#Banner"><i class="fa fa-home"></i><span>Home</span></a></li>
                <li><a href="#Abouts"><i class="fa fa-user"></i><span>About</span></a></li>
                <li><a href="#Skills"><i class="fa fa-file"></i><span>Resume</span></a></li>
                <li><a href="#Portfolio"><i class="fa fa-book"></i><span>Portfolio</span></a></li>
                <li><a href="#Services"><i class="fa fa-car"></i><span>Services</span></a></li>
                <li><a href="#Contact"><i class="fa fa-camera"></i><span>Contact</span></a></li>
            </ul>
        </section>
    );
}

export default Navbar;