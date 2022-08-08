import croi1 from '../../assets/croissant1.jpg'
import styles from './CartItem.module.scss'
function CartItem({name,price,quantity}) {
  return (
    <div className={styles.cartitem}>
        <div className={styles.img_container}>
            <img src={croi1} alt="" />
        </div>
        <div className={styles.item_content}>
            <p>Smoke Tenderloin Slice Croissant</p>
            <div className={styles.price_quantity}>
                <div>
                    $10.01
                </div>
                <div>
                    <button>+</button>1<button>-</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CartItem