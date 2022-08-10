import search from '../../assets/search.svg'
import styles from './Searchbar.module.scss'
import { searchText } from '../../recoil/items'
import { useRecoilState } from 'recoil'
function SearchBar() {
    const [searchtext,setSearchText]=useRecoilState(searchText)
    return (
        <div className={styles.searchbar}>
            <img src={search} alt="" /><input type="text" placeholder="Search product..." value={searchtext} onChange={(e)=>{setSearchText(e.target.value)}}/>
        </div>
    )
}

export default SearchBar