import "./JobsStyles.css"
import JobsData from "./JobsData"
import Jobs1 from "../assets/4.jpg";

function Jobs(){
    return(
        <div className="jobs">
            <h1>Recent Jobs</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="tripcard">
                <JobsData
                image={Jobs1}
                heading="Basement"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />

                <JobsData
                image={Jobs1}
                heading="Basement"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
                />

                <JobsData
                image={Jobs1}
                heading="Basement"
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                />
            </div>
        </div>
    )
}

export default Jobs