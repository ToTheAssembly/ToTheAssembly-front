import React, { useEffect, useRef, useState } from 'react';
const d3 = require("d3");

const MemberNetworkD3 = ( {nodes} ) => {
  const width = 200;
  const height = 200;

  const svgRef = useRef();

  const [graph, setGraph] = useState({
    nodes: [
      { id: 0, color: "#49446B", size: 11 },
      { id: 1, size: 11, text: "환경" },
      { id: 2, size: 9 },
      { id: 3, size: 8 },
      { id: 4, size: 9 },
      { id: 5, size: 10 },
      { id: 6, size: 7 },
      { id: 7, size: 7 },
      { id: 8, size: 7 },
      { id: 9, size: 7 }
    ],
    links: [
      { source: 0, target: 0 },
      { source: 1, target: 0 },
      { source: 2, target: 0 },
      { source: 3, target: 0 },
      { source: 4, target: 0 },
      { source: 5, target: 0 },
      { source: 6, target: 0 },
      { source: 7, target: 0 },
      { source: 8, target: 0 },
      { source: 9, target: 0 },
    ]
  });

  function clamp(x, lo, hi) {
    return x < lo ? lo : x > hi ? hi : x;
  };


  useEffect(() => {
    const svg = d3.select(svgRef.current)
    .attr("viewBox", [30, 40, width, height])
    
    const link = svg.selectAll(".link")
        .data(graph.links)
        .join("line")
        .classed("link", true)
        
    const node = svg
        .selectAll(".node")
        .data(graph.nodes)
        .join("circle")
        .attr("r", 7)
        .classed("node", true)
        .classed("fixed", d => d.fx !== undefined)
        .text(d => d.text || "");
  
    svg.node();
  
    const simulation = d3
      .forceSimulation()
      .nodes(graph.nodes)
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("link", d3.forceLink(graph.links))
      .on("tick", tick);
  
    const drag = d3
      .drag()
      .on("start", dragstart)
      .on("drag", dragged)
      .on("end", dragend);
  
    node.call(drag);
  
    function tick() {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y)
        .style("stroke", "gray")
        .lower();
      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", d => d.size || 5)
        .style("fill", d => d.color || "#A39DBC");
    }
  
    function dragstart(event, d) {
      simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    }
    function dragged(event, d) {
      d.fx = clamp(event.x, 0, width);
      d.fy = clamp(event.y, 0, height);
    }
    function dragend(event, d) {
      simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }, [graph.links, graph.nodes]);

    return (
      <div>
        <svg ref={svgRef}>
          <circle className='node' />
        </svg>
      </div>
    )
  }

export default MemberNetworkD3;