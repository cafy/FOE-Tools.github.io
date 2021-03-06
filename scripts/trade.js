const PriorityQueue = require("js-priority-queue");
const goods = require("~/lib/foe-data/goods");

/**
 * Compute total cost (coins plus supplies) for a good. From "Modern Era" it
 * add the cost of required good to make this good.
 *
 * @param good Good to compute de cost
 * @returns {number} Return the cost of this good
 */
function getTotalGoodCostFairTrade(good) {
  let result = 0;
  let currentGood;

  do {
    currentGood = result === 0 ? good : goods.agesCost[currentGood.unrefined][0];
    result += currentGood.coins + currentGood.supplies;
  } while (currentGood.unrefined !== null);

  return result;
}

/**
 * Compute the fair trade rates.
 * To access cost just call with of this array, juts to something like: From.To
 * Example: To get the rate of Modern Era with Industrial Age, you can do this: IndustrialAge.ModernEra
 *
 * @return {Object} Return an object of object.
 */
function getFairTradeArray() {
  let fairTradeObj = {};

  for (let key1 in goods.agesCost) {
    fairTradeObj[key1] = {};
    for (let key2 in goods.agesCost) {
      fairTradeObj[key1][key2] =
        getTotalGoodCostFairTrade(goods.agesCost[key1][0]) / getTotalGoodCostFairTrade(goods.agesCost[key2][0]);
    }
  }

  return fairTradeObj;
}

/**
 * Generate an array like getFairTradeArray but with simple ratio: 0.5, 1, 2
 *
 * @return {Object} Return an object of object.
 */
function getSimpleTradeArray() {
  let simpleTradeObj = {};

  for (let key1 in goods.agesCost) {
    simpleTradeObj[key1] = {};
    const currentIndex = Object.keys(goods.agesCost).indexOf(key1);
    for (let key2 in goods.agesCost) {
      let tmpIndex = Object.keys(goods.agesCost).indexOf(key2);
      if (tmpIndex === currentIndex - 1) {
        simpleTradeObj[key1][key2] = 2;
      } else if (tmpIndex === currentIndex + 1) {
        simpleTradeObj[key1][key2] = 0.5;
      } else if (tmpIndex === currentIndex) {
        simpleTradeObj[key1][key2] = 1;
      } else {
        simpleTradeObj[key1][key2] = 0;
      }
    }
  }

  return simpleTradeObj;
}

/**
 * Get neighbors of a node
 *
 * @param tradeInput Graph
 * @param node Node to get neighbors
 * @returns {Array} Return an array of object that contains:
 *  - key: the name of the node
 *  - cost: the cost to go from node to this neighbor
 */
function neighbors(tradeInput, node) {
  const result = [];

  for (let key in tradeInput[node]) {
    if (tradeInput[node][key] >= 0.5 && tradeInput[node][key] <= 2) {
      result.push({ key: key, cost: tradeInput[node][key] });
    }
  }

  return result;
}

/**
 * Reconstruct the path found by @uniformCostSearch
 *
 * @param graph Reference of the cost matrix
 * @param start Start node
 * @param goal Goal node
 * @returns {Array} Return an array that contains the name of each node from goal to start
 */
function reconstructPath(graph, start, goal) {
  const result = [];
  let current = goal;

  do {
    result.push(graph[current].key);
    current = graph[current].parent;
  } while (current !== start);

  if (start !== goal) {
    result.push(start);
  }

  return result;
}

/**
 * Dijkstra algorithm optimized with a priority queue.
 * It will explore graph, an matrix (2D array) of ratio.
 *
 * @param graph Reference of the cost matrix
 * @param start Start node
 * @param goal Goal node
 * @returns {Array} Return an array of object that contains for each object:
 *  - key: the name of the node
 *  - cost: the cost to go from start to this node
 *  - parent: reference of the parent node
 * @see {@link https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm#Practical_optimizations_and_infinite_graphs}
 */
