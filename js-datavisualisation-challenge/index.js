var t = document.getElementById("table1");
var tbody = t.getElementsByTagName("tr");
var tableau = [];
for(var i = 2; i < tbody.length; i++) {
  for (var j = 2; i < tbody[0].length; j++) {

  }
}



var svg = dimple.newSvg("#table1", 590, 400);
    d3.tsv("assets/Crimes_recorded_by_the_police,_2002-12_YB14-fr.png", function (data) {
      data = dimple.filterData(data, "Owner", ["Aperture", "Black Mesa"])
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(60, 30, 505, 305);
      var x = myChart.addCategoryAxis("x", "Month");
      x.addOrderRule("Date");
      myChart.addMeasureAxis("y", "Unit Sales");
      var s = myChart.addSeries("Channel", dimple.plot.area);
      myChart.addLegend(60, 10, 500, 20, "right");
      myChart.draw();
    });