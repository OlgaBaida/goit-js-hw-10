const BASE_URL = `https://restcountries.com/v3.1`

export async function fetchCountries(name) {
  try {
        
        const url = `${BASE_URL}/name/${name}?fields=name,capital,capital,population,flags,languages`;
        const response = await fetch(url);
        
        return await response.json()
    } catch (error) {
        return console.log(error)
    }
}