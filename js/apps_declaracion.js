const camisa = {
    count: 3,
    price: 12.55,
    type: "ropa"
}

const manzana = {
    count: 2,
    price: 1.95,
    type: "frescos"
}

const novela = {
    count: 1,
    price: 12.95,
    type: "libro"
}

let nCount, nVat, nTotal, oProduct;

function getVat(product) {
    let nVat;

    switch(product.type)
    {
        case "libro": 
            nVat = product.price * 0.04;
            break;
    
        case "frescos": 
            nVat = product.price * 0.1;
            break;
    
        default:
            nVat = product.price * 0.21;
            break;
    }

    return nVat;
}

function getTotalVat(product) {
    return product.count > 0 ? product.count * getVat(product) : 0;
}