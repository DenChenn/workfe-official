import {React, useState}  from "react"
import "./index.css"
import {motion} from "framer-motion"

const Title = ({isOpen}) => {
    const TitleVariants = {
        "open": {
            transform: "translateY(0%)",
        },
        "closed": {
            transform: "translateY(100%)",
        }
    };

    const MiddleVariants = {
        "open": {
            transform: "translateX(0%)",
        },
        "closed": {
            transform: "translateX(100%)",
        }
    };

    const BlockAnimate = {
        width: ["0%", "100%", "0%"],
        left: ["0%", "0%", "100%"],
    };

    const BlockTransition = {
        duration: 1,
        time: [0, 0.7, 1],
        delay: 1,
    };

    const TopTitleTransition = {
        duration: 0.5,
    };

    const ButtomTitleTransition = {
        duration: 0.5,
        delay: 0.2,
    };

    const MiddleTitleTransition = {
        duration: 0.5,
        delay: 2
    };

    return (
        <div className="title-container">
            <div className="title-outer">
                <div className="hidden">
                    <motion.div 
                        className="top-title"
                        animate={isOpen ? "open" : "closed"}
                        initial={false}
                        transition={TopTitleTransition}
                        variants={TitleVariants}
                        transition={TopTitleTransition}
                    >
                        讓我們幫您
                    </motion.div>
                </div>
                <div className="hidden">
                    <motion.div 
                        className="block"
                        animate={BlockAnimate}
                        transition={BlockTransition}
                    >
                    </motion.div>
                    <motion.div
                        className="middle-title"
                        animate={isOpen ? "open" : "closed"}
                        initial={false}
                        variants={MiddleVariants}
                        transition={MiddleTitleTransition}
                    >
                        用更聰明的方式
                    </motion.div>
                </div>
                <div className="hidden">
                    <motion.div 
                        className="buttom-title"
                        animate={isOpen ? "open" : "closed"}
                        initial={false}
                        variants={TitleVariants}
                        transition={ButtomTitleTransition}
                    >
                        找到合適的咖啡廳
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Title;