var heatmap = h337.create({
  container: document.querySelector('#fullscreen-div'),
  backgroundColor: "black",
  radius: 5
});

MINX = -5;
MAXX = 5;
MINY = -3;
MAXY = 3;

DX = 5;
DY = 5;

var pixelToCoord = function(px,py) {

}
var genHeat = function(f) {
  //generate heatmap for f(x,y) given coords on screen
  var points = [];
  var max = -1*Infinity;
  var min = Infinity;
  var val, x, y;
  for (var px=0; px<window.innerWidth; px+=DX) {
    for (var py=0; py<window.innerHeight; py+=DY) {
      x = (px/window.innerWidth)*MAXX + (1-(px/window.innerWidth))*MINX;
      y = (py/window.innerHeight)*MAXY + (1-(py/window.innerHeight))*MINY;
      val = f.evaluate( {x:x, y:y} );
      if (val > max) { max = val; }
      if (val < min) { min = val; }
      points.push({
        x: px,
        y: py,
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