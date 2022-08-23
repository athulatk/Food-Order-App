import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import Category from '../../components/Category/Category'
import SearchBar from '../../components/SearchBar/SearchBar'
import Cards from '../../components/Cards/Cards'
import styles from './Main.module.scss'
import { categoryList, searchText } from '../../recoil/items'
import { noOfCartItems, showCart, TotalPrice } from '../../recoil/cart'

function Main() {

    const categories = useRecoilValue(categoryList)
    const [show, setShow] = useRecoilState(showCart)
    const [searchtext, setSearchText] = useRecoilState(searchText)
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
                    <SearchBar searchtext={searchtext} setSearchText={setSearchText} />
                    <button className={styles.filter}><img src='/assets/filter.svg' alt="" /></button>
                    <button className={styles.cartimg} onClick={showOrderDetails}><img src='assets/cart.svg' alt="" /><span>{cartLength}</span></button>
                </div>
            </div>

            <div className={styles.categories}>
                {categories.map((item, index) => (<Category key={index} name={item.name} image={item.image} setSearchText={setSearchText} />))}
            </div>
            <Cards />
            {cartLength !== 0 && <div className={styles.totalprice}>
                <button onClick={() => { setShow(true) }}>$ {total} - Continue</button>
            </div>}
            
        </div>
    )
}

export default Main