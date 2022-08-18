const submitButton = document.getElementById("submit-btn").addEventListener("click", searchTemp);
        
const API_KEY = "547e56f048096775d182a9c43a2b9b53";
 function searchTemp() {
    const city = document.getElementById("city-name").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
        
}    

            const setInnerText = (id, text) => {
                document.getElementById(id).innerText = text;
            }
   

        const displayTemperature = (data) => {    
               const {name, main, sys, weather} = data;     
            // convert kelvin to celsius   
                const kelvin = main.temp;
                const kelvinToCelsius = (kelvin) => {
                const celsius = (kelvin - 273.15).toFixed(2);
                return celsius;  
              }
                setInnerText("city", name);
                setInnerText("country", sys.country); 
                setInnerText("temperature", kelvinToCelsius(kelvin)); 
                setInnerText("situation", weather[0].main); 

                //  set weather icon
                const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                const imgIcon = document.getElementById("weather-icon");
                imgIcon.setAttribute("src", url); 

                // clear the input after searching
                document.getElementById("city-name").value = "";
        }