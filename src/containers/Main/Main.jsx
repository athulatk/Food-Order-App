import {useRecoilValue} from 'recoil'
import Category from '../../components/Category/Category'
import SearchBar from '../../components/SearchBar/SearchBar'
import Cards from '../../components/Cards/Cards'
import filter from '../../assets/filter.svg'
import styles from './Main.module.scss'
import { categoryList } from '../../recoil/items'
function Main() {
    const categories=useRecoilValue(categoryList)
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
                {categories.map((item,index) => (<Category key={index} ind={index} name={item.name} active={item.active} image={item.image}/>))}
            </div>
            <Cards/>
        </div>
    )
}
export default Main