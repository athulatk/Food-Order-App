import { useEffect, useState } from 'react'
import settings from '../../assets/settings.svg'
import styles from './OrderDetails.module.scss'
import CartItem from '../../components/CartItem/CartItem'
import Button from '../../components/Button/Button'
import { useRecoilValue } from 'recoil'
import { cart } from '../../recoil/cart'
function OrderDetails() {
  const cartItems = useRecoilValue(cart)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    let sum = 0
    for (const item of cartItems) {
      sum += item.price * item.quantity
    }
    setTotal(sum.toFixed(2))
  }, [cartItems])
  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <h2>Current Order</h2>
        <button><img src={settings} alt="" /></button>
      </div>
      <div className={styles.second_section}>
        {cartItems.length !== 0 ? <div className={styles.cartitems}>
          {cartItems.map((item) => (<CartItem key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} quantity={item.quantity} />))}
        </div> : <h3>Cart is empty</h3>}
        <div>
          <div className={styles.total_price}>
            <div>
              <div><p>Subtotal</p><p>$ {total}</p></div>
              <div><p>Discount Sales</p><p>$0</p></div>
              <div><p>Total sales tax</p><p>$0</p></div>
            </div>
            <hr />
            <div className={styles.grand_total}>
              <div><p>Total</p><p>$ {total}</p></div>
            </div>
          </div>
          <Button text="Continue to Payment"/>
        </div>

      </div>
    </div>
  )
}

export default OrderDetails