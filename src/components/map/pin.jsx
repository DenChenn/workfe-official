import React from "react"
import {motion} from "framer-motion"
import "./pin.css"

const Pin = ({isOpen}) => {
    const PinVariant = {
        "open": {
            transform: "translateY(0%)",
            opacity: 1,
        },
        "closed": {
            transform: "translateY(-100%)",
            opacity: 0,
        }
    }

    const PinTransition = {
        duration: 0.5,
    }

    return (
        <div className="pin-container">
            <motion.div 
                className="pin"
                animate={isOpen ? "open" : "closed"}
                initial={false}
                variants={PinVariant}
                transition={PinTransition}
            >
                <img className="pin-svg" src="image/pin.svg" alt=""/>
            </motion.div>
        </div>
    );
}

export default Pin;