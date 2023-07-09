const sumbitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');

const data_hide = document.querySelector('.middle_layer')

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal == '') {
        city_name.innerText = `plz write the name before search`;
        data_hide.classList.add('data_hide');
    }  
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=4ab6c11af8f01da47a1618e2b0340fc3`;
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const arrData = [data];

            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`
            temp.innerText = Math.floor( arrData[0].main.temp - 273) + "°C";
            // temp_status.innerText = arrData[0].weather[0].main;

            const tempStatus = arrData[0].weather[0].main;

            if (tempStatus == "Sunny") {
                temp_status.innerHTML =
                  "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
              } else if (tempStatus == "Clouds") {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
              } else if (tempStatus == "Rain") {
                temp_status.innerHTML =
                  "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
              } else {
                temp_status.innerHTML =
                  "<i class='fas  fa-sun' style='color:#eccc68;'></i>";
              }

              data_hide.classList.remove('data_hide');
        }catch{
            city_name.innerText = `plz enter the city name properly`;
            data_hide.classList.add('data_hide');
        }
    }


}

sumbitBtn.addEventListener('click' , getInfo);
