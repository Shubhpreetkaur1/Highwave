import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import AboutImg from "../assets/3.jpg";
import Footer from "../components/Footer";
import Jobs from "../components/Jobs";

function Service (){
    return(
        <>
        <Navbar/>
          
          <Hero
       cName="hero-mid"
       heroImg={AboutImg}
       title="Service"
       btnClass="hide"
       />
       <Jobs/>
        <Footer/>
        </>
    )
    }
    
    export default Service;