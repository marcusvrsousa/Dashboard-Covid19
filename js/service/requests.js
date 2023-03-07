const request = async () => { 
    return await axios.get('https://api.covid19api.com/summary')
}

export const Service = {
    request
};