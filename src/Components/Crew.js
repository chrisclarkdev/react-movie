import React from "react";
const Crew = props => {
  return (
    <div>
      <p>
        Directed by:{" "}
        <span style={{ fontWeight: "700" }}>
          {props.crew && props.crew[0] && props.crew[0].name}
        </span>
      </p>
    </div>
  );
};
export default Crew;
