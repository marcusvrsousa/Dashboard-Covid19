
const button = document.querySelector('[data-buttonFilter]')

button.addEventListener('click', filter)

function filter(){
    const initialDate = document.querySelector('[data-initialDate]').value;
    
    const finalDate = document.querySelector('[data-finalDate]').value;
    
    const country = document.getElementById('country').value;
    
    const data = document.getElementById('data').value;

    console.log('Data inicial:', initialDate, 'Data Fim:', finalDate,
    'País:', country, 'Dados:', data);
}





// const selectElement = document.getElementById('country')

// selectElement.addEventListener('change', (event) => {
//     const value = event.target.value;
// });