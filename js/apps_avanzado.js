oProduct = manzana;

nCount = oProduct.count > 0 ? oProduct.count : 0;

nTotal = (nCount * oProduct.price) + getTotalVat(oProduct);

console.log("\nAVANZADO\n" +
            "Tipo\t\t\t\tCantidad\t\tImporte\t\tTotal (IVA incl.)\n" +
            "----------------------------------------------------------------------\n" +
            oProduct.type + "\t\t\t\t" + nCount + "\t\t\t\t" + oProduct.price + "\t\t" + nTotal + "\n" +
            "----------------------------------------------------------------------\n");