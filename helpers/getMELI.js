const axios = require("axios");

const getMeliSearch= async (category) => {
    try {
        let search = encodeURI(category)
        console.log(search);
        const searchClean = search.slice(9, search.length);
        console.log(searchClean);
        const instance = axios.create({
            baseURL: `https://api.mercadolibre.com/sites/MLA/search?`,
            params: {
                q: searchClean,
                limit: 4,
            }
        })
        const resp = await instance.get()
        return {
            dataResults: resp.data
        }
    } catch (error) {
        console.log(error);
    }
}

const getItemDescription = async (item) => {
    try {
        const instance = axios.create({
            baseURL: `https://api.mercadolibre.com/items/${item}/description`,
        })
        const resp = await instance.get()

        return {
            dataDescription: resp.data
        }
    } catch (error) {
        console.log(error);
    }
}

const getItem = async (item) => {
    try {
        const instance = axios.create({
            baseURL: `https://api.mercadolibre.com/items/${item}`,
        })
        const resp = await instance.get()

        return {
            dataItem: resp.data
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getItem,
    getItemDescription,
    getMeliSearch
}