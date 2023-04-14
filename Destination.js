import MainImg from "../assets/1.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () =>{
    return(
        <div className="destination">
          <h1>
            Our work
          </h1>  
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis iure consequuntur soluta officiis sequi cupiditate odit vel quidem libero non nihil ex possimus nesciunt quo autem saepe, dolorem ipsum! Sequi.
          </p>
          <DestinationData
          className="first-des"
          heading="Needs to be filled"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, et similique quas aliquam facilis illo repellat autem inventore excepturi ipsum saepe dolor, quibusdam, deserunt ducimus sunt ab explicabo iusto exercitationem!"
          img1={MainImg}
          img2={MainImg}
          />

        <DestinationData
          className="first-des-reverse"
          heading="Needs to be filled"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, et similique quas aliquam facilis illo repellat autem inventore excepturi ipsum saepe dolor, quibusdam, deserunt ducimus sunt ab explicabo iusto exercitationem!"
          img1={MainImg}
          img2={MainImg}
          />
        </div>
    )
}

export default Destination