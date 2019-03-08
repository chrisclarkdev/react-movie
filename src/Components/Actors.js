import React from "react";
// import { Link } from "react-router-dom";
// import Actor from "./Actor";
const img_base = "https://image.tmdb.org/t/p/";
const img_size = "w300/";
const img_style = {
  width: "100px",
  height: "110px",
  marginLeft: "-30px",
  marginRight: "5px",
  marginTop: "0px",
  borderRadius: "50%",
  flexBasis: "100px"
};
const Actors = props => {
  return (
    <div>
      {props.actors.map(casting => (
        <ul key={casting.id}>
          <li
            style={{
              height: "100px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              listStyle: "none",
              textDecoration: "none"
            }}>
            <React.Fragment>
              {casting.profile_path !== null ? (
                <img
                  style={img_style}
                  src={`${img_base}${img_size}${casting.profile_path}`}
                  alt={casting.name}
                />
              ) : (
                <img
                  style={img_style}
                  className='actor-img'
                  src='http://foocoders.com/img/placeholder.jpg'
                  alt={casting.name}
                />
              )}
              <h4
                style={{
                  textAlign: "left",
                  flexBasis: "190px",
                  fontWeight: "700"
                }}>
                {casting.name}
              </h4>
              <h4
                style={{
                  textAlign: "right",
                  marginRight: "5px",
                  fontWeight: "100"
                }}>
                {casting.character
                  .replace("(voice)", "  ")
                  .replace("(uncredited)", "")
                  .replace("/ ", "")
                  .slice(0, 12)}
              </h4>
            </React.Fragment>
          </li>
          <hr
            style={{
              color: "#ccc",
              width: "95%",
              marginLeft: "-10px",
              alignItems: "center"
            }}
          />
        </ul>
      ))}
    </div>
  );
};
export default Actors;
