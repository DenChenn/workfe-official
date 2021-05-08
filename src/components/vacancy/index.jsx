import React from "react"
import "./index.css"
import {motion} from "framer-motion"

const Vacancy = ({isOpen}) => {
    const blockAnimate = {
        width: ["0%", "100%", "0%"],
        left: ["0%", "0%", "100%"],
    };

    const blockTransition = {
        duration: 1,
        time: [0, 0.7, 1],
        delay: 1,
    };

    const titleVariants = {
        open: {
            transform: "translateX(0%)",
        },
        closed: {
            transform: "translateX(100%)",
        }
    }

    const titleTransition = {
        duration: 0.5,
        delay: 2
    }

    const subTitleVariants = {
        open: {
            transform: "translateY(0%)"
        },
        closed: {
            transform: "translateY(100%)"
        }
    }

    const subTitleTransition = {
        duration: 0.5,
        delay: 2.5
    }

    const contentVariants = {
        open: {
            opacity: 1
        },
        closed: {
            opacity: 0
        }
    }

    const contentTransition = {
        duration: 1,
        delay: 3
    }

    return (
        <div className="vacancy-container">
            <div className="vacancy-outer">
                <div className="hidden">
                    <motion.div 
                        className="block"
                        animate={blockAnimate}
                        transition={blockTransition}
                    ></motion.div>
                    <motion.div
                        className="title"
                        animate={isOpen ? "open" : "closed"}
                        initial={false}
                        variants={titleVariants}
                        transition={titleTransition}
                    >
                        即時空座率顯示
                    </motion.div>
                </div>
                <div className="hidden-2">
                    <motion.div 
                        className="sub-title"
                        animate={isOpen ? "open" : "closed"}
                        initial={false}
                        variants={subTitleVariants}
                        transition={subTitleTransition}
                    >
                        讓你找咖啡廳不在撲空
                    </motion.div>
                </div>
                <motion.div
                    className="content-1"
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={contentVariants}
                    transition={contentTransition}
                >
                    厭倦了每次進到咖啡廳才發現沒空位的窘境嗎？
                </motion.div>
                <motion.div 
                    className="content-2"
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={contentVariants}
                    transition={contentTransition}
                >
                    Workfe 透過社群機制，
                </motion.div>
                <motion.div 
                    className="content-3"
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={contentVariants}
                    transition={contentTransition}
                >
                    讓用戶們彼此分享咖啡廳的座位情況！
                </motion.div>
            </div>
        </div>
    );
}

export default Vacancy;

