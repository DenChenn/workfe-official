import React from "react"
import {motion} from "framer-motion"
import "./cafe-3.css"

const Cafe3 = ({isOpen}) => {
    const EmptyAnimation = {
        width: ["5%", "70%"],
    }

    const EmptyTransition = {
        duration: 0.5,
        delay: 1.5
    }

    const SeatVariants = {
        open: {
            opacity: 1
        },
        closed: {
            opacity: 0
        }
    }

    const SeatTransition = {
        duration: 1,
        delay: 3
    }

    const MainVariants = {
        open: {
            transform: "translate(0%, 0%)",
            opacity: 1
        },
        closed: {
            transform: "translate(50%, -50%)",
            opacity: 0
        }
    }

    const MainTransition = {
        duration: 1,
        delay: 0.5
    }

    return(
        <motion.div 
            className="cafe-container3"
            animate={isOpen ? "open" : "closed"}
            initial={false}
            transition={MainTransition}
            variants={MainVariants}
        >
            <div className="name">星八克(新大興門市)</div>
            <div className="image-gallery">
                <img src="image/cafe.jpg" alt=""/>
                <img src="image/cafe.jpg" alt=""/>
                <img src="image/cafe.jpg" alt=""/>
            </div>
            <div className="tag">#好讀書 #好舒適</div>
            <motion.div 
                className="empty"
                animate={EmptyAnimation}
                transition={EmptyTransition}
            >
                <motion.div
                    className="seat"
                    animate={isOpen ? "open" : "closed"}
                    initial={false}
                    variants={SeatVariants}
                    transition={SeatTransition}
                >
                    剩餘 25% 座位
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default Cafe3;