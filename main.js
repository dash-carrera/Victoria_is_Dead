//Initialize
var cy = cytoscape({
  container: document.getElementById('cy'), // container to render in


  elements: [ //list of graph elements to start with

  	{ // node a
  	      data: { id: 'begin', text:'Begin', width:'label' }
  	    }
  ],

  style: [ // the stylesheet for the graph

    {
      selector: 'node',
      style: {
        'content': 'data(text)',
        'text-valign': 'center',
        'text-halign': 'center',
        'width': 'label',
        'height': 50,
        'background-opacity': 0, 
        'background-color': 'white',
        'color': 'red',
        'overlay-color': 'green',
        'text-margin-x': 0,
        'active-bg-color': 'green',
    	}
    },

    {
    	selector: 'node.hover',
    	style : {
    		'background-color': 'green'
    	}
	},

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
        'target-arrow-shape': 'triangle',
        'curve-style': 'bezier',
      }
    }
  ],
  layout: {
    name: 'breadthfirst',
    animate: true,
    animationDuration: 500,
    spacingFactor: 2.00,
    avoidOverlap: true,
  },

  wheelSensitivity: .5,


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
	'begin': {parent: 'begin-parent',
		  children:[
			  {
			  	id: 'a',
			  	text: 'Victoria Park'
			  },
			  {
			  	id: 'b',
			  	text: 'is dead.'
			  }]}, 
	'a': {parent: 'a-parent',
			children: [
			{
				id: 'aa',
				text: 'She is'
			},
			{
				id:'ab',
				text: ' a woman from '
			},
			{
				id: 'ac',
				text: 'Junction Falls, Virginia.'
			}]},
	'b': {parent: 'b-parent',
			children: [
			{
				id: 'ba',
				text: 'Is dead meaning currently, she is in the state of being'
			},
			{
				id: 'bb',
				text: ' dead.'
			}]},
	'ba': {parent: 'ba-parent',
			children: [
			{
				id: 'baa',
				text: 'Victoria Park is '
			},
			{
				id: 'bab',
				text: 'dead. Victoria Park was alive, but now she is dead.'
			}]},
	'baa': {parent: 'baa-parent',
			children: [
			{
				id: 'baaa',
				text: 'Yes, Victoria Park is, but '
			},
			{
				id: 'baab',
				text: 'she also was.'
			}]},
	'baab': {parent: 'baab-parent',
			children: [
			{
				id: 'baaba',
				text: 'Of course — this can be said of anyone, really. That they are and were. That they exist simultaneously in the '
			},
			{
				id: 'baabb',
				text: 'past, '
			},
			{

				id: 'baabc',
				text: 'as they do in the '
			},
			{
				id: 'baabd',
				text: 'present'
			}
			]},
	'baabb': {parent: 'baabb-parent',
			children: [
			{
				id: 'baabba',
				text: 'For instance, Victoria Park was once a little girl in a raincoat, who walked the trail at Junction Falls.'
			}]},
	'baabd': {parent: 'baabd-parent',
			children: [
			{
				id: 'baabda',
				text: 'Victoria Park is dead.'
			}]},
	'bb': {parent: 'bb-parent',
			children: [
			{
				id: 'bba',
				text: 'Dead being the result of death, that which happens once '
			},
			{
				id: 'bbb',
				text: 'death has occurred.'
			}]},
	'bbb': {parent: 'bbb-parent',
			children: [
			{
				id: 'bbba',
				text: "I'm not sure when death occurs. Maybe "
			},
			{
				id: 'bbbb',
				text: 'as the spirit leaves the body?'
			}]},
	'bbbb': {parent: 'bbbb-parent',
			children: [{
				id: 'bbbba',
				text: 'As the spirit leaves the body, meaning as Victoria leaves Victoria.'
			}]},
	'ac': {parent: 'ac-parent',
			children: [
			{
				id: 'aca',
				text: 'It is a '
			},
			{
				id: 'acb',
				text: 'fictitious '
			},
			{
				id: 'acc',
				text: 'location, defined tautalogically as the place where Victoria Park died.'
			}]},
	'acb': {parent: 'acb-parent',
			children: [
			{
				id: 'acba',
				text: 'Fictitious meaning false. Meaning the opposite of '
			},
			{
				id: 'acbb',
				text: 'truth'
			}]},
	'acba': {parent: 'acba-parent',
			children: [
			{
				id: 'acbaa',
				text: 'Truth being the end goal of fiction. As in, a higher truth. We have to push beyond our initial understanding that "Victoria Park is dead" in order to achieve a higher truth.'
			}]},
	'aa': {parent: 'aa-parent',
			children: [
			{
				id: 'aaa',
				text: 'She is a woman. Or rather, she is the body of a woman. Her state of being is that of a body.'
			}]},
	'aaa': {parent: 'aaa-parent',
			children:[
			{
				id: 'aaaa',
				text: 'Or rather she has no '
			},
			{
				id: 'aaab',
				text: ' state of being.'
			},
			{
				id: 'aaac',
				text: ' Victoria Park was a woman.'
			}]},
	'aaab': {parent: 'aaab-parent',
			children: [
			{
				id: 'aaaba',
				text: 'A place... or thing... contrasted with '
			},
			{
				id: 'aaabb',
				text: 'that which is not.'
			}]},
	'aaabb': {parent: 'aaabb-parent',
			children: [
			{
				id: 'aaabba',
				text: 'As in, Victoria Park is not cold and blue by the campfire while the rain water rolls over the gape of her open mouth, the wet grass pressed against her cheek. Victoria is not because there is not Victoria. Only '
			},
			{
				id: 'aaabbb',
				text: "Victoria's body."
			}]},
	'aaabbb': {parent: 'aaabbb-parent',
			children: [
			{
				id: 'aaabbba',
				text: "Oh, well I suppose you're right — how could there be a Victoria's body without a "
			},
			{
				id: 'aaabbbb',
				text: 'Victoria?'
			}]},
	'aaabbbb': {parent: 'aaabbbb-parent',
			children: [
			{
				id: 'aaabbbba',
				text: "Yes, it begs the question, who is Victoria, then, if not this dead person? This person which is not?"
			}]},
	'aaabbbba' : {parent: 'aaabbbba-parent',
			children: [
			{
				id: 'aaabbbbaa',
				text: "Perhaps there are two Victoria's — the Victoria who posseses the dead body, and the Victoria who is no longer. The "
			},
			{
				id: 'aaabbbbabb',
				text: "former Victoria stays behind, "
			},
			{
				id: 'aaabbbbbac',
				text: 'but the other Victoria leaves.'
			}]},
	'aaabbbbab': {parent: 'aaabbbbab-parent',
			children: [
			{
				id: 'aaabbbbaba',
				text: "Perhaps there are two Victoria's — the Victoria who posseses the dead body, and the Victoria who is no longer. The "
			},
			{
				id: 'aaabbbbabb',
				text: "former Victoria stays behind, "
			},
			{
				id: 'aaabbbbabc',
				text: 'but the other Victoria leaves.'
			}]},
	'aaabbbbabb': {parent: 'aaabbbbabb-parent',
			children:[
			{
				id: 'aaabbbbabba',
				text: "Good question. What is the relation between the two Victoria's? Perhaps there's some kind of connection we're missing. What is this divided conciouss? "
			},
			{
				id: 'aaabbbbabbb',
				text: 'Victoria of the body, '
			},
			{
				id: 'aaabbbbabbc',
				text: 'and Victoria of the missing spirit.'
			}]},
	'aaabbbbabbb': {parent: 'aaabbbbabbb-parent',
			children:[
			{
				id: 'aaabbbbabbba',
				text: "Victoria of the body is the Victoria that exists before and after there is a Victoria. It is the Victoria which exists as a sum of atom's, as the mass which predates her and was mildly changed in form to form a new girl, someonw with blonde hair, bright blue eyes, crawling around the lip of the tan carpet while her mother stirs the stew."
			}]},
	'aaabbbbabbc': {parent: 'aaabbbbabbc-parent',
			children:[
			{
				id: 'aaabbbbabbca',
				text: "Victoria of the missing spirit is the Victoria which we know. It is the Victoria which has the narrative arc which begins at the hospital on 57th street in Brooklyn and ends in the woods of Junction Falls. It is the in the woods Victoria whose story we can tell, who we can love and cherish and think of kindly. We can not think kindly of atoms. We cannot conceive of atoms. They are " 
			},
			{
				id: "aaabbbbabbcb",
				text: "infintesimal."
			}]},
	'aaabbbbabbcb': {parent: 'aaabbbbabbcb-parent',
			children: [
			{
				id: 'aaabbbbabbcba',
				text: '.'
			},
			{
				id: 'aaabbbbabbcbb',
				text: '.'
			},
			{
				id: 'aaabbbbabbcbc',
				text: '.'
			},
			{
				id: 'aaabbbbabbcbd',
				text: '.'
			},
			{
				id: 'aaabbbbabbcbe',
				text: '.'
			}]}
};

function makeNextNode(evt) {
	//Given node clicked, add next node to graph, along with other stuff var node = evt.target;

	var node = evt.target;
	var next_node_json = node_table[node.id()];

	//If node not found in dictionary, just don't do anything
	if (next_node_json == undefined) {
		return;
	}

	console.log(next_node_json);

	var next_node_id = next_node_json['parent'];

	
	//Add parent node

	next_node_position = {x: node.position()['x']+(Math.random()-.5)*1000, y: node.position()['y']+300};

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
	var last_node_x_edge = next_node_position.x-500*next_node_json.children.length;

	for (i=0; i < next_node_json.children.length; i++){
		child_json = next_node_json.children[i];
		console.log(child_json);
		console.log("Parent id: " + next_node_json['parent']);
		cy.add({
			group: 'nodes',
			data: {id: child_json.id, parent: next_node_json['parent'], text:child_json.text},
			width: 'label'
		});

		child = cy.$('#'+child_json.id);
		var width = child.boundingBox()['w']; //Get width, label included
		child.position({x: last_node_x_edge+width/2, y: next_node_position.y});
		child.on('tap', makeNextNode);
		//Update edge for next node
		last_node_x_edge += width + 2;
	};	


	//Center on parent node
	cy.animate({
		center: {eles: cy.$('#'+next_node_id)},
		fit: {eles: cy.$('#'+next_node_id), padding: 100},
	});
};


//Initialize all nodes for clicking
cy.nodes().on('tap', makeNextNode);


