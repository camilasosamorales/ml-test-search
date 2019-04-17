
const api_URLBase = 'https://api.mercadolibre.com/items';

const getProductDetails = (idProduct) => {

    var apiItemsProduct = fetch(`${api_URLBase}/${idProduct}`)
        .then((response) => {
            return response.json()
        });
    var apiProductDetail = fetch(`${api_URLBase}/${idProduct}/description`)
        .then((response) => {
            return response.json()
        });

    var combinedData = {
        "productResponse": {}, "detailsReponse": {}
    };
    return Promise.all([apiItemsProduct, apiProductDetail])
        .then((values) => {
            combinedData["productResponse"] = values[0];
            combinedData["detailsReponse"] = values[1];
            // console.log(combinedData);
            return combinedData;
        })
        .then((data) => {
             return transformDataResult(data["productResponse"], data["detailsReponse"]);
        });
  


}

function transformDataResult(itemProduct, itemProductDetail) {
    const response = {};

    var decimals = 0;
    var stringNumber = (itemProduct.price + '').split('.');
    if(stringNumber.length > 1){
        decimals = stringNumber[1].length;
    }
    

    response.author = { name: 'Camila', lastname: 'Sosa Morales' };
    response.picture = itemProduct.pictures[0].secure_url;
    response.condition = itemProduct.condition === 'new' ? 'Nuevo' : 'Usado';
    response.free_shipping = itemProduct.shipping.free_shipping;
    response.sold_quantity = itemProduct.sold_quantity;
    response.description = itemProductDetail.plain_text;
    response.item = {
        id: itemProduct.id,
        title: itemProduct.title,
        price: {
            currency: itemProduct.currency_id,
            amount: itemProduct.price,
            decimals: decimals
        }
    }


    return response;
}

export default getProductDetails;