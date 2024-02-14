import * as d3 from "d3";
import React, { useState, useEffect, useRef } from "react";
import { ReactComponent as BaseSvg } from "../assets/svg.svg";

export default function SimpleOperations() {
  const divRef = useRef();

  function draw() {
    const div = d3.select(divRef.current);

    //select the svg

    var svg = div.select("svg");

    var rect = svg.selectAll("rect").attr("fill", "orange");

    var cl = svg.selectAll("circle").attr("fill", "red").attr("r", 10);

    //select specific item

    //var rect_two = svg.select("#ga2").attr("fill", "blue");
    var cl_one = svg.select("#ga1").attr("fill", "black").attr("r", 40);

    //change the positions

    //circle change the r

    // simple operations

    // add main svg

    ///////last commented

    var svg = div
      .append("svg")
      .attr("width", 1000)
      .attr("height", 800)
      .attr("fill", "grey");

    var g = svg.append("g");

    const rect_a = g
      .append("rect")
      .attr("width", 400)
      .attr("height", 50)
      .attr("fill", "pink")
      .attr("x", 50)
      .attr("y", 50)
      .attr("id", "id_one");

    const rect_b = g
      .append("rect")
      .attr("width", 400)
      .attr("height", 50)
      .attr("fill", "red")
      .attr("x", 50)
      .attr("y", 150)
      .attr("id", "id_two");

    const rect_c = g
      .append("rect")
      .attr("width", 400)
      .attr("height", 50)
      .attr("fill", "yellow")
      .attr("x", 50)
      .attr("y", 250)
      .attr("id", "id_three");

    const cl_a = g
      .append("circle")
      .attr("cx", 200)
      .attr("cy", 50)
      .attr("r", 10)
      .attr("fill", "purple");

    rect_a.attr("fill", "pink");
    rect_a.attr("width", 800);
    //

    //selections methods 3 ( type , id , class)

    // const ele_a = div.select("rect");
    // ele_a.attr("fill", "blue");

    // const all_rects = svg.selectAll("rect");
    // all_rects.attr("fill", "blue");
    // console.log(all_rects);

    //	const rect_two = svg.select('rect')
    //rect_two.attr("fill", "black");

    //////last commented
    //const rect_one = svg.select("#id_one");
    const rect_two = svg.select("#id_two");
    // const rect_three = svg.select("#id_three");

    rect_two.attr("fill", "orange");

    // modify (move , group move , attribute change)

    /////rect_one.attr("x", 200);

    rect_two.attr("transform", "translate(200,0)");
    rect_two.attr("transform", "translate(0,20)");
    //	rect_three.attr('transform','translate(0,300)')

    svg.attr("transform", "translate(0,400)");

    ////rect_one.attr("transform", "translate(200,0)");
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
