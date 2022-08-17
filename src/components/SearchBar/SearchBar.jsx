import search from '../../assets/search.svg'
import styles from './Searchbar.module.scss'
function SearchBar({searchtext,setSearchText}) {
    
    return (
        <div className={styles.searchbar}>
            <img src={search} alt="" /><input type="text" placeholder="Search product..." value={searchtext} onChange={(e) => { setSearchText(e.target.value) }} />
        </div>
    )
}

export default SearchBar