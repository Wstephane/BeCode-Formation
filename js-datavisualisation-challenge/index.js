// Premier Graphique

// Parcour du tableau 1

var t = document.getElementById("table1");
var tbody = t.getElementsByTagName("tr");
var trs = t.getElementsByTagName("tr")[1];
var tableau = [];
var obj = {};
for(var i = 2; i < tbody.length; i++) {
  let element = tbody[i].getElementsByTagName("td");
  for (var j = 1; j < element.length; j++) {
    if(parseInt(element[j].innerHTML)){
      obj = {
        "pays" : element[0].innerHTML,
        "annee" : tbody[1].getElementsByTagName("th")[j+1].innerHTML,
        "valeur" : parseInt(element[j].innerHTML),
      }
      tableau.push(obj);
    }
  }
}

$("#table1").before('<div id="chart1"></div>');

var svg = dimple.newSvg("#chart1", 900, 500);
var myChart = new dimple.chart(svg, tableau);
// myChart.setBounds(60, 150, 300, 305);
myChart.addCategoryAxis("x", "annee");
myChart.addMeasureAxis("y", "valeur");
myChart.addSeries("pays", dimple.plot.line);
myChart.addLegend(0, 10, 700, 200, "right");
myChart.draw();


// Deuxième Graphique

// Parcour du tableau 2