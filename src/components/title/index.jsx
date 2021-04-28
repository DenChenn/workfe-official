import {React, useState}  from "react"
import "./index.css"
import {motion} from "framer-motion"

const Title = ({isOpen}) => {
    const TopTitleVariants = {
        "open": {
            opacity: 1,
            transform: "translateY(0%)"
        },
        "closed": {
            opacity: 0,
            transform: "translateY(100%)"
        }
    };

    const Transition = {
        duration: 0.5,
    }

    return (
        <div className="title-container">
            <div className="title-outer">
                <motion.div 
                    className="top-title"
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={TopTitleVariants}
                    transition={Transition}
                >
                    讓我們幫您
                </motion.div>
                <motion.div className="middle-title">用更聰明的方式</motion.div>
                <motion.div className="buttom-title">找到合適的咖啡廳</motion.div>
            </div>
        </div>
    );
};

export default Title;