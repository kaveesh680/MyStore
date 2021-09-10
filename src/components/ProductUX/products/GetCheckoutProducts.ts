import {ICheckoutFilterProduct, ICheckoutProduct, IProduct} from "../../../types/types";

const GetCheckoutProducts:any = (products: IProduct[], checkoutProducts:ICheckoutProduct[]) => {
    const filterProducts: ICheckoutFilterProduct[] = [];
    products.map((product: IProduct, index: number) => {
        checkoutProducts.map((checkoutProduct: ICheckoutProduct) => {
            if (checkoutProduct.id === product.id) {
                filterProducts.push({product: product, inCart: true, quantity: checkoutProduct.quantity});
                return;
            }
        })
        if (filterProducts.length === index) {
            filterProducts.push({product: product, inCart: false, quantity: 1})
        }
    })
    return filterProducts;
}
export default GetCheckoutProducts
