import React from 'react'
import ham from "/ham.png"
import cross from "/cross.png"
import { motion } from "framer-motion";

const ToggleButton = ({setOpen, isOpen}) => {
  return (
    <button onClick={()=>setOpen((prev) => !prev)}>
      <motion.img src={isOpen ? cross: ham} width="20px" height="20px" />
    </button>
  )
}

export default ToggleButton
