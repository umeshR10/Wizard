import "./index.css";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const FilterSection = (props) => {
  const token = Cookies.get("jwt_token");

  const [allValues, setValues] = useState({
    personDetails: {},
  });

  const { onClickEpmType, onClickSallary } = props;

  const EmpType = [
    {
      label: "Full Time",
      EmpTypeId: "FULLTIME",
    },
    {
      label: "Part Time",
      EmpTypeId: "PARTTIME",
    },
    {
      label: "Freelance",
      EmpTypeId: "FREELANCE",
    },
    {
      label: "Internship",
      EmpTypeId: "INTERNSHIP",
    },
  ];

  const EmpSalary = [
    {
      label: "10 LPA and above",
      salaryId: "1000000",
    },
    {
      label: "20 LPA and above",
      salaryId: "2000000",
    },
    {
      label: "30 LPA and above",
      salaryId: "3000000",
    },
    {
      label: "40 LPA and above",
      salaryId: "4000000",
    },
  ];

  useEffect(() => {
    const fetchApi = async () => {
      const api = "https://apis.ccbp.in/profile";

      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(api, options);
      const fetchData = await response.json();

      if (response.ok === true) {
        setValues({ ...allValues, personDetails: fetchData.profile_details });
      }
    };

    fetchApi();
  }, []);

  const TypeOfEmployement = () => {
    const onCheckClick = (e) => {
      onClickEpmType(e.target.value, e.target.checked);
    };

    return EmpType.map((eachType) => {
      return (
        <li key={eachType.EmpTypeId}>
          <input
            className="EmpTypeCheckbox"
            type="checkbox"
            value={eachType.EmpTypeId}
            id={eachType.EmpTypeId}
            onChange={onCheckClick}
          />
          <label htmlFor={eachType.EmpTypeId}>{eachType.label}</label>
        </li>
      );
    });
  };

  const EmployeeSalary = () => {
    const onCheckSallary = (e) => {
      onClickSallary(e.target.value);
    };

    return EmpSalary.map((personsal) => {
      return (
        <li key={personsal.salaryId}>
          <input
            className="EmpTypeCheckbox"
            type="radio"
            value={personsal.salaryId}
            name="Salary_Range"
            onChange={onCheckSallary}
          />
          <label htmlFor={personsal.salaryId}>{personsal.label}</label>
        </li>
      );
    });
  };

  const renderProfileofEmp = () => {
    return (
      <div className="profileDetails">
        <img
          src="https://assets.ccbp.in/frontend/react-js/male-avatar-img.png"
          alt="Profile_logo"
        />
        <br />
        <br />
        <h4 className="text-primary">{allValues.personDetails.name}</h4>
        <p>{allValues.personDetails.short_bio}</p>
      </div>
    );
  };

  const renderTypeOfEmployement = () => {
    return (
      <div>
        <h2>Type of Employment</h2>
        <span>{TypeOfEmployement()}</span>
      </div>
    );
  };

  const renderEmployeeSalary = () => {
    return (
      <div>
        <h2>Salary Range</h2>
        <span>{EmployeeSalary()}</span>
      </div>
    );
  };

  return (
    <div className="FilterSectionI">
      {renderProfileofEmp()}
      <hr />
      {renderTypeOfEmployement()}
      <hr />
      {renderEmployeeSalary()}
    </div>
  );
};

export default FilterSection;
