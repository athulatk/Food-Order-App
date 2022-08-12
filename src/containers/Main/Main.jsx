import { useRecoilState, useRecoilValue } from 'recoil'
import Category from '../../components/Category/Category'
import SearchBar from '../../components/SearchBar/SearchBar'
import Cards from '../../components/Cards/Cards'
import filter from '../../assets/filter.svg'
import styles from './Main.module.scss'
import { categoryList } from '../../recoil/items'
import cart from '../../assets/cart.svg'
import { noOfCartItems, showCart, TotalPrice } from '../../recoil/cart'
function Main() {
    const categories = useRecoilValue(categoryList)
    const [show, setShow] = useRecoilState(showCart)
    const cartLength = useRecoilValue(noOfCartItems)
    const total = useRecoilValue(TotalPrice)

    const showOrderDetails = () => {
        setShow(!show);
    }
    return (
        <div className={styles.main}>
            <div className={styles.header}>
                <div>
                    <h1>Welcome, Gorry</h1>
                    <p>Discover whatever you need easily</p>
                </div>
                <div>
                    <SearchBar />
                    <button className={styles.filter}><img src={filter} alt="" /></button>
                    <button className={styles.cartimg} onClick={showOrderDetails}><img src={cart} alt="" /><span>{cartLength}</span></button>
                </div>
            </div>

            <div className={styles.categories}>
                {categories.map((item, index) => (<Category key={index} ind={index} name={item.name} active={item.active} image={item.image} />))}
            </div>
            <Cards />
            {cartLength !== 0 && <div className={styles.totalprice}>
                <button onClick={() => { setShow(true) }}>$ {total} - Continue to payment</button>
            </div>}
        </div>
    )
}
export default Main