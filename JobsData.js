import "./JobsStyles.css";

function JobsData(props){
    return(
        <div className="t-cards">
            <div className="t-image">
                <img alt="hey" src={props.image}/>
            </div>

            <h4>{props.heading}</h4>
            <p>{props.text}</p>
        </div>
    )
}

export default JobsData