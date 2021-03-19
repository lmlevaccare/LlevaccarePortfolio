import React from 'react'
import "../App.css"
import TypedScript from "../components/TypedScript"

 const HpageLogo = () => {

    return (
      <div className="portfoliologo">
        <h1 style={{ color: "orange", fontStyle: "italic" }}>
          Lets Create Together
          {/* "First solve the problem. <br></br>Then, write the code" */}
        </h1>

        <br />
        <TypedScript />
      </div>
    );
}
export default HpageLogo