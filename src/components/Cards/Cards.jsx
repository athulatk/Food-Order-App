/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import { useRecoilValue } from 'recoil'
import { listedItems } from '../../recoil/items';
import Card from '../Card/Card'
import styles from './Cards.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import Modal from '../Modal/Modal'


function Cards() {

    const foods = useRecoilValue(listedItems)
    const [modalCardId,setModalCardId]=useState("")
    const [showModal,setShowModal]=useState(false)
    
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }} className={styles.cards}>
                {foods.map((item,index) => {
                    return (<Card key={item.id} id={item.id} name={item.name} image={item.image} description={item.description} price={item.price} pcs={item.pcs} setModalCardId={setModalCardId} setShowModal={setShowModal}/>)
                })}
            </motion.div>
            {showModal&&<Modal key="modal" setShowModal={setShowModal} modalCardId={modalCardId}/>}
        </AnimatePresence>
    )
}

export default Cards