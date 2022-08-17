var number = function(busStops){
    return busStops.reduce((total, value) => { return total += value[0] - value[1] }, 0);
  }