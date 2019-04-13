 
 const api_URLBase = 'https://api.mercadolibre.com/items';

 const getProductDetails = (idProduct) =>{
     const productResponse;
     const detailsReponse;

    fetch(`${api_URLBase}/${idProduct}`)
    .then((dataProduct) => productResponse = dataProduct);
    fetch(`${api_URLBase}/${idProduct}/description`)
    .then((dataProductDetail) => detailsReponse = dataProductDetail);

    return transformDataResult(productResponse,detailsReponse);

 }

 function transformDataResult(itemProduct, itemProductDetail){
    const response = {};

    //validar datos de que api se toman
    response.author = {name : 'Camila', lastname : 'Sosa Morales'};
    response.picture = 
    response.condition = itemProduct.condition === 'new' ? 'Nuevo' : 'Usado';
    response.free_shipping = itemProduct.shipping.free_shipping;
    response.sold_quantiy = 
    response.description = itemProductDetail.plain_text;
    response.item = {
        id : itemProduct.id,
        title : itemProduct.title,
        price : {
            currency : itemProductDetail.currency,
            amount : itemProductDetail.amount,
            decimals: itemProductDetail.decimals
        }
    }

    return response;
 }