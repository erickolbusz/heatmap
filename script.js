var heatmap = h337.create({
  container: document.querySelector('#fullscreen-div'),
  backgroundColor: "black",
  radius: 5
});

var genHeat = function(dx=10,dy=10) {
  //generate heatmap for f(x,y) given coords on screen
  var points = [];
  var max = -1*Infinity;
  var min = Infinity;
  var val;
  for (var x=0; x<window.innerWidth; x+=dx) {
    for (var y=0; y<window.innerHeight; y+=dy) {
      val = x*y;
      if (val > max) { max = val; }
      if (val < min) { min = val; }
      points.push({
        x: x,
        y: y,
        value: val
      });
    }
  }
  console.log(min, max);
  return {max: max, min: min, data: points};
}

heatmap.setData(genHeat());