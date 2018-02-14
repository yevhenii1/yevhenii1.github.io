$(document).ready(function(){

  function dores() {
    var city = $("#city").val('Київ');
  }
  dores();

  function Forter () {
    var city = $("#city").val();

    if(city != ''){

      $.ajax({

        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city +
        "&APPID=9e14505a6c04e9aebeac7cf717b966b8&units=metric&lang=ru",
        type: "GET",
        dataType: "jsonp",
        success: function(data) {


          var widget = iconTemp(data);

          $("#iconTemp").html(widget);

          var widgetTemp = cityName(data);

          $("#cityName").html(widgetTemp);

          var widgetDes = list(data);

          $("#list").html(widgetDes);

          var widgetTime = datTime(data);

          $("#datTime").html(widgetTime);

          var dey = todey(data);
          $("#todey").html(dey);

          //tow dey
          var widgetTwo = iconTempTwo(data);

          $("#iconTempTwo").html(widgetTwo);

          var widgetTempTwo = cityNameTwo(data);

          $("#cityNameTwo").html(widgetTempTwo);

          var widgetDesTwo = listTwo(data);

          $("#listTwo").html(widgetDesTwo);

          var widgetTimeTwo = datTimeTwo(data);

          $("#datTimeTwo").html(widgetTimeTwo);

          var deyTwo = todeyTwo(data);
          $("#todeyTwo").html(deyTwo);

          $("#city").val('');


        }
      });

    }else {
       $("#error").html('Введите город');

    }
    $( "#city" ).change(function() {
      $('#error').html('')
   });


  }

  Forter ();

  $('#submit').click(function() {

    Forter ();
  });

  $('#city').keypress(function(e) {
    if(e.which == 13) {
      Forter ();
  }
  });

});



function iconTemp(data) {
    return  "<h4> <img src='http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png'></h4>" +
    "<p>" + data.list[0].main.temp.toFixed() +  "°C" + "</p>";

}
function cityName(data) {
  return "<h3>" + data.city.name + " | " + data.list[0].weather[0].description + "</h3>";

}
function list(data) {
  return "<h4>Тиск  " + data.list[0].main.pressure.toFixed() + "</h4>" +
"<h4>Вологість  " + data.list[0].main.humidity.toFixed() + "</h4>" +
"<h4>Скорость вітру  " + data.list[0].wind.speed + "</h4>";

}
function datTime(data) {
  return "<h4>" + data.list[0].dt_txt + "</h4>";

}
function todey(data) {
 new Chart(document.getElementById("line-chart"), {
 type: 'line',

 data: {
   labels: [ data.list[0].dt_txt, data.list[1].dt_txt, data.list[2].dt_txt, data.list[3].dt_txt],
   datasets: [{
       data: [data.list[0].main.temp.toFixed(), data.list[1].main.temp.toFixed(), data.list[2].main.temp.toFixed(), data.list[3].main.temp.toFixed()],
       label: "°C",
       borderColor: "#3e95cd",
       paddingBottom: "20px",
       fill: false
     }
   ]
 },
 options: {
   title: {
     display: true,
     text: 'Почасовой прогноз на сегодня'
   }
 }
});
}

// Tow day
function iconTempTwo(data) {
  return  "<h4> <img src='http://openweathermap.org/img/w/" + data.list[4].weather[0].icon + ".png'></h4>" +
  "<p>" + data.list[4].main.temp.toFixed() +  "°C" + "</p>";

}
function cityNameTwo(data) {
return "<h3>" + data.city.name + " | " + data.list[4].weather[0].description + "</h3>";

}
function listTwo(data) {
return "<h4>Тиск  " + data.list[4].main.pressure.toFixed() + "</h4>" +
"<h4>Вологість  " + data.list[4].main.humidity.toFixed() + "</h4>" +
"<h4>Скорость вітру  " + data.list[4].wind.speed + "</h4>";

}
function datTimeTwo(data) {
return "<h4>" + data.list[4].dt_txt + "</h4>";

}
function todeyTwo(data) {
new Chart(document.getElementById("line-chart1"), {
type: 'line',

data: {
 labels: [ data.list[6].dt_txt, data.list[7].dt_txt, data.list[8].dt_txt, data.list[9].dt_txt],
 datasets: [{
     data: [data.list[6].main.temp.toFixed(), data.list[7].main.temp.toFixed(), data.list[8].main.temp.toFixed(), data.list[9].main.temp.toFixed()],
     label: "°C",
     borderColor: "#3e95cd",
     paddingBottom: "20px",
     fill: false
   }
 ]
},
options: {
 title: {
   display: true,
   text: 'Почасовой прогноз на сегодня'
 }
}
});
}

var tab;
var tabContent;
window.onload=function () {
tabContent=document.getElementsByClassName('tabContent');
tab=document.getElementsByClassName('tab');
hideTabsContent(1);
}
function hideTabsContent(a) {
for (var i=a; i<tabContent.length; i++) {
  tabContent[i].classList.remove('show');
  tabContent[i].classList.add('hide');
  tab[i].classList.remove('whiteborder');

}
}
document.getElementById('tabs').onclick=function (event) {
var target = event.target;
if (target.className == 'tab') {
  for (var i=0; i<tab.length; i++) {
    if(target == tab[i]) {
      showTabsContent(i)
      break;
    }
  }
}
}
function showTabsContent(b) {
if (tabContent[b].classList.contains('hide')) {
  hideTabsContent(0);
  tab[b].classList.add('whiteborder');
  tabContent[b].classList.remove('hide');
  tabContent[b].classList.add('show');
}
}
