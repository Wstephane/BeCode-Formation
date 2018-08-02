// Premier Graphique

// Parcour du tableau 1

var t = document.getElementById("table1");
var tbody = t.getElementsByTagName("tr");
var tableau = [];
var obj = {};
for(var i = 2; i < tbody.length; i++) {
  var element = tbody[i].getElementsByTagName("td");
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

// Création de la Div

$("#table1").before('<div id="chart1"></div>');

// Graphique

var svg = dimple.newSvg("#chart1", "100%", 500);
var myChart = new dimple.chart(svg, tableau);
var myLegend = myChart.addLegend(0, 5, 950, 200);
var myAxisX = myChart.addCategoryAxis("x", ["annee", "pays"]);
var myAxisY = myChart.addMeasureAxis("y", "valeur");
myAxisX.title = "Année";
myAxisX.fontSize = "auto";
myChart.setBounds(50, 85, "90%", 350);
myAxisY.title = "Nombre en millier";
myAxisY.fontSize = "auto";
myChart.addSeries("pays", dimple.plot.line);
myLegend.fontSize = "auto";
myChart.draw();

// Deuxième Graphique

// Parcour du tableau 2

var a = document.getElementById("table2");
var row = a.getElementsByTagName("tr");
var tableau2 = [];
var obj2 = {};
for(var i = 1; i < row.length; i++) {
  var val = row[i].getElementsByTagName("td");
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

// Création de la Div

$("#table2").before('<div id="chart2"></div>');

// Graphique

var svg2 = dimple.newSvg("#chart2", "100%", 600);
var myChart2 = new dimple.chart(svg2, tableau2);
var myAxisX = myChart2.addCategoryAxis("x", ["pays", "annee"]);
var myAxisY = myChart2.addMeasureAxis("y", "valeur");
myChart2.setBounds(50, 120, "90%", 350);
myAxisX.title = "Pays";
myAxisX.fontSize = "auto";
myAxisY.title = "Nombre";
myAxisY.fontSize = "auto";
myChart2.addSeries("pays", dimple.plot.bar);
myChart2.addLegend(60, 0, 950, 400,);
myChart2.draw();

// Troisième Graphique

// Création de la div

$("#firstHeading").after('<div id="chart3"></div>');

// Graphique

var svg = dimple.newSvg("#chart3", "100%", 370);
var myChart3 = new dimple.chart(svg, []);
var x = myChart3.addCategoryAxis("x", "number");
myChart3.setBounds(60, 30, "90%", 305)
myChart3.addMeasureAxis("y", "variable");
myChart3.addSeries("plop", dimple.plot.bubble);

// Requête AJAX

var tableau3 = [];

function call () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://inside.becode.org/api/v1/data/random.json");
  xhr.onload = function () {
    var ourData = JSON.parse(xhr.responseText);
    for(var i = 0 ; i < ourData.length; i++) {
        obj3 = {
          number : ourData[i][0],
          variable : ourData[i][1],
        }
        tableau3.push(obj3);
    }
  }
  xhr.send();
  myChart3.data = tableau3;
  myChart3.draw();
  setTimeout(function(){call()}, 1000);
}

call();