
  //---------------------------------------------------------------------------------------


    //const div = `<div style='max-width: 900px; overflow-x: auto; padding: 0px; margin: 0px;'></div>`

    const width = 590;
    const height = 340;
    const margin = {top: 30, right: 80, bottom: 30, left: 30};
    
    const simulation = d3.forceSimulation()
    .force("link", d3.forceLink() // This force provides links between nodes
                    .id(d => d.id) // This sets the node id accessor to the specified function. If not specified, will default to the index of a node.
     ) 
    .force("charge", d3.forceManyBody().strength(-500)) // This adds repulsion (if it's negative) between nodes. 
    .force("center", d3.forceCenter(width / 2, height / 2)); // This force attracts nodes to the center of the svg area

    const Svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height])

    // const Svg = d3.select(div)
    //                 .append("svg")
    //                     .attr("width", width + margin.left + margin.right)
    //                     .attr("height", height + margin.top + margin.bottom)
    //                 .append("g")
    //                     .attr("transform", `translate(${margin.left},${margin.top})`);


    const dataset =  {
        nodes: [
            {id: 1},
            {id: 2},
            {id: 3},
            {id: 4},
            {id: 5},
            {id: 6}
        ], 
        links: [
            {source: 1, target: 5},
            {source: 4, target: 5},
            {source: 4, target: 6},
            {source: 3, target: 2},
            {source: 5, target: 2},
            {source: 1, target: 2},
            {source: 3, target: 4}
        ]
    };

    // Initialize the links
    const link = Svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(dataset.links)
      .enter().append("line");

    // Initialize the nodes
    const node = Svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(dataset.nodes)
      .enter().append("circle")
        .attr("r", 20)
        .call(d3.drag()  //sets the event listener for the specified typenames and returns the drag behavior.
            .on("start", dragstarted) //start - after a new pointer becomes active (on mousedown or touchstart).
            .on("drag", dragged)      //drag - after an active pointer moves (on mousemove or touchmove).
            .on("end", dragended)     //end - after an active pointer becomes inactive (on mouseup, touchend or touchcancel).
         );


    // Text to nodes
    const text = Svg.append("g")
    .attr("class", "text")
    .selectAll("text")
    .data(dataset.nodes)
    .enter().append("text")
    .text(d => d.id)


    simulation
    .nodes(dataset.nodes)//sets the simulation’s nodes to the specified array of objects, initializing their positions and velocities, and then re-initializes any bound forces;
    .on("tick", ticked);//use simulation.on to listen for tick events as the simulation runs.
    // After this, Each node must be an object. The following properties are assigned by the simulation:
    // index - the node’s zero-based index into nodes
    // x - the node’s current x-position
    // y - the node’s current y-position
    // vx - the node’s current x-velocity
    // vy - the node’s current y-velocity
    simulation.force("link")
    .links(dataset.links);//sets the array of links associated with this force, recomputes the distance and strength parameters for each link, and returns this force.
    // After this, Each link is an object with the following properties:
    // source - the link’s source node; 
    // target - the link’s target node; 
    // index - the zero-based index into links, assigned by this method


    // This function is run at each iteration of the force algorithm, updating the nodes position (the nodes data array is directly manipulated).
    function ticked() {
        link.attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);
  
        node.attr("cx", d => d.x)
            .attr("cy", d => d.y);
  
        text.attr("x", d => d.x - 5) //position of the lower left point of the text
            .attr("y", d => d.y + 5); //position of the lower left point of the text
    }

    //When the drag gesture starts, the targeted node is fixed to the pointer
    //The simulation is temporarily “heated” during interaction by setting the target alpha to a non-zero value.
    function dragstarted(d) {
        simulation.alphaTarget(0.3).restart();//sets the current target alpha to the specified number in the range [0,1].
        d.fy = d.y; //fx - the node’s fixed x-position. Original is null.
        d.fx = d.x; //fy - the node’s fixed y-position. Original is null.
      }
  
      //When the drag gesture starts, the targeted node is fixed to the pointer
      function dragged(d) {
        d.fx = d.x;
        d.fy = d.y;
      }
  
      //the targeted node is released when the gesture ends
      function dragended(d) {
        simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
        
        console.log("dataset after dragged is ...",dataset);
      }
      
      
      
      return (
        <svg>
        <circle
            cx={40}
            cy={40}
            r={20}
            key={1}
            stroke="black"
            fill="red"
          />
        </svg>
      )














    const [animatedNodes, setAnimatedNodes] = useState([
        {id: 1, x: 10, y: 10, r: 20},
        {id: 2,x: 10, y: 10, r: 20},
        {id: 3,x: 10, y: 10, r: 20}]);
  
    // re-create animation every time nodes change
    useEffect(() => {
        const simulation = d3.forceSimulation();
    
        // update state on every frame
        simulation.on("tick", () => {
        //setAnimatedNodes([...simulation.nodes()])
        return animatedNodes
        })
    
        // copy nodes into simulation
        //simulation.nodes([...nodes])
        // slow down with a small alpha
        simulation.alpha(0.1).restart()
    
        // stop simulation on unmount
        return () => simulation.stop()
    }, []);
  
    return (
      <Svg>
        {animatedNodes.map((node) => (
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r}
            key={node.id}
            stroke="black"
            fill="red"
          />
        ))}
      </Svg>
    )