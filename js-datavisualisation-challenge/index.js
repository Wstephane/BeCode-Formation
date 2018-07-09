var svg = dimple.newSvg("#chartContainer", 590, 400);
    d3.tsv("/data/example_data.tsv", function (data) {
      var myChart = new dimple.chart(svg, data);
      myChart.setBounds(75, 30, 480, 330)
      myChart.addMeasureAxis("x", "Unit Sales");
      var y = myChart.addCategoryAxis("y", "Month");
      y.addOrderRule("Date");
      myChart.addSeries(null, dimple.plot.bar);
      myChart.draw();
    });