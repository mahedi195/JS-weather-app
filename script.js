
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

        const apiKey = "9441a14ce8fd63a5d68a18d5ed2530f3";


        const searchBtn = document.querySelector('.input_section button');
        const searchCity = document.querySelector('.input_section input');
        const weatherImage = document.querySelector('.weather img');
        const weatherPartt = document.querySelector('.weather_part');
        const invalid_city_name = document.querySelector('.invalid_city_name');






        searchBtn.addEventListener('click', function (event) {
            const city = searchCity.value;
            collectDataFromAPI(city);

        }


        )

        async function collectDataFromAPI(city) {
            const APIresponse = await fetch(apiUrl + 'q=' + city + `&appid=${apiKey}` + '&units=metric');


            if (APIresponse.status == '404') {

                invalid_city_name.style.display = "block";
                weatherPartt.style.display = "none";

            }
            else {

                const dataJson = await APIresponse.json();

                console.log(dataJson);
                console.log(dataJson.weather[0].main);
                console.log(weatherImage.src);

                console.log("mahedi hasan emon");

                document.querySelector('.temp').innerHTML = Math.round(dataJson.main.temp) + '°C';
                document.querySelector('.city').innerHTML = dataJson.name;
                document.querySelector('.humidity').innerHTML = dataJson.main.humidity + '%';
                document.querySelector('.wind').innerHTML = (dataJson.wind.speed * 3.6).toFixed(2) + 'km/h';


                let weather_condition = dataJson.weather[0].main;
                if (weather_condition === "Clouds") {
                    weatherImage.src = "images/clouds.png";
                }
                else if (weather_condition === "Rain") {
                    weatherImage.src = "images/rain.png";
                }
                else if (weather_condition === 'Clear')
                    weatherImage.src = 'images/clear.png';

                else if (weather_condition == 'Drizzle')
                    weatherImage.src = 'images/drizzle.png';

                else if (weather_condition == 'Mist')
                    weatherImage.src = 'images/mist.png';

                else if (weather_condition == 'Snow')
                    weatherImage.src = 'images/snow.png';



                invalid_city_name.style.display = "none";
                weatherPartt.style.display = "block";
            }




        }
