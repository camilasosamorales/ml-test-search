
const api_BaseURL = "https://api.mercadolibre.com/sites/MLA";

const searchProduct = (query) => {

    return fetch(`${api_BaseURL}/search?q=${query}&limit=4`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return transformDataResponse(data);
        });

}

const transformDataResponse = (data) => {
    const response = {};
    response.author = { name: 'Camila', lastname: 'Sosa Morales' };
    response.items = transformItemsResponse(data.results);
    response.categories = transformCategoriesResponse(data.filters);
    
    return response;

}

const transformItemsResponse = (items) => {
    return items.map((item) => {
        return {
            id: item.id,
            title: item.title,
            price: {
                amount: item.price,
                currency: item.currency_id,
                decimals: ''
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            address: item.address.state_name
        };
    });

}

const transformCategoriesResponse = (filters) => {
    let categories = []
    // console.log(filters);
    categories = filters.map((category) => {
        return category.name;

    });

    return categories
}

export default searchProduct;