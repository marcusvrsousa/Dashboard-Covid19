import { Service } from "../service/requests.js"
import { createCards } from "./kpi.js";
import { createPieChart } from "./pieChart.js";
import { createBarChart } from "./barChart.js";

const responseResult = async () => {
    const data = await Service.request()
    // data.forEach(element => {
    //     console.log(element.Countries)
    // });
    const countries = data.data.Countries;
    
    const highestDeathCountries = countries.sort((a,b) => {
        return b.TotalDeaths - a.TotalDeaths;
    })

    let arrCountry = [];
    let arrTotalDeaths = [];
    
    for(let x=0; x < 10; x++){
        arrCountry.push(highestDeathCountries[x].Country)
        arrTotalDeaths.push(highestDeathCountries[x].TotalDeaths)
    }

    const responseData = data.data.Global;
    const totalConfirmed = responseData.TotalConfirmed;
    const totalDeaths = responseData.TotalDeaths;
    const totalRecovered = responseData.TotalRecovered;

    createCards(totalConfirmed, totalDeaths, totalRecovered);
    createPieChart(totalConfirmed, totalDeaths, totalRecovered);
    createBarChart(arrCountry, arrTotalDeaths)
    
}

responseResult();