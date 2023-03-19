import { Service } from "../service/requests.js";
import { countrySelectBuilder } from "./countrySelect.js";
import { setData } from "./kpi.js";
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

//function to get the daily number of cases and date
const result = async (aDateBefore, finalDate, country, status, content) => {

    let cases = [];
    let dailyCases = [];
    let date = [];
    let average = 0;
    let arrAverage = [];
    const response = await Service.requestAll(aDateBefore, finalDate, country, status);

    const data = response.data;
    data.forEach(element => {
        //totalCases += element.Cases;
        cases.push(element.Cases);
        date.push(element.Date)
    });

    //Calculando os casos diários subtraindo o total do dia seguinte pelo do dia anterior
    for (let x = 0; x < cases.length; x++) {
        if(x+1 != cases.length){
            dailyCases[x+1] = cases[x+1] - cases[x];
            //convertendo numero negativo em positivo
            //dailyCases[x+1] = Math.abs(dailyCases[x+1])
            if(!isNaN(dailyCases[x])){
                average += dailyCases[x]
            }
        }    
    }  
  
    //removendo primeiro índice do array
    dailyCases.shift()

    average = (average/cases.length)
    for (let x = 0; x < cases.length; x++) {
        arrAverage.push(average.toFixed(2))
    }

    date.shift()
    createLineChart(dailyCases, date, arrAverage, content);
}


const button = document.querySelector('[data-buttonFilter]')

button.addEventListener('click', filter)

//catching values from DOM and send it to function 'result'
function filter(){
    const initialDate = document.querySelector('[data-initialDate]').value;

    let aDateBefore = moment(initialDate, 'YYYY-MM-DD');
    aDateBefore.subtract(1, 'day');
    //console.log(aDateBefore.format('YYYY-MM-DD'));

    const finalDate = document.querySelector('[data-finalDate]').value;
    
    const country = document.getElementById('country').value;
    
    const status = document.getElementById('data').value;

    let content = '';
    if(status == 'deaths'){
        content = 'Número de Mortes'
    }else if(status == 'recovered'){
        content = 'Número de Recuperados'
    }else{
        content = 'Número de Confirmados'
    }

    result(aDateBefore, finalDate, country, status, content);
    setData(country, initialDate, finalDate);

}