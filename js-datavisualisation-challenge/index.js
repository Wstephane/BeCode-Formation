// Premier Graphique

// Parcour du tableau 1

var t = document.getElementById("table1");
var tbody = t.getElementsByTagName("tr");
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


var a = document.getElementById("table2");
var row = a.getElementsByTagName("tr");
var tableau2 = [];
var obj2 = {};
for(var i = 1; i < row.length; i++) {
  let val = row[i].getElementsByTagName("td");
  for (var j = 0; j < val.length; j++) {
    if(parseInt(val[j].innerHTML)){
      obj2 = {
        "pays" : val[0].innerHTML,
        "annee" : row[1].getElementsByTagName("th")[j].innerHTML,
        "valeur" : parseInt(val[j+1].innerHTML),
      }
      console.log(obj2);
      tableau2.push(obj2);
    }
  }
}

$("#table2").before('<div id="chart2"></div>');

var svg = dimple.newSvg("#chart2", 900, 500);
var myChart = new dimple.chart(svg, tableau);
// myChart.setBounds(60, 150, 300, 305);
myChart.addCategoryAxis("x", "annee");
myChart.addMeasureAxis("y", "valeur");
myChart.addSeries("pays", dimple.plot.line);
myChart.addLegend(0, 10, 700, 200, "right");
myChart.draw();