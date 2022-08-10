import { atom, selector } from "recoil"
import { items } from '../data/fooditems'
import { categories } from '../data/categories'

const foodItems = atom({
    key: 'fooditemsall',
    default: items
})

const categoryList = atom({
    key: 'foodcategories',
    default: categories
})

const categoryType = atom({
    key: 'categorytype',
    default: 'Croissant'
})

const searchText = atom({
    key: 'search',
    default: ''
})

const listedItems = selector({
    key: 'filteredfoods',
    get: ({ get }) => {
        const category = get(categoryType);
        const foods = get(foodItems)
        const searchquery = get(searchText);

        return foods.filter(item => {
            const name = item.name.toLowerCase()
            const search = searchquery.toLowerCase()
            return (item.type === category && name.includes(search))
        })

    }

})


export { foodItems, listedItems, categoryType, searchText, categoryList }