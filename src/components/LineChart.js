import React, { useEffect, useRef, useState } from "react";
import { select, line, curveCardinal, randomInt, range } from "d3";

function LineChart() {
  const randata = range(10).map((d) => randomInt(0, 100));

  console.log(randata);
  const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75]);
  const svgRef = useRef();
  console.log(data);

  useEffect(() => {
    const svg = select(svgRef.current);
    const myline = line()
      .x((value, index) => index * 50)
      .y((value) => value)
      .curve(curveCardinal);

    svg
      .selectAll("path")
      .data([data])
      .join("path")
      .attr("d", (value) => myline(value))
      .attr("fill", "none")
      .attr("stroke", "blue");
  }, [data]);

  return (
    <>
      <svg ref={svgRef}></svg>
      <br />
      <button onClick={() => setData(data.map((value) => value + 5))}>
        update data
      </button>
      <button onClick={() => setData(data.filter((value) => value <= 35))}>
        Filter data
      </button>
    </>
  );
}

export default LineChart;
