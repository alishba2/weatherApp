
// npm install xmlhttprequest --save
let weather = {
    "apiKey" : '1e4f2fab590d5a0c1205da5099fd381b',
    fetchWeather : function (city){
        fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+this.apiKey)

        .then(response=>{
            return response.json();
        })
        .then(json=> this.displayWeather(json));

    },

    displayWeather :function(data){
        const{name} = data;
        const{temp,humidity} = data.main;
        const{speed} = data.wind;
        document.querySelector(".city").innerText = "weather in " + name;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText =
        "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =
        "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
     
  },
  search: function () {
    this.fetchWeather(document.querySelector(".Input").value);
  }


    };
    document.querySelector(".srchBar button ").addEventListener("click", function () {
        weather.search();
      });
      document
      .querySelector(".Input")
      .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          weather.search();
        }
    });

weather.fetchWeather("Lahore");
