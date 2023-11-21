
//d Print the total population of countries using reduce function
const Xhr = new XMLHttpRequest();
Xhr.open('GET','https://restcountries.com/v3.1/all');
Xhr.send();
Xhr.onload = function(){
    const response = JSON.parse(Xhr.responseText); 
 const result=  response.reduce((preval, curval)=>{
    return preval+curval.population;
    
   }, 0);
console.log(result);
}
