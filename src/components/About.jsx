import React from "react";

export default function About() {
  return (
    <div
      className="About"
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        This is a simple react app made using redux toolkit for practice
      </h1>
    </div>
  );
}
