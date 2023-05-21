import Notiflix from 'notiflix';
function fetchCountries(country) {

const BASE_URL = "https://restcountries.com/v3.1/name";

        return fetch(`${BASE_URL}/${country}`)
            .then(resp => {
                console.log(resp);
                if (resp.status_code === 404) {
                    throw new Error(resp.statusText);
                } else if (resp.status_code === 404) {
                    Notiflix.Notify.failure('Oops, there is no country with that name');
                    throw new Error();
                }
                return resp.json() 
            })
            
    
}

export { fetchCountries }

