oProduct = manzana;

nCount = oProduct.count > 0 ? oProduct.count : 0;

switch(oProduct.type)
{
    case "libro": 
        nVat = nCount * oProduct.price * 0.04;
        break;

    case "frescos": 
        nVat = nCount * oProduct.price * 0.1;
        break;

    default:
        nVat = nCount * oProduct.price * 0.21;
        break;
}

nTotal = (nCount * oProduct.price) + nVat;

console.log("Tipo\t\t\t\tCantidad\t\tImporte\t\tTotal (IVA incl.)\n" +
            "----------------------------------------------------------------------\n" +
            oProduct.type + "\t\t\t\t" + nCount + "\t\t\t\t" + oProduct.price + "\t\t" + nTotal + "\n" +
            "----------------------------------------------------------------------\n");