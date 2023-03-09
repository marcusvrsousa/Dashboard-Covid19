const request = async () => { 
    return await axios.get('https://api.covid19api.com/summary')
}

const requestCountries = async () => {
    return await axios.get('https://api.covid19api.com/countries')
}

const requestAll = async (aDateBefore, finalDate, country, status) => {
    return await axios.get(`https://api.covid19api.com/country/${country}/status/${status}?from=${aDateBefore}T00:00:00Z&to=${finalDate}T00:00:00Z`)
}

const requestCountry = async (country) => {
    return await axios.get(`https://api.covid19api.com/country/${country}`)
}

export const Service = {
    request,
    requestCountries,
    requestAll,
    requestCountry
};