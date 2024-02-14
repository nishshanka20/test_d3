import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

function ScatterPlot() {
  const divRef = useRef();
  const tmp_st = d3.range(10).map(() => {
    return { x: d3.randomInt(100)(), y: d3.randomInt(100)() };
  });

  const value = [45, 50, 23, 54, 43, 15, 20];

  function draw() {
    const div = d3.select(divRef.current);

    var svg = div.append("svg").attr("width", 1000).attr("height", 800);

    var g = svg.append("g").attr("id", "main_g");

    let scatter = g
      .selectAll("circle")
      .data(tmp_st)
      .enter()
      .append("circle")
      .attr("r", 5) // set radius
      //.attr("cx", (d) => (i + 1) * 100) // set x position
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y) // set y position
      .attr("fill", "blue"); // set fill color
  }
  useEffect(() => {
    draw();
  }, []);
  return (
    <div>
      <div>
        {" "}
        <h1> Scatter plot</h1>{" "}
      </div>
      <div ref={divRef}></div>
    </div>
  );
}

export default ScatterPlot;
