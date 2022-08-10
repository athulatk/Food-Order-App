import { useRecoilState } from 'recoil'
import { categoryType } from '../../recoil/items'
import { searchText } from '../../recoil/items'
import styles from './Category.module.scss'
function Category({ name, image }) {
  const [filter, setFilter] = useRecoilState(categoryType)
  const setSearch = useRecoilState(searchText)
  const handleClick = () => {
    setFilter(name)
    setSearch('')
  }
  return (
    <div className={filter === name ? styles.category_selected : styles.category_unselected} onClick={handleClick}>
      <img src={image} alt="" />
      {name}
    </div>
  )
}

export default Category