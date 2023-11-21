//c Print the following details name, capital, flag, using forEach functionss 
const Xhr = new XMLHttpRequest();
Xhr.open('GET','https://restcountries.com/v3.1/all');
Xhr.send();
Xhr.onload = function(){
    const response = JSON.parse(Xhr.responseText); 
   response.forEach(cityname=>{
    console.log(cityname.name);
    console.log(cityname.capital);
    console.log(cityname.flag);
   });

}






