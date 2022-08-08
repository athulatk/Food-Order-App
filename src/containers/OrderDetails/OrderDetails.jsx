import settings from '../../assets/settings.svg'
import styles from './OrderDetails.module.scss'
import CartItem from '../../components/CartItem/CartItem'
import Button from '../../components/Button/Button'
function OrderDetails() {
  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <h2>Current Order</h2>
        <button><img src={settings} alt="" /></button>
      </div>
      <div className={styles.second_section}>
      <div className={styles.cartitems}>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div>
      <div className={styles.total_price}>
        <div>
          <div><p>Subtotal</p><p>$37.61</p></div>
          <div><p>Discount Sales</p><p>$0</p></div>
          <div><p>Total sales tax</p><p>$0</p></div>
        </div>
        <hr />
        <div>
          <div><p>Total</p><p>$37.61</p></div>
        </div>
      </div>
      <Button text="Continue to Payment"/>
      </div>
      
      </div>
    </div>
  )
}

export default OrderDetails