const shortestDistanceNode = (distances, visited) => {
	let shortest = null;

	for (let node in distances) {
		let currentIsShortest =
			shortest === null || distances[node] < distances[shortest];
		if (currentIsShortest && !visited.includes(node)) {
			shortest = node;
		}
	}
	return shortest;
};

const findShortestPathWithLogs = (graph, startNode, endNode) => {
	let distances = {};
	distances[endNode] = "Infinity";
	distances = Object.assign(distances, graph[startNode]);

	let parents = { endNode: null };
	for (let child in graph[startNode]) {
		parents[child] = startNode;
	}

	let visited = [];
	let node = shortestDistanceNode(distances, visited);

	while (node) {
		let distance = distances[node];
		let children = graph[node];
		for (let child in children) {
			console.log("\ncamino desde: " + parents[node] + " hasta: " + node + ")");
			if (String(child) === String(startNode)) {
				console.log("no retornar al inicio!");
				continue;
			} else {
				console.log("distancia previa: " + distances[node]);
				let newdistance = distance + children[child];
				console.log(`siguiente distancia: ${distance} + ${children[child]}`);

				if (!distances[child] || distances[child] > newdistance) {
					distances[child] = newdistance;
					parents[child] = node;
					console.log("distancia + padres actualizados");
				} else {
					console.log("no se actualiza!");
				}
			}
		}
		visited.push(node);
		node = shortestDistanceNode(distances, visited);
	}

	let shortestPath = [endNode];
	let parent = parents[endNode];
	while (parent) {
		shortestPath.push(parent);
		parent = parents[parent];
	}
	shortestPath.reverse();

	let results = {
		distance: distances[endNode],
		path: shortestPath,
	};

	// console.log(parents)
	// console.log(distances)
	// console.log(visited)
	return results;
};


//test
const graph = {
	start: { A: 5, B: 2 },
	A: { start: 1, C: 4, D: 2 },
	B: { A: 8, D: 7 },
	C: { D: 6, end: 3 },
	D: { end: 1 },
	end: {},
};

const shortestPath = findShortestPathWithLogs(graph, 'start', 'end');
console.log(shortestPath)
