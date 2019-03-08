import React from "react";
import { Link } from "react-router-dom";
const img_base = "https://image.tmdb.org/t/p/";
const img_size = "w300/";

const NowShowing = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%"
      }}>
      {props.trends.map(trending => (
        <ul
          className='ul-margin'
          key={trending.id}
          style={{ listStyle: "none", width: "100%", marginLeft: "-37px" }}>
          <Link
            to={{
              pathname: `/movie/${trending.id}`,
              state: { movieData: trending }
            }}
            style={{ textDecoration: "none" }}>
            <div style={{ width: "100%" }}>
              <li
                className='help'
                style={{
                  display: "flex",
                  marginBottom: "2px"
                }}>
                <img
                  style={{
                    width: "100px",
                    marginRight: "5px"
                  }}
                  alt={trending.name || trending.title}
                  src={`${img_base}${img_size}${trending.poster_path}`}
                />
                <div>
                  <p style={{ flexWrap: "wrap", color: "rgb(120, 120,120)" }}>
                    {trending.release_date.slice(0, 4)}{" "}
                  </p>
                  <p
                    style={{
                      color: "#444",
                      fontSize: "1em",
                      flexWrap: "wrap",
                      fontWeight: "700"
                    }}>
                    {trending.name || trending.title.slice(0, 30)}
                  </p>
                  <p style={{ color: "rgb(120, 120, 120)" }} />
                </div>
              </li>
            </div>
          </Link>
        </ul>
      ))}
    </div>
  );
};

export default NowShowing;
