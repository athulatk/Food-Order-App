import { useRecoilState } from 'recoil'
import { items } from '../../fooditems'
import { foodItems } from '../../recoil/items';
import Card from '../Card/Card'
import styles from './Cards.module.scss'
function Cards() {
    const [foods,setFoods]=useRecoilState(foodItems);
    setFoods(items)
    return (
        <div className={styles.cards}>
            {foods.map((item,index) => {
                return (<Card key={index} name={item.name} image={item.image} description={item.description} price={item.price} pcs={item.pcs} />)
            })}
        </div>
    )
}

export default Cards