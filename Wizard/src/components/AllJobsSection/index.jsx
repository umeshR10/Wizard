import "./index.css";
import { Link } from "react-router-dom";



const AllJobsSection = (props) => {
 
  const {jobItems} = props;

  return (
        <Link to={jobItems.id}>
          <li className="company-list">
            <div className="top-sec">
              <img
                className="img-for-alljobs"
                src={jobItems.company_logo_url}
                alt=""
              />
              <span>
                <h4>{jobItems.title}</h4>
                <h4>
                  <i className="fa-solid fa-star text-warning"></i>
                  {jobItems.rating}
                </h4>
              </span>
            </div>
            <br />
            <div className="mid-sec">
              <span className="inner-first-mid-sec">
                <p>
                  <i className="fa-solid fa-location-dot"></i> {jobItems.location}
                </p>
                <p>
                  <i className="fa-solid fa-briefcase"></i>
                  {jobItems.employment_type}
                </p>
              </span>
              <h6>{jobItems.package_per_annum}</h6>
            </div>
            <hr />
            <h5>Description</h5>
            <p>{jobItems.job_description}</p>
          </li>
        </Link>
  );
};

export default AllJobsSection;
