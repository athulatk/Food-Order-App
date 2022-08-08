import search from '../../assets/search.svg'
import styles from './Searchbar.module.scss'
function SearchBar() {
    return (
        <div className={styles.searchbar}>
            <img src={search} alt="" /><input type="text" placeholder="Search product..." />
        </div>
    )
}

export default SearchBar