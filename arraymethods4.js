// e Print the country that uses US dollars as currency.
const Xhr = new XMLHttpRequest();
Xhr.open('GET','https://restcountries.com/v3.1/all');
Xhr.send();
Xhr.onload = function(){
    const response = JSON.parse(Xhr.responseText); 
   console.log(response);


console.log(response.filter((kasu)=>{
    const{currencies={}}=kasu;
    return Object.keys(currencies).includes("USD");
})
);
};
