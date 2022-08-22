import { useRecoilState } from 'recoil'
import { categoryType } from '../../recoil/items'
import styles from './Category.module.scss'
import PropTypes from 'prop-types'

function Category(props) {

  const { name, image, setSearchText } = props
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

Category.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  setSearchText: PropTypes.func
}

Category.defaultProps = {
  name: "",
  image: "",
  setSearchText: ()=>{}
}

export default Category