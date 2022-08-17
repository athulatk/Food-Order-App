import { useRecoilState } from 'recoil'
import { categoryType } from '../../recoil/items'
import styles from './Category.module.scss'
function Category({ name, image, setSearchText }) {
  const [filter, setFilter] = useRecoilState(categoryType)
  const handleClick = () => {
    setFilter(name)
    setSearchText('')
  }
  return (
    <div className={filter === name ? styles.category_selected : styles.category_unselected} onClick={handleClick}>
      <img src={image} alt="" />
      <span>{name}</span>
    </div>
  )
}

export default Category