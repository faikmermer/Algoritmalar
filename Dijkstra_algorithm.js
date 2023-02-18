let graph = {}
graph["musa"] = {}
graph["musa"]["faik"] = 3
graph["musa"]["oguzhan"] = 4

graph["faik"] ={}
graph["faik"]["kamil"] = 5

graph["oguzhan"] = {}
graph["oguzhan"]["buse"] = 1
graph["oguzhan"]["ahmet"] = 0
graph["ahmet"] = {}

graph["kamil"] = {}
graph["kamil"]["ahmet"] = 4
graph["kamil"]["derya"] = 2

graph["derya"] = {}
graph["derya"]["betül"] = 3

graph["betül"] = {}
graph["betül"]["buse"] = 6
graph["buse"] = {}

var costs = {"faik": 3, "oguzhan": 4, "kamil": Infinity, "ahmet": Infinity, "derya": Infinity, "betül": Infinity, "buse": Infinity}

var parent = {"faik": "musa", "oguzhan": "musa", "kamil": null, "buse": null, "ahmet": null, "derya": null, "betül": null}
var processed = []

function lowest_node(costs){
  let lowest_cost = Infinity
  let lowest_cost_node = null
  for(let node in costs){
    let cost = costs[node]
    if(cost < lowest_cost && !processed.includes(node)){
      lowest_cost = cost
      lowest_cost_node = node
    }
  }
  return lowest_cost_node
}
var node = lowest_node(costs)

function dijkstra_algorithm(){
  while(node !== null) {
    let cost = costs[node]
    neighbors = graph[node]
    for(let k of Object.keys(neighbors)){ //Obje sınıfı kıllanırsak of kullanırız döngülerde. Ama normalde döngülerde in kullanmalıyz yoksa hata alırız.
      let new_cost = cost + neighbors[k]
      if(costs[k] > new_cost){
        costs[k] = new_cost
        parent[k] = node
      }
    }
  processed.push(node)
  node = lowest_node(costs)
  }
}
dijkstra_algorithm()
