const BASE_URL = `https://restcountries.com/v3.1/name/{name}?fullText=true`
const fields = `https://restcountries.com/v2/all?fields=name,capital,capital,population,flags,languages`

export async function fetchCountries(name) {
  try {
        const response = await fetch(`${BASE_URL}${name}?${fields}`)
        return await response.json()
    } catch (error) {
        return console.log(error)
    }
}