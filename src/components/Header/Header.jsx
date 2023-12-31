/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.h1 style={{textAlign: 'center'}} className="pink">
      YOLOv5
      <span className="light-blue"> Project </span>
      <span>
        <a target="_blank" style={{ backgroundColor: "black"}} href="https://github.com/anastazir/yolov5-object-detection-client" rel="noreferrer">
          <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
        </a>
      </span>
    </motion.h1>
  )
}

export default Header