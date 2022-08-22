import search from '../../assets/search.svg'
import styles from './Searchbar.module.scss'
import PropTypes from 'prop-types'

function SearchBar(props) {

    const {searchtext,setSearchText} = props

    return (
        <div className={styles.searchbar}>
            <img src={search} alt="" /><input type="text" placeholder="Search product..." value={searchtext} onChange={(e) => { setSearchText(e.target.value) }} />
        </div>
    )
}

SearchBar.propTypes={
    searchtext:PropTypes.string,
    setSearchText:PropTypes.func
}

SearchBar.defaultProps={
    searchtext:"",
    setSearchText:()=>{}
}

export default SearchBar