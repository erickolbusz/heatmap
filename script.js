var heatmap = h337.create({
  container: document.querySelector('#fullscreen-div'),
  backgroundColor: "black",
  radius: 5
});

var genHeat = function(f,dx=10,dy=10) {
  //generate heatmap for f(x,y) given coords on screen
  var points = [];
  var max = -1*Infinity;
  var min = Infinity;
  var val;
  for (var x=0; x<window.innerWidth; x+=dx) {
    for (var y=0; y<window.innerHeight; y+=dy) {
      val = f.evaluate( {x:x, y:y} );
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

var plotFunction = function() {
  var equation = math.simplify(document.querySelector('#funcBox').value);
  heatmap.setData(genHeat(equation));
}

document.querySelector('#funcButton').onclick = plotFunction;

//init
document.querySelector('#funcBox').value = "x+500*cos(y)";
plotFunction();