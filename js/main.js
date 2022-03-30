// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(dibujarGrafica);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function dibujarGrafica() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Topping');
  data.addColumn('number', 'Slices');
  data.addRows([
    ['Hongos', 2.5],
    ['Cebollas', 0.5],
    ['Aceitunas', 0.1],
    ['Queso', 5],
    ['Pepperoni', 3],
    ['Jamón', 1],
    ['Piña', 3]
  ]);

  // Set chart options
  var options = {'title':'¿Cúanta pizza comiste anoche?',
                 'width':400,
                 'height':270};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('grafica'));
  chart.draw(data, options);
}


//Grafica 2
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(graficaDos);

function graficaDos() {
  var data = google.visualization.arrayToDataTable([
    ['Año', 'Ventas', 'Gastos', 'Beneficio'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350]
  ]);

  var options = {
    chart: {
      title: 'Desempeño de la compañía',
      subtitle: 'Ventas, gastos y ganancias: 2014-2017',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}


//Grafica 3

google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(graficaTres);

      function graficaTres() {
        var data = new google.visualization.arrayToDataTable([
          ['Movimientos', 'Porcentaje'],
          ["Peón de rey (e4)", 30],
          ["Peón de la reina (d4)", 21],
          ["Caballero al Rey 3 (Nf3)", 12],
          ["Peón de alfil (c4)", 10],
          ['Otros', 3]
        ]);

        var options = {
          title: 'Movimientos de apertura',
          width: 300,
          legend: { position: 'none' },
          chart: { title: 'Movimientos de apertura',
                   subtitle: 'Popularidad por porcentaje' },
          bars: 'horizontal', // Required for Material Bar Charts.
          axes: {
            x: {
              0: { side: 'top', label: 'Porcentage'} // Top x-axis.
            }
          },
          bar: { groupWidth: "100%" }
        };

        var chart = new google.charts.Bar(document.getElementById('top_x_div'));
        chart.draw(data, options);
      };

//Grafica 4
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(graficaCuatro);

function graficaCuatro() {
  var data = google.visualization.arrayToDataTable([
    ['Año', 'Ventas', 'Gastos'],
    ['2013',  1000,      400],
    ['2014',  1170,      460],
    ['2015',  660,       1120],
    ['2016',  1030,      540]
  ]);

  var options = {
    title: 'Desempeño de la compañía',
    hAxis: {title: 'Año',  titleTextStyle: {color: '#333'}},
    vAxis: {minValue: 0}
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

//Grafica 5
google.charts.load('current', {
    'packages':['geochart'],
  });
  google.charts.setOnLoadCallback(graficaCinco);

  function graficaCinco() {
    var data = google.visualization.arrayToDataTable([
      ['País', 'Popularidad'],
      ['Alemania', 200],
      ['Estados Unidos', 400],
      ['Brazil', 300],
      ['Canada', 600],
      ['Francia', 500],
      ['Mexico', 700]
    ]);

    var options = {};

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }

//Grafica 6
google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(graficaSeis);
function graficaSeis() {
  var data = google.visualization.arrayToDataTable([
    ['Tarea', 'Horas al día'],
    ['Trabajo',     11],
    ['Comida',      2],
    ['Desayuno',  2],
    ['Ver TV', 2],
    ['Dormir',    7]
  ]);

  var options = {
    title: 'Mis actividades diarias',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}