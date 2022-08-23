/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import {useRecoilValue} from 'recoil'
import {foodItems} from '../../recoil/items'

function Modal(props) {
    const { setShowModal, modalCardId } = props
    const [displayObject,setDisplayObject] = useState(false)
    const items=useRecoilValue(foodItems)
    useEffect(()=>{
        setDisplayObject(items.find(item=>item.id===modalCardId))
    },[])
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0 }}
                className={styles.modal__backdrop} onClick={() => { setShowModal(false) }}>
                <div className={styles.modal__inner} onClick={(e) => { e.stopPropagation() }}>
                    <div className={styles.modal__imgdiv}>
                        <img src={displayObject.image} />
                        <button className={styles.close} onClick={() => { setShowModal(false) }}><img src='/assets/close.svg' alt="" /></button>
                    </div>
                    <div className={styles.modal__content}>
                        <h2>{displayObject.name}</h2>
                        <p className={styles.modal__item_description}>{displayObject.description}</p>
                        <div className={styles.modal__item_price}>
                            <p><span>$ {displayObject.price}</span> / <span>{displayObject.pcs} pcs</span></p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

Modal.propTypes = {
    showModal: PropTypes.bool,
    setShowModal: PropTypes.func,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    pcs: PropTypes.number,
    image: PropTypes.string,
    modalCardId: PropTypes.string
}

Modal.defaultProps = {
    showModal: false,
    setShowModal: () => { },
    name: "",
    description: "",
    price: 0,
    pcs: 0,
    image: "",
    modalCardId: ""
}



export default Modal