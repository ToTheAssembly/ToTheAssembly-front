import React, { useEffect, useRef, useState } from 'react';
const d3 = require("d3");

const MemberNetworkD3 = ( props ) => {
  const width = 240;
  const height = 240;
  const svgRef = useRef();

  const [nodes, setNodes] = useState([
      { id: 0, color: "#49446B", textColor: "white", size: 28, label: "2022년 8월" },
      { id: 1, color: "#B9C5EB", size: 17, label: "환경", amount: 32 },
      { id: 2, color: "#B9C5EB", size: 16, label: "재활용", amount: 28 },
      { id: 3, color: "#B9C5EB", size: 12, label: "탄소", amount: 27 },
      { id: 4, size: 12, label: "키워드" },
      { id: 5, size: 12, label: "키워드" },
      { id: 6, size: 12, label: "키워드" },
      { id: 7, size: 10, label: "키워드" },
      { id: 8, size: 10, label: "키워드" },
      { id: 9, size: 10, label: "키워드" },
      { id: 10, size: 10, label: "키워드" }
    ]);

  const [links, setLinks] = useState([
    
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
      { source: 10, target: 0 }
  ]);

  let graph = {
    nodes,
    links
  };

  useEffect(() => {
    let newNodes = [...nodes];
    newNodes[0]["label"]=`${props.year}년 ${props.month}월`;

    // console.log(props.labels);
    // console.log(props.amounts);

    for(let i=1; i<11; i++) {
      newNodes[i].label = props.labels[i-1];
      newNodes[i].amount = Math.floor(props.amounts[i-1] * 100);
    }

    // console.log(newNodes);
    setNodes(newNodes);
  }, [props.month, props.year]);


  function clamp(x, lo, hi) {
    return x < lo ? lo : x > hi ? hi : x;
  };


  useEffect(() => {
    const svg = d3.select(svgRef.current)
    .attr("viewBox", [0, 60, width, height])
    
    svg.selectAll("text").remove();

    const link = svg.selectAll(".link")
        .data(graph.links)
        .join("line")
        .classed("link", true)
    const node = svg.selectAll(".node")
        .data(graph.nodes)
        .join("circle")
        .attr("r", 7)
        .classed("node", true)
    const label = svg.selectAll(".label")
        .data(graph.nodes)
        .join("text")
        .classed("text", true)
        .attr("dy", -2)
        .attr("dx", 5)
        .text(d => d.label)
        ;
    const amount = svg.selectAll(".amount")
        .data(graph.nodes)
        .join("text")
        .classed("text", true)
        .attr("dy", -8)
        .attr("dx", 8)
        .text(d => d.amount)
        ;

    svg.node();
  
    const simulation = d3
      .forceSimulation()
      .nodes(graph.nodes)
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("link", d3.forceLink(graph.links).id(d => d.index))
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
        //.style("stroke", "gray")
        .lower();
      node
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", d => d.size || 5)
        //.style("stroke", "white")
        .style("opacity", 1)
        .style("fill", d => d.color || "#CED2EE");
      label
        .attr("x", d => d.x - 5) //position of the lower left point of the text
        .attr("y", d => d.y + 5) //position of the lower left point of the text
        .attr("text-anchor","middle")
        .style("fill", d => d.textColor || "#49446B")
        .style("font-size", "6px")
        .style("font-family", "Pretendard");
      amount 
        .attr("x", d => d.x - 4) //position of the lower left point of the text
        .attr("y", d => d.y + 4) //position of the lower left point of the text
        .attr("text-anchor","middle")
        .style("fill", "white")
        .style("font-size", "4px")
        .style("font-family", "Pretendard");
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
      simulation.alphaTarget(0.3);
      d.fx = null;
      d.fy = null;
    }
  }, [graph.links, graph.nodes, links, nodes]);

    return (
      <div>
        <svg ref={svgRef}>
          <circle className='node' />
        </svg>
      </div>
    )
  }

export default MemberNetworkD3;