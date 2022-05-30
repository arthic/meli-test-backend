const { getItem, getItemDescription, getMeliSearch } = require("../helpers/getMELI")

const searchItem = async (req, res) => {
    const {id: idParam} = req.params
    const {dataItem} = await getItem(idParam)
    const {dataDescription} = await getItemDescription(idParam)

    const {id, title, currency_id, price, shipping, condition, sold_quantity, pictures, permalink
    } = dataItem

    const {plain_text} = dataDescription

    const precioString = price.toString();
    const priceCut = precioString.split('.')

    res.json({
        ok: true,
        author: {
            name: 'Aarón',
            lastname: 'Llanos Soto'
        },
        item: {
            id: id,
            title: title,
            price: {
                currency: currency_id,
                amount: Number(priceCut[0]),
                decimals: Number(priceCut[1]) || null
            },
        },
        picture: pictures[0].secure_url,
        condition,
        free_shipping: shipping.free_shipping,
        sold_quantity,
        description: plain_text,
        buy_link: permalink
    })
}

const searchResults = async (req, res) => {
    const {q} = req.query
    const {dataResults} = await getMeliSearch(q)
    const {available_filters, results: rMeli} = dataResults

    let categories = []
    available_filters[0].values.map(category => (
        categories.push(category.name)
    ))

    let results = []
    rMeli.map(function(item) {
        const {price} = item
        const precioString = price.toString();
        const priceCut = precioString.split('.')

        results.push({
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: Number(priceCut[0]),
                decimals: Number(priceCut[1]) || null
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            state_name: item.address.state_name
        })
    });

    res.json({
        author: {
            name: 'Aarón',
            lastname: 'Llanos Soto'
        },
        categories,
        results
    })
}

module.exports = {
    searchItem,
    searchResults
}