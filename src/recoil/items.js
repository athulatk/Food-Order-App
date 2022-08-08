import { atom } from "recoil"
const foodItems = atom({
    key:'FoodItems',
    default:[]
})

export {foodItems}