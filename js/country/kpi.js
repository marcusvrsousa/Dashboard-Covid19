import { Service } from "../service/requests.js";
import { kpiBuilder } from "./builderKPI.js";

export const setData = async (country, initialDate, finalDate) => {

    let confirmedCases = [];
    let deathCases = [];
    let recoveredCases = [];
    
    const response = await Service.requestAllStatus(country, initialDate, finalDate);
    const data = response.data;
    
    data.forEach(element => {
        confirmedCases.push(element.Confirmed);
        deathCases.push(element.Deaths);
        recoveredCases.push(element.Recovered); 
    });

    //working
    const totalConfirmed = confirmedCases[confirmedCases.length-1]
    const totalDeaths = deathCases[deathCases.length-1]
    const totalRecovered = recoveredCases[recoveredCases.length-1]

    kpiBuilder(totalConfirmed, totalDeaths, totalRecovered)

}
