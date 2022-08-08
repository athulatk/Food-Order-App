import { useEffect, useState } from 'react'
import waffle from '../../assets/waffle.png'
import icecream from '../../assets/ice-cream.png'
import star from '../../assets/star.png'
import croissant from '../../assets/croissant.png'
import coffee from '../../assets/coffee.png'
import Category from '../../components/Category/Category'
import SearchBar from '../../components/SearchBar/SearchBar'
import Cards from '../../components/Cards/Cards'
import filter from '../../assets/filter.svg'
import styles from './Main.module.scss'
function Main() {
    const [currentCategory,setCurrentCategory]=useState(0);
    const [categories, setCategories] = useState([
        {
            name: 'Signature',
            image:star
        },
        {
            name: 'Croissant',
            image:croissant
        },
        {
            name: 'Waffle',
            image:waffle
        },
        {
            name: 'Coffee',
            image:coffee
        },
        {
            name: 'Ice Cream',
            image:icecream
        }
    ])
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div>
                    <h1>Welcome, Gorry</h1>
                    <p>Discover whatever you need easily</p>
                </div>
                <div>
                    <SearchBar/>
                    <button className={styles.filter}><img src={filter} alt="" /></button>
                </div>
            </div>

            <div className={styles.categories}>
                {categories.map((item,index) => (<Category key={index} ind={index} name={item.name} active={item.active} image={item.image} setCurrentCategory={setCurrentCategory}/>))}
            </div>
            <Cards/>
        </div>
    )
}
export default Main