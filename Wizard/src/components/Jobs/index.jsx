import "./index.css";
import Header from "../Header";
import FilterSection from "../FilterSection";
import AllJobsSection from "../AllJobsSection";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const Jobs = () => {
  const token = Cookies.get("jwt_token");

  const [allValues, SetValues] = useState({
    JobDetails: [],
    empType: [],
    EmpSalary: "",
    searchInput: "",
  });

  useEffect(() => {
    const fetchJobDetails = async () => {
      const api = `https://apis.ccbp.in/jobs?employment_type=${allValues.empType}&minimum_package=${allValues.EmpSalary}&search=${allValues.searchInput}`;

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(api, options);
      const fetchData = await response.json();
      if (response.ok === true) {
        SetValues({ ...allValues, JobDetails: fetchData.jobs });
      }
    };

    fetchJobDetails();
  }, [allValues.searchInput, allValues.empType, allValues.EmpSalary]);

  const onEnterValue = (e) => {
    if (e.key === "Enter") {
      SetValues({ ...allValues, searchInput: e.target.value });
    }
  };

  const onCheckEmpType = (value, isChecked) => {
    if (isChecked) {
      SetValues({ ...allValues, empType: [...allValues.empType, value] });
    } else {
      SetValues({
        ...allValues,
        empType: [...allValues.empType.filter((each) => each != value)],
      });
    }
  };

  const onCheckSallary = (value) => {
    SetValues({ ...allValues, EmpSalary: value });
  };

  return (
    <div className="Jobs-main-Page">
      <Header />
      <div className="jobspage-combine-section">
        <div className="filter-section">
          <input
            type="search"
            className="search-small form-control border border-dark"
            placeholder="Search"
            onKeyDown={onEnterValue}
          />
          <br />
          <FilterSection
            onClickEpmType={onCheckEmpType}
            onClickSallary={onCheckSallary}
          />
        </div>

        <div className="jobs-search-section">
          <input
            type="search"
            className="search-bar form-control border border-dark"
            placeholder="Search"
            onKeyDown={onEnterValue}
          />
          <ul>
            {allValues.JobDetails.map((each) => (
              <AllJobsSection key={each.id} jobItems={each} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