function uniformCostSearch(graph, start, goal) {
  const ageArray = Object.keys(graph);
  const iHaveIndex = ageArray.indexOf(start);
  const iWantIndex = ageArray.indexOf(goal);

  const frontier = new PriorityQueue({
    comparator: (u, v) => {
      if (iHaveIndex < iWantIndex) {
        return u.cost < v.cost ? -1 : u.cost > v.cost ? 1 : 0;
      } else if (iHaveIndex > iWantIndex) {
        return u.cost > v.cost ? -1 : u.cost < v.cost ? 1 : 0;
      } else {
        return u.cost === v.cost ? -1 : u.cost < v.cost ? 1 : 0;
      }
    }
  });
  frontier.queue({ key: start, cost: 0 });

  const explored = {};
  let node;

  if (iHaveIndex === iWantIndex) {
    explored[goal] = { key: goal, cost: 1, parent: goal };
    return reconstructPath(explored, start, goal);
  }

  do {
    if (frontier.length === 0) {
      throw new Error("PriorityQueue need to contains at least one value");
    }
    node = frontier.dequeue();
    if (node.key === goal) {
      return reconstructPath(explored, start, goal);
    }
    for (let neighbor of neighbors(graph, node.key)) {
      if (Object.keys(explored).indexOf(neighbor.key) < 0) {
        frontier.queue({ key: neighbor.key, cost: neighbor.cost + node.cost });
        explored[neighbor.key] = { key: neighbor.key, cost: neighbor.cost + node.cost, parent: node.key };
      }
    }
  } while (frontier.length !== 0);
}

/**
 * Split goods in in a subset
 *
 * @param toValue Amount of goods in target age
 * @param splitValue Max goods by subset
 * @param ratioToFrom Ratio to go from "toValue" to "fromValue"
 * @param ratioFromTo Ratio to go from "fromValue" to "toValue"
 * @returns {*} Return an toValue if toValue amount of goods (from and to) < splitValue,
 * an array otherwise. This array contains to object. The first one contains "from", "to"
 * and "times", the second contains only "from" and "to"
 */
export function splitGoods(toValue, splitValue, ratioFromTo, ratioToFrom) {
  const fromValue = Math.ceil(toValue * ratioToFrom);
  const max = ratioFromTo < 1 ? fromValue : toValue;
  const result = [];

  if (max <= splitValue) {
    result.push({ from: fromValue, to: toValue, count: 1 });
  } else {
    result.push({
      from: fromValue === max ? splitValue : Math.round(splitValue * ratioToFrom),
      to: toValue === max ? splitValue : Math.ceil(splitValue * ratioFromTo),
      count: Math.floor(max / splitValue)
    });
  }

  let resultTo = toValue - result[0].to * result[0].count;

  if (resultTo <= 0) {
    result.push({ from: 0, to: 0 });
  } else {
    result.push({ from: Math.round(resultTo * ratioToFrom), to: resultTo });
  }

  return result;
}

/**
 * Get bests offers to go from a ressource to another
 * @param tradeInput Reference of the matrix cost
 * @param iHave The resource where I start
 * @param iWant The resource where I go
 * @param amount The amount of the resource that I want
 * @returns {*[]}
 * @see {#uniformCostSearch}
 */
export function getBestOffers(tradeInput, iHave, iWant, amount) {
  const bestOffers = uniformCostSearch(tradeInput, iHave, iWant);
  const result = [{ key: bestOffers[0], amount: amount }];

  for (let i = 1; i < bestOffers.length; i++) {
    result.push({
      key: bestOffers[i],
      amount: Math.ceil(result[i - 1].amount * tradeInput[bestOffers[i - 1]][bestOffers[i]])
    });
  }

  return result.reverse();
}

/**
 * Get bests offers to go from a ressource to another and split it to subset of offers
 * @param tradeInput Reference of the matrix cost
 * @param iHave The resource where I start
 * @param iWant The resource where I go
 * @param amount The amount of the resource that I want
 * @param splitValue Max size of an offer
 * @returns {array} Return an array of object
 * @see {#splitGoods}
 */
export function getBestOffersSplitted(tradeInput, iHave, iWant, amount, splitValue) {
  const bestOffers = getBestOffers(tradeInput, iHave, iWant, amount);

  if (bestOffers.length === 1) {
    bestOffers[0].split = splitGoods(1000, splitValue, 1, 1);
    return bestOffers;
  }

  for (let i = bestOffers.length - 2; i >= 0; i--) {
    bestOffers[i].split = splitGoods(
      bestOffers[i + 1].amount,
      splitValue,
      tradeInput[bestOffers[i].key][bestOffers[i + 1].key],
      tradeInput[bestOffers[i + 1].key][bestOffers[i].key]
    );
    if (bestOffers[i].split instanceof Array) {
      let r = 0;
      bestOffers[i].split
        .map(k => {
          return { value: k.from, count: k.count ? k.count : 1 };
        })
        .reduce((oldVal, val) => {
          if (oldVal !== undefined) {
            r += oldVal.value * oldVal.count;
          }

          r += val.value * val.count;
        });
      bestOffers[i].amount = r;
    }
  }

  return bestOffers;
}

export const fairTradeArray = getFairTradeArray();
export const simpleTradeArray = getSimpleTradeArray();
