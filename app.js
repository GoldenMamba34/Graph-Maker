$(".addButton").click((event) => {
  $(event.target).prev().prev().val(parseInt($(event.target).prev().prev().val()) + 1)
  $(event.target).prev().prev().change()
})
$(".minusButton").click((event) => {

  if ( parseInt($(event.target).prev().val()) > 0) {
  $(event.target).prev().val(parseInt($(event.target).prev().val()) - 1)
    $(event.target).prev().change()
}})

// $(".numberInputInput").on('change', function() {

// })

$(".numberInputInput").on("change paste keyup", function() {
  var c = document.getElementById("graph");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
    console.log("Value Changed")
});

class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y
  }
}

function drawGraph(...points) {
  xScaleFactor = $("#XScaleInput")
  yScaleFactor = $("#YScaleInput")
var c = document.getElementById("graph");
  var ctx = c.getContext("2d");
  ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);
  for (var i = 0; i < points.length; i += 1) {
    point = points[i]
    ctx.lineTo(point.x * xScaleFactor, point.y * yScaleFactor);
    ctx.stroke();
  }

}

// context.clearRect(0, 0, canvas.width, canvas.height);
drawGraph(new Point(100,200), new Point(200, 200), new Point(200, 300),  new Point(100, 300), new Point(100,200) )
