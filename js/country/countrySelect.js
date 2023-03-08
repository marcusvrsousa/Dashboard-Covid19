export const countrySelectBuilder = (country) => {
    const element = document.querySelector('[data-country]');
        
    const newOption = document.createElement('option')

    const content = `
        <option>${country.Country}</option>
    `
    
    newOption.innerHTML = content;
    //element add the newOption with the content
    element.appendChild(newOption)
}