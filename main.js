//Initialize
var cy = cytoscape({
  container: document.getElementById('cy'), // container to render in


  elements: [ //list of graph elements to start with

  	{ // node a
  	      data: { id: 'a', text:'Begin' }
  	    }
  ],

  style: [ // the stylesheet for the graph

    {
      selector: 'node',
      style: {
        'content': 'data(text)',
        'text-valign': 'center',
        'text-halign': 'center',
        'width': 100,
        'height': 100,
        'background-opacity': 0, 
        'color': 'red',
        'overlay-opacity':0 
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle',
      }
    }
  ],
  layout: {
    name: 'breadthfirst',
    animate: true,
    animationDuration: 500,
    spacingFactor: 2.00,
    avoidOverlap: true,
    padding: 50
  },

  wheelSensitivity: .5


});

//TO DO:

//4. OPTIONAL: Add linkouts to other parts of project
//5. OPTIONAL: Add support for connecting to already existing node. For now, tree only
//6. OPTIONAL: Manually put in the positions for each node, or put all in at beginning, switch
		// To hide / reveal

//Of possible interest:
	//HTML Labels: https://github.com/kaluginserg/cytoscape-node-html-label
	//Birdseye view navigator: https://github.com/cytoscape/cytoscape.js-navigator
	//Expand collapse: https://github.com/iVis-at-Bilkent/cytoscape.js-expand-collapse
	//Fancy canvas background: https://github.com/classcraft/cytoscape.js-canvas



node_table = {
	'a': {parent: 'c',
		  children:[
			  {
			  	id: 'c1',
			  	text: 'Victoria Park'
			  },
			  {
			  	id: 'c2',
			  	text: 'is dead.'
			  }]}, 
	'b': {parent:'d',
		  children: []}, 
	'd': {parent: 's',
		  children: []}, 
	'c':{parent: 'v',
		 children: []}
	};

function makeNextNode(evt) {
	//Given node clicked, add next node to graph, along with other stuff var node = evt.target;

	var node = evt.target;
	var next_node_json = node_table[node.id()];

	//If node not found in dictionary, just don't do anything
	if (next_node_json == undefined) {
		return;
	}

	var next_node_id = next_node_json['parent'];

	
	//Add parent node

	next_node_position = {x: node.position()['x']+Math.random()*500-100, y: node.position()['y']+300};

	cy.add({
	group: "nodes",
	data: {id: next_node_id},
	position: next_node_position
	});
	cy.add({
	group: "edges",
	data: {id: node.id()+next_node_id, source: node.id(), target:next_node_id}
	});

	//Add child nodes

	for (i=0; i < next_node_json.children.length; i++){
		child_json = next_node_json.children[i];
		console.log(child_json);
		child_x_position = next_node_position.x-500*next_node_json.children.length+i*250;
		cy.add({
			group: 'nodes',
			data: {id: child_json.id, parent: next_node_json['parent'], text:child_json.text},
			position: {x: child_x_position, y: next_node_position.y}
		});

		child = cy.$('#'+child_json.id);
		child.on('tap', makeNextNode);

	};	


	//Center on parent node
	cy.animate({
		center: {eles: cy.$('#'+next_node_id)},
		fit: {eles: cy.$('#'+next_node_id)}
	});
};


//Initialize all nodes for clicking
cy.nodes().on('tap', makeNextNode);

