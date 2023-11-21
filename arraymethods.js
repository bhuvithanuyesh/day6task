//Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).
//a Get all the countries from Asia continent /region using Filter function

const Xhr = new XMLHttpRequest();
Xhr.open('GET','https://restcountries.com/v3.1/all');
Xhr.send();
Xhr.onload = function(){
    const response = JSON.parse(Xhr.responseText); 
   console.log(response);


const result =  response.filter((cty)=>{
    return cty.region === "Asia";
});
console.log(result);
}