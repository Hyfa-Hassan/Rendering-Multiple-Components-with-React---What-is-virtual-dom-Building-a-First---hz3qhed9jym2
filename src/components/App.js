import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  const name = "Online Chat App"
  const description = "people can easily chat online with any stranger"
  return (
    <div id="main">
      <h1 data-ns-test="project-name">{name}</h1>
      <p data-ns-test="project-description">{description}</p>
    </div>
  )
}


export default App;
