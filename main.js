//Initialize
var cy = cytoscape({
  container: document.getElementById('cy'), // container to render in


  elements: [ //list of graph elements to start with

  	{ // node a
  	      data: { id: 'a' }
  	    },
  	    { // node b
  	      data: { id: 'b' }
  	    },
  	    { // edge ab
  	      data: { id: 'ab', source: 'a', target: 'b' }
  	   	}

  ],

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': '#666',
        'label': 'data(id)'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle'
      }
    }
  ],
  layout: {
    name: 'breadthfirst',
    animate: true,
    animationDuration: 500,
    spacingFactor: 2.00,
    avoidOverlap: true,
    padding: 10
  },

  wheelSensitivity: .5


});

//TO DO:

//1. Generate positions for each added node, so tidy, no overlap
//2. Make nodes text instead of circles
//3. Use "compound nodes" to group nodes together, make multiple nodes in one node
//4. OPTIONAL: Add linkouts to other parts of project
//5. OPTIONAL: Add support for connecting to already existing node. For now, tree only



node_table = {'a': ['c'], 'b': ['d'], 'd': ['s'], 'c':['v','f']};

function makeNextNode(evt) {
	//Given node clicked, add next node to graph, along with other stuff var node = evt.target;

	var node = evt.target;
	var next_node_id = node_table[node.id()];

	//If node not found in dictionary, just don't do anything
	if (next_node_id == undefined) {
		return;
	}

	cy.add({
	group: "nodes",
	data: {id: next_node_id}
	});
	cy.add({
	group: "edges",
	data: {id: node.id()+next_node_id, source: node.id(), target:next_node_id}
	});

	next_node = cy.$('#'+next_node_id);
	next_node.on('tap', makeNextNode);
	cy.animate({center: {
		eles: next_node}
	});
};



cy.nodes().on('tap', makeNextNode);

