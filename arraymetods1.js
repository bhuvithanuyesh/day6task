// b Get all the countries with a population of less than 2 lakhs using Filter function
const Xhr = new XMLHttpRequest();
Xhr.open('GET','https://restcountries.com/v3.1/all');
Xhr.send();
Xhr.onload = function(){
    const response = JSON.parse(Xhr.responseText); 
   console.log(response);


const result =  response.filter((pop)=>{
    return pop.population <200000;
});
console.log(result);
}






