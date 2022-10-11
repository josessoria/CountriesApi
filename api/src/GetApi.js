const axios = require("axios")
const {Country} = require("./db.js")

async function getApi() {
    const countries = await axios.get('https://restcountries.com/v3.1/all')
    let resultApi = await countries.data.map((e)=>{
        return({
            id: e.cca3,
            name: e.name.common,
            flags:e.flags.png,
            continente: e.region,
            capital: e.capital ? e.capital[0] : e.name.common,
            subregion: e.subregion ? e.subregion : e.region,
            area: e.area,
            poblacion: e.population
        })
    })
    resultApi.map(e=>{
        Country.findOrCreate({
            where:{
                id:e.id,
                flags: e.flags,
                name: e.name,
                continente: e.continente,
                capital: e.capital,
                subregion: e.subregion,
                area:e.area,
                poblacion: e.poblacion
            }
        })
    })

}


  

module.exports={
    getApi,
}