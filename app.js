$(".addButton").click((event) => {
  $(event.target).prev().prev().val(parseInt($(event.target).prev().prev().val()) + 1)
  $(event.target).prev().prev().change()
})
$(".minusButton").click((event) => {

  if (parseInt($(event.target).prev().val()) > 0) {
    $(event.target).prev().val(parseInt($(event.target).prev().val()) - 1)
    $(event.target).prev().change()
  }
})

$(".numberInputInput").on("change paste keyup", function() {
  var xScaleFactor = $("#XScaleInput").val()
  var yScaleFactor = $("#YScaleInput").val()
  var c = document.getElementById("graph");
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, c.width, c.height);
  drawGraph(new Point(50, 200), new Point(150, 200), new Point(150, 300), new Point(50, 300), new Point(50, 200))

});

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y
  }
}

function drawGraph(...points) {
  var xScaleFactor = $("#XScaleInput").val()
  var yScaleFactor = $("#YScaleInput").val()
  var c = document.getElementById("graph");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(points[0].x * xScaleFactor, points[0].y * yScaleFactor);
  for (var i = 1; i < points.length; i += 1) {
    point = points[i]
    ctx.lineTo(point.x * xScaleFactor, point.y * yScaleFactor);
    ctx.stroke();
    console.log("===============================")
    console.log(point.x * xScaleFactor, point.y * yScaleFactor)
  }

}
drawGraph(new Point(50, 200), new Point(150, 200), new Point(150, 300), new Point(50, 300), new Point(50, 200))

// context.clearRect(0, 0, canvas.width, canvas.height);
