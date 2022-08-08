import styles from './Category.module.scss'
function Category({name,image,setCurrentCategory,ind}) {
  const handleClick = ()=>{
    setCurrentCategory(ind);
  }
  return (
    <div className={styles.category} onClick={handleClick}><img src={image} alt=""/>{name}</div>
  )
}

export default Category