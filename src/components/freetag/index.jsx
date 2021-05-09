import React from "react"
import "./index.css"
import {motion} from "framer-motion"

const Freetag = ({isOpen}) => {
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
        <div className="freetag-container">
            <div className="freetag-outer">
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
                        Free tag 自由標籤
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
                        更聰明的咖啡廳篩選
                    </motion.div>
                </div>
                <motion.div
                    className="content-1"
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={contentVariants}
                    transition={contentTransition}
                >
                    明天就要期中考了，想找個適合讀書的咖啡廳？
                </motion.div>
                <motion.div 
                    className="content-2"
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={contentVariants}
                    transition={contentTransition}
                >
                    想衝一波 Instagram 粉絲，卻找不到適合拍照的網美咖啡廳？
                </motion.div>
                <motion.div 
                    className="content-3"
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={contentVariants}
                    transition={contentTransition}
                >
                    通過 Workfe 的 Free tag 標籤，
                </motion.div>
                <motion.div 
                    className="content-4"
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={contentVariants}
                    transition={contentTransition}
                >
                    輕鬆找到 #屬於你的 咖啡廳！
                </motion.div>
            </div>
        </div>
    );
}

export default Freetag;

