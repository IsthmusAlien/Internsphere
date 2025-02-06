import React from "react";
import "./css/Home.css";

function Home() {
  return (
    
    <div className="Home">

      <div className="bgimg-1">
        <div className="caption">
          <h2>Internsphere</h2>
          <p>By Students For Students</p>
        </div>
      </div>

      <div 
        style={{ 
          position: "relative"
         }}
        >

        <div
          style={{
            color: "#ddd",
            backgroundColor: "#282E34",
            textAlign: "justify",
            padding: "50px 80px"
          }}
        >

          <p>Educational Quote Here.</p>

        </div>
      </div>

    </div>
  );
}

export default Home;
