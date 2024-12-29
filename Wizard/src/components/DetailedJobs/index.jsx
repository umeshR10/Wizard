import { useEffect, useState } from "react";
import "./index.css";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const DetailedJobs = () => {
  const { id } = useParams();

  const token = Cookies.get("jwt_token");

  const [allValues, setValues] = useState({
    viewJobDetailes: {},
    viewSkills:[],
    viewSimilarJobs: {},
  });

  useEffect(() => {
    const fetchDetailedJobsView = async () => {
      const api = `https://apis.ccbp.in/jobs/${id}`;

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(api, options);
      const fetchData = await response.json();

      console.log(fetchData);

      if (response.ok === true) {
        setValues({
          ...allValues,
          viewJobDetailes: fetchData.job_details,
          viewSkills : fetchData.job_details.skills,
          viewLifeAtCompany : fetchData.job_details.life_at_company,
          viewSimilarJobs: fetchData.similar_jobs,
        });
      }
    };
    fetchDetailedJobsView();
  }, []);


  return(
      <div className="Fullpage-Cont">
        <div className="viewJobDetailes-Section">
          <div className="Top-section">
            <img
              className="img-logo-allJobs"
              src={allValues.viewJobDetailes.company_logo_url}
              alt=""
            />
            <span>
              <h4>{allValues.viewJobDetailes.title}</h4>
              <h4>
                <i className="fa-solid fa-star text-warning"></i>
                {allValues.viewJobDetailes.rating}
              </h4>
            </span>
          </div>
          <br />
          <div className="Mid-section">
            <span className="First-mid-section">
              <p>
                <i className="fa-solid fa-location-dot"></i>
                {allValues.viewJobDetailes.location}
              </p>
              <p>
                <i className="fa-solid fa-briefcase"></i>
                {allValues.viewJobDetailes.employment_type}
              </p>
            </span>
            <h6>{allValues.viewJobDetailes.package_per_annum}</h6>
          </div>
          <hr />
          <span className="First-bottom-section">
            <h5>Description</h5>
            <Link to={allValues.viewJobDetailes.company_website_url}>
              <h6 className="text-primary">Visit</h6>
            </Link>
          </span>
          <p>{allValues.viewJobDetailes.job_description}</p>
        </div>
        <h6> Skills </h6>
        <div className="viewSkills-Section">
            {allValues.viewSkills.map((each)=>{
              return (
              <div>
                  <li className="skillsLi"><img src={each.image_url} width="25px" height="25px" className="img-skills"/>{each.name}</li>
              </div>
              )
            })}
          </div>
      </div>
  )
};

export default DetailedJobs;
