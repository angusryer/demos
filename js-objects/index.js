
function craftFunction(make, model, cost) {
  this.make = make;
  this.model = model;
  this.cost = cost;
  this.costOfLaunch = () => {
    return this.cost * 3;
  };
}

class CraftClass {
  constructor(make, model, cost) {
    this.make = make;
    this.model = model;
    this.cost = cost;
  }

  calculateLaunchCost() {
    return this.cost * 3;
  }
}

let craftObject = {
  make: "Northrop-Grumman",
  model: "Lunar Lander",
  cost: 322,
  launchCost: function () {
    return this.cost * 3;
  },
};
