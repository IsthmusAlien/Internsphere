import React from "react";
import "./css/Home.css";

import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate() 

  return (
    <>

    <header className="header-home">

      <div className="btn-group-home">

        <button className="btn-home btn-employer-home" onClick={() => navigate("/login", { state: { user_type: "emp" } })}>
          Employer
        </button>

        <button className="btn-home btn-student-home" onClick={() => navigate("/login", { state: { user_type: "std" } })}>
          Student
        </button>

      </div>
    </header>

    <div className="main-home">

      <div className="bgimg-home">

        <div className="caption-home">

          <img src="/title_logo.svg" alt="Internsphere Logo" className="title-home" />

          <p className="subtitle-home">for Students, by Students</p>

        </div>
      </div>

      <footer className="footer-home">

        <div className="quote-container-home">

        <p className="edu-quote-home">
          <em>"The beautiful thing about learning is that no one can take it away from you."</em>{" "} — B.B. King
        </p>

        </div>
      </footer>
    </div>
  </>
  );
}

export default Home;
