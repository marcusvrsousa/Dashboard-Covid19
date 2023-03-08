const request = async () => { 
    return await axios.get('https://api.covid19api.com/summary')
}

const requestCountries = async () => {
    return await axios.get('https://api.covid19api.com/countries')
}

const requestAll = async (initialDate, finalDate, country, status) => {
    return await axios.get(`https://api.covid19api.com/country/${country}/status/${status}?from=${initialDate}T00:00:00Z&to=${finalDate}T00:00:00Z`)
}

export const Service = {
    request,
    requestCountries,
    requestAll
};