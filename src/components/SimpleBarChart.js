import * as d3 from "d3";
import { useState, useEffect, useRef } from "react";

export default function SimpleBarChart() {
  const divRef = useRef();

  function draw() {
    const div = d3.select(divRef.current);

    console.log("simple bar chart creating");

    //div.append("div").append("h").text("Simple Bar Chart");

    //add main svg
    var svg = div
      .append("g")
      .append("svg")
      .attr("width", 1000)
      .attr("fill", "grey");

    // svg
    //   .append("rect")
    //   .attr("width", 400)
    //   .attr("height", 50)
    //   .attr("fill", "pink")
    //   .attr("x", 50)
    //   .attr("y", 50);

    var cl = svg
      .append("circle")
      .attr("r", 100)
      .attr("fill", "black")
      .attr("cx", 200)
      .attr("cy", 400);

    cl.attr("fill", "grey");
  }

  useEffect(() => {
    draw();
  }, []);

  return (
    <div ref={divRef}>
      <h1>simple chart</h1>
    </div>
  );
}
