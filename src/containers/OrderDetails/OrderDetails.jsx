import React from 'react'
import styles from './OrderDetails.module.scss'
import CartItem from '../../components/CartItem/CartItem'
import Button from '../../components/Button/Button'
import { useRecoilState, useRecoilValue } from 'recoil'
import { cart, noOfCartItems, showCart, TotalPrice } from '../../recoil/cart'

function OrderDetails() {

  const cartItems = useRecoilValue(cart)
  const [show, setShow] = useRecoilState(showCart)
  const cartLength = useRecoilValue(noOfCartItems)
  const total = useRecoilValue(TotalPrice)
  
  return (
    <div className={`${styles.cart} ${show ? styles.show : ''}`}>
      <div className={styles.header}>
        <h2>Current Order ({cartLength})</h2>
        <button className={styles.settings}><img src='/assets/settings.svg' alt="" /></button>
        <button className={styles.close} onClick={() => { setShow(!show) }}><img src='/assets/close.svg' alt="" /></button>
      </div>
      <div className={styles.second_section}>
        {cartItems.length !== 0 ? <div className={styles.cartitems}>
          {cartItems.map((item) => (<CartItem key={item.id} id={item.id} name={item.name} price={item.price} image={item.image} quantity={item.quantity} />))}
        </div> : <h3>Cart is empty</h3>}
        <div className={styles.pricediv}>
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
          <Button label="Continue to Payment" />
        </div>
      </div>
    </div>
  )
}

export default OrderDetails