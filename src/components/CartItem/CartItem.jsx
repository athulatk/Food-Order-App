import { useRecoilState } from 'recoil'
import { cart } from '../../recoil/cart'
import styles from './CartItem.module.scss'
function CartItem({ id, name, price, quantity, image }) {
  const [cartItems, setCartItems] = useRecoilState(cart);
  const index = cartItems.findIndex(item => item.id === id)
  const increment = () => {
    console.log(index)
    const newList = [...cartItems.slice(0, index), { ...cartItems[index], quantity: quantity + 1 }, ...cartItems.slice(index + 1)]
    setCartItems(newList)
  }
  const decrement = () => {
    if (quantity === 1) {
      const newList = [...cartItems]
      newList.splice(index, 1)
      setCartItems(newList)
    }
    else {
      const newList = [...cartItems.slice(0, index), { ...cartItems[index], quantity: quantity - 1 }, ...cartItems.slice(index + 1)]
      setCartItems(newList)
    }
  }
  return (
    <div className={styles.cartitem}>
      <div className={styles.img_container}>
        <img src={image} alt="" />
      </div>
      <div className={styles.item_content}>
        <p>{name}</p>
        <div className={styles.price_quantity}>
          <div>
            $ {price}
          </div>
          <div>
            <button onClick={increment}>+</button>{quantity}<button onClick={decrement}>-</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItem