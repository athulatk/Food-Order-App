import { useRecoilValue } from 'recoil'
import { listedItems } from '../../recoil/items';
import Card from '../Card/Card'
import styles from './Cards.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
function Cards() {
    const foods = useRecoilValue(listedItems)
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} className={styles.cards}>
                {foods.map((item) => {
                    return (<Card key={item.id} id={item.id} name={item.name} image={item.image} description={item.description} price={item.price} pcs={item.pcs} />)
                })}
            </motion.div>
        </AnimatePresence>
    )
}
export default Cards