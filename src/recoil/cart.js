import { atom, selector } from "recoil"
const cart = atom({
    key: 'cart',
    default: []
})

const noOfCartItems = selector({
    key: 'noofcartitems',
    get: ({ get }) => {
        const basket = get(cart);
        let no = 0;
        for (let obj of basket) {
            no += obj.quantity
        }
        return no;
    }
})

const TotalPrice = selector({
    key: 'totalprice',
    get: ({ get }) => {
        const cartItems = get(cart)
        let sum = 0
        for (const item of cartItems) {
            sum += item.price * item.quantity
        }
        return sum.toFixed(2)
    }
})

const showCart = atom({
    key: 'showcart',
    default: false
})

export { cart, showCart, noOfCartItems, TotalPrice }