import "./index.css";
import Header from "../Header/index";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home-main-cont">
      <Header />
      <div className="Home-text-cont">
        <h1 className="mb-3">Find The Job That Fits Your Life</h1>
        <p>
          Millions of people are searching for jobs, salary information, company
          reviews. Find the job that fits your abilities and potential.
        </p>
        <Link to="/jobs">
            <button className="btn btn-primary"> Find Jobs </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
