import * as d3 from "d3";
import React, { useState, useEffect, useRef } from "react";

export default function Trancisions() {
  const divRef = useRef();

  function draw() {
    const div = d3.select(divRef.current);

    let svg = div
      .append("svg")
      .attr("width", 1024)
      .attr("height", 600)
      .attr("fill", "gray");

    let g = svg.append("g").attr("id", "main_g");

    const rect_a = g
      .append("rect")
      .attr("width", 50)
      .attr("height", 40)
      .attr("fill", "red")
      .attr("x", 60)
      .attr("y", 60)
      .attr("id", "id_r1");

    const cl = g
      .append("circle")
      .attr("r", 50)
      .attr("fill", "blue")
      .attr("cx", 50)
      .attr("cy", 70)
      .attr("id", "id_c1");

    //cl.transition().ease(d3.easeLinear).duration(5000).attr("r", 200);

    rect_a.transition().ease(d3.easeLinear).duration(5000).attr("x", 200);

    rect_a.transition().ease(d3.easeLinear).delay(5000).remove();
  }
  useEffect(() => {
    draw();
  }, []);

  return (
    <div>
      <div>
        {" "}
        <h1> Page Header</h1>{" "}
      </div>
      <div ref={divRef}></div>
    </div>
  );
}
