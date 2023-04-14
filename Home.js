import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Destination from "../components/Destination";
import HeroImg from "../assets/3.jpg";
import Jobs from "../components/Jobs";
import Footer from "../components/Footer";

function Home (){
return(
    <>
    <Navbar/>
    
       <Hero
       cName="hero"
       heroImg={HeroImg}
       title="Our journey is adventurus"
       text="lorum epsum"
       buttonText="Construction"
       url="/"
       btnClass="show"
       />
       <Destination/>
       <Jobs/>
       <Footer/>
    
    </>
)
}

export default Home;