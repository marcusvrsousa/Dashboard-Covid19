import { Service } from "../service/requests.js";
import { countrySelectBuilder } from "./countrySelect.js";
import { createLineChart } from "./lineChart.js";

//using IIFE
(async () => {
    const result = await Service.requestCountries();
    const countries = result.data;

    const countriesInOrder = countries.sort((a,b) => {
        //ordenação de String Z-A
        return a.Country < b.Country ? -1 : a.Country > b.Country ? 1 : 0;
        
    })

    //putting countries in select option 
    countriesInOrder.forEach(country => {
        countrySelectBuilder(country)
    });
})();


const result = async (initialDate, finalDate, country, status) => {

    //document.querySelector(".lineGraph").innerHTML = '<canvas id="line-chart"></canvas>';

    let cases = [];
    let date = [];
    const response = await Service.requestAll(initialDate, finalDate, country, status);

    const data = response.data;
    console.log('array de dados:', data)
    data.forEach(element => {
        cases.push(element.Cases);
        date.push(element.Date)
    });

    createLineChart(cases, date);

}


const button = document.querySelector('[data-buttonFilter]')

button.addEventListener('click', filter)

function filter(){
    const initialDate = document.querySelector('[data-initialDate]').value;
    
    const finalDate = document.querySelector('[data-finalDate]').value;
    
    const country = document.getElementById('country').value;
    
    const status = document.getElementById('data').value;

    console.log('Data inicial:', initialDate, 'Data Fim:', finalDate,
    'País:', country, 'Dados:', status);

    result(initialDate, finalDate, country, status);

}





// const selectElement = document.getElementById('country')

// selectElement.addEventListener('change', (event) => {
//     const value = event.target.value;
// });