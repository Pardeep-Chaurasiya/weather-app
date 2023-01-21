const form = document.querySelector('form');
const search = document.querySelector('#search');
const weather = document.querySelector('#weather');
const API_KEY = 'e807cd717b65a9d9f2a3734e25ac848d';

form.addEventListener("submit",(event)=>{
    getWeather(search.value);
    event.preventDefault();
})
const getWeather = async (city)=>{
    weather.innerHTML = `<h2> Loading ....</h2>`;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    return showWeather(data);
}
const showWeather = (data) =>{
    console.log(data)
    if(data.cod == '404'){
        weather.innerHTML = `<h2> ${data.message}</h2>`;
        return;
    }
    weather.innerHTML = `
    <div>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div>
        <h2>${data.main.temp} ℃ </h2>
        <h4>${data.weather[0].main}</h4>
    </div>
    `
}