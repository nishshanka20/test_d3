import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import SimpleBarChart from "./components/SimpleBarChart";
import { select } from "d3";
import Test from "./components/Test";
import LineChart from "./components/LineChart";
import SimpleOperations from "./components/SimpleOperarions";
import Transform from "./components/SimpleOperation_transform";
import Trancisions from "./components/Test_Trancisions";
import ScatterPlot from "./components/ScatterPlot";

function App() {
  return (
    <>
      <ScatterPlot />
    </>
  );
}

export default App;
