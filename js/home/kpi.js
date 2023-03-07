//build the structure HTML to put the data
export const createCards = (totalConfirmed, totalDeaths, totalRecovered) => {
    const kpiElement = document.querySelector('[data-kpi]');
    //const kpiDiv = document.createElement('div');
    const kpiCards = `
        <div class="total_confirmed">
            <h4 class="total_confirmed-text">Total Confirmado</h2>
            <span class="total_confirmed-number">${totalConfirmed}</span>
        </div>
    
        <div class="total_deaths">
            <h4 class="total_deaths-text">Total Mortes</h2>
            <span class="total_deaths-number">${totalDeaths}</span>
        </div>
    
        <div class="total_recovered">
            <h4 class="total_recovered-text">Total Recuperados</h2>
            <span class="total_recovered-number">${totalRecovered}</span>
        </div>
    `
    kpiElement.innerHTML = kpiCards
    
    //kpiDiv.className = "kpi-graph";
    //kpiDiv.innerHTML = kpiCards;
    //add the builded structure to the parent element
    //kpiElement.appendChild(kpiDiv)
}
