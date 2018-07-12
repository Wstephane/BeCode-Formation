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

var svg = dimple.newSvg("#chart1", "100%", 500);
var myChart = new dimple.chart(svg, tableau);
myChart.setBounds(50, 85, "90%", 350);
var myAxisX = myChart.addCategoryAxis("x", ["annee", "pays"]);
myAxisX.title = "Année";
myAxisX.fontSize = "auto";
var myAxisY = myChart.addMeasureAxis("y", "valeur");
myAxisY.title = "Nombre en millier";
myAxisY.fontSize = "auto";
myChart.addSeries("pays", dimple.plot.line);
var myLegend = myChart.addLegend(0, 5, 950, 200);
myLegend.fontSize = "auto";
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
        "annee" : row[0].getElementsByTagName("th")[j+1].innerHTML,
        "valeur" : parseInt(val[j].innerHTML),
      }
      tableau2.push(obj2);
    }
  }
}

$("#table2").before('<div id="chart2"></div>');

var svg2 = dimple.newSvg("#chart2", "100%", 600);
var myChart2 = new dimple.chart(svg2, tableau2);
myChart2.setBounds(50, 120, "90%", 350);
var myAxisX = myChart2.addCategoryAxis("x", ["pays", "annee"]);
myAxisX.title = "Pays";
myAxisX.fontSize = "auto";
var myAxisY = myChart2.addMeasureAxis("y", "valeur");
myAxisY.title = "Nombre";
myAxisY.fontSize = "auto";
myChart2.addSeries("pays", dimple.plot.bar);
myChart2.addLegend(60, 0, 950, 400,);
myChart2.draw();



// Graphique et requet AJAX

