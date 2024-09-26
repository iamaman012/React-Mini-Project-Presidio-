import axios from "axios"

export const getCountries= async ()=>{
    return await axios.get("https://restcountries.com/v2/all");
}

export const getSpeficCountry=async (name)=>{
    
    return await axios.get(`https://restcountries.com/v2/name/${name}?fullText=true`);
   
}

export const getCountryByCode= async(code)=>{
    return await axios.get(`https://restcountries.com/v2/alpha/${code}`)
}

