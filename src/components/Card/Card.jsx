import styles from './Card.module.scss'
import { useRecoilState } from 'recoil'
import { cart } from '../../recoil/cart'
import { AnimatePresence, motion } from 'framer-motion'
function Card({ id, name, description, price, pcs, image }) {
  const [cartItems, setCartItems] = useRecoilState(cart)
  const addToCart = () => {
    let cartItem = cartItems.find(item => item.id === id)
    const index = cartItems.findIndex(item => item.id === id)
    if (cartItem === undefined) {
      setCartItems((cartItems) => [...cartItems, {
        id: id,
        name: name,
        description: description,
        price: price,
        image: image,
        quantity: 1
      }])
    }
    else {
      const newList = [...cartItems.slice(0, index), { ...cartItems[index], quantity: cartItem.quantity + 1 }, ...cartItems.slice(index + 1)]
      setCartItems(newList)

    }
  }
  return (
    <AnimatePresence>
      <motion.div layout initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }} className={styles.card}>
        <div className={styles.card_image_container}>
          <div className={styles.cart} onClick={addToCart}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <img src={image} alt="food" />
        </div>
        <div className={styles.card_content}>
          <h4>{name}</h4>
          <p>{description}</p>
          <p><span>$ {price}</span><span>/ {pcs} pcs</span></p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Card