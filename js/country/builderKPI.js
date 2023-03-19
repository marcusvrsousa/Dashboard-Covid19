export const kpiBuilder = (totalConfirmed, totalDeaths, totalRecovered) => {
    
    document.querySelector('[data-kpi_spanConfirmed]').textContent = totalConfirmed;
    document.querySelector('[data-kpi_spanDeaths]').textContent = totalDeaths;
    document.querySelector('[data-kpi_spanRecovered]').textContent = totalRecovered;

}