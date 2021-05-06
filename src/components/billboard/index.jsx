import {React, useEffect, useRef, useState} from "react"
import {motion} from "framer-motion"
import "./index.css"

const Billboard = ({isOpen}) => {
    const mainBoardPathRef = useRef()
    const [mainBoardLength, setMainBoardLength] = useState(0)
    const floorRef = useRef()
    const [floorLength, setFloorLength] = useState(0)
    const circleRef = useRef()
    const [circleLength, setCircleLength] = useState(0)
    const topLineRef = useRef()
    const [topLineLength, setTopLineLength] = useState(0)

    useEffect(() => {
        setMainBoardLength(mainBoardPathRef.current.getTotalLength())
        setFloorLength(floorRef.current.getTotalLength())
        setCircleLength(circleRef.current.getTotalLength())
        setTopLineLength(topLineRef.current.getTotalLength())
    }, [])

    const BorderVariant = {
        open: {
            strokeDashoffset: 0,
        },
        closed:{
            
        }
    }

    const MainBoardBorderTransition = {
        duration: 2.5,
        delay: 0.5
    }

    const MainBoardVariant = {
        open: {
            opacity: 1,
        },
        closed: {
            opacity: 0,
        }
    }

    const MainBoardTransition = {
        duration: 0.5,
        delay: 2.5
    }

    const floorTransition = {
        duration: 1.5,
        delay: 0.5
    }

    const circleTransition = {
        duration: 1.5,
        delay: 0.5
    }

    const topLineTransition = {
        duration: 0.5,
        delay: 1
    }

    const topCircleTransition = {
        duration: 0.5,
        delay: 0.5
    }

    const downCircleTransition = {
        duration: 0.5,
        delay: 1.5
    }

    return (
        <div className="billboard-container">
            <div className="board-back">
                <svg width="100%" height="100%" viewBox="0 0 910 645" fill="none">
                    <motion.path
                        ref={mainBoardPathRef}
                        d="M217.497 173V644H653.497V173H217.497ZM435.497 207C432.53 207 429.63 206.12 427.163 204.472C424.697 202.824 422.774 200.481 421.639 197.74C420.504 194.999 420.206 191.983 420.785 189.074C421.364 186.164 422.793 183.491 424.89 181.393C426.988 179.296 429.661 177.867 432.571 177.288C435.48 176.709 438.496 177.007 441.237 178.142C443.978 179.277 446.321 181.2 447.969 183.666C449.617 186.133 450.497 189.033 450.497 192C450.497 195.978 448.917 199.794 446.104 202.607C443.291 205.42 439.475 207 435.497 207Z" 
                        strokeDashoffset={mainBoardLength}
                        animate={isOpen ? "open" : "closed"}
                        variants={BorderVariant}
                        transition={MainBoardBorderTransition}
                        stroke="#3A1E11"
                        strokeWidth="2"
                        strokeDasharray={mainBoardLength}
                    />
                    <motion.path
                        d="M217.497 173V644H653.497V173H217.497ZM435.497 207C432.53 207 429.63 206.12 427.163 204.472C424.697 202.824 422.774 200.481 421.639 197.74C420.504 194.999 420.206 191.983 420.785 189.074C421.364 186.164 422.793 183.491 424.89 181.393C426.988 179.296 429.661 177.867 432.571 177.288C435.48 176.709 438.496 177.007 441.237 178.142C443.978 179.277 446.321 181.2 447.969 183.666C449.617 186.133 450.497 189.033 450.497 192C450.497 195.978 448.917 199.794 446.104 202.607C443.291 205.42 439.475 207 435.497 207Z" 
                        animate={isOpen ? "open" : "closed"}
                        variants={MainBoardVariant}
                        transition={MainBoardTransition}
                        fill="#3A1E11"
                    />
                    <motion.path 
                        ref={floorRef}
                        d="M909.497 643H0.497002V645H909.497V643Z" 
                        stroke="#3A1E11"
                        strokeWidth="2"
                        animate={isOpen ? "open" : "closed"}
                        variants={BorderVariant}
                        strokeDashoffset={floorLength}
                        strokeDasharray={floorLength}
                        transition={floorTransition}
                    />
                    <motion.path 
                        ref={circleRef}
                        d="M175.997 581.338C175.991 576.906 174.649 572.579 172.146 568.922C169.643 565.265 166.095 562.447 161.966 560.838C166.749 558.979 170.732 555.507 173.225 551.022C175.719 546.537 176.566 541.322 175.62 536.278C174.675 531.235 171.996 526.68 168.047 523.403C164.098 520.126 159.128 518.332 153.997 518.332C148.866 518.332 143.895 520.126 139.947 523.403C135.998 526.68 133.319 531.235 132.374 536.278C131.428 541.322 132.275 546.537 134.769 551.022C137.262 555.507 141.245 558.979 146.028 560.838C141.896 562.443 138.345 565.259 135.841 568.917C133.337 572.575 131.997 576.905 131.997 581.338C131.997 585.771 133.337 590.101 135.841 593.759C138.345 597.417 141.896 600.233 146.028 601.838C141.245 603.697 137.262 607.169 134.769 611.654C132.275 616.139 131.428 621.354 132.374 626.398C133.319 631.442 135.998 635.996 139.947 639.273C143.895 642.55 148.866 644.344 153.997 644.344C159.128 644.344 164.098 642.55 168.047 639.273C171.996 635.996 174.675 631.442 175.62 626.398C176.566 621.354 175.719 616.139 173.225 611.654C170.732 607.169 166.749 603.697 161.966 601.838C166.095 600.229 169.643 597.411 172.146 593.754C174.649 590.097 175.991 585.77 175.997 581.338ZM133.997 540.338C133.994 536.575 135.052 532.888 137.05 529.7C139.049 526.512 141.906 523.952 145.293 522.314C148.681 520.677 152.462 520.028 156.202 520.443C159.942 520.858 163.489 522.319 166.435 524.659C169.382 526.999 171.608 530.123 172.859 533.672C174.11 537.221 174.335 541.05 173.507 544.721C172.679 548.391 170.833 551.754 168.18 554.422C165.527 557.09 162.176 558.956 158.51 559.805C155.534 559.182 152.46 559.182 149.484 559.805C145.085 558.783 141.162 556.303 138.35 552.769C135.539 549.235 134.005 544.854 133.997 540.338ZM173.997 622.338C174 626.101 172.942 629.788 170.944 632.976C168.945 636.165 166.088 638.724 162.7 640.362C159.313 641.999 155.532 642.648 151.792 642.233C148.052 641.818 144.505 640.357 141.559 638.017C138.612 635.677 136.386 632.553 135.135 629.004C133.884 625.456 133.659 621.626 134.487 617.956C135.315 614.285 137.161 610.922 139.814 608.254C142.467 605.586 145.818 603.72 149.484 602.871C152.46 603.494 155.534 603.494 158.51 602.871C162.909 603.893 166.832 606.373 169.644 609.907C172.455 613.441 173.989 617.822 173.997 622.338ZM158.51 600.805C155.534 600.182 152.46 600.182 149.484 600.805C145.082 599.79 141.154 597.312 138.341 593.776C135.528 590.241 133.997 585.856 133.997 581.338C133.997 576.82 135.528 572.436 138.341 568.9C141.154 565.364 145.082 562.886 149.484 561.871C152.46 562.494 155.534 562.494 158.51 561.871C162.912 562.886 166.84 565.364 169.653 568.9C172.466 572.436 173.997 576.82 173.997 581.338C173.997 585.856 172.466 590.241 169.653 593.776C166.84 597.312 162.912 599.79 158.51 600.805Z"
                        stroke="#3A1E11"
                        strokeWidth="2"
                        animate={isOpen ? "open" : "closed"}
                        variants={BorderVariant}
                        strokeDashoffset={circleLength}
                        strokeDasharray={circleLength}
                        transition={circleTransition}
                    />
                    <motion.path 
                        d="M435.497 199C439.363 199 442.497 195.866 442.497 192C442.497 188.134 439.363 185 435.497 185C431.631 185 428.497 188.134 428.497 192C428.497 195.866 431.631 199 435.497 199Z" 
                        animate={isOpen ? "open" : "closed"}
                        variants={MainBoardVariant}
                        transition={downCircleTransition}
                        fill="#3A1E11"
                    />
                    <motion.path 
                        d="M435.497 14C439.363 14 442.497 10.866 442.497 7C442.497 3.13401 439.363 0 435.497 0C431.631 0 428.497 3.13401 428.497 7C428.497 10.866 431.631 14 435.497 14Z" 
                        animate={isOpen ? "open" : "closed"}
                        variants={MainBoardVariant}
                        transition={topCircleTransition}
                        fill="#3A1E11"
                    />
                    <motion.path 
                        ref={topLineRef}
                        d="M436.497 6.99988H434.497V192H436.497V6.99988Z"
                        stroke="#3A1E11"
                        strokeWidth="1"
                        animate={isOpen ? "open" : "closed"}
                        variants={BorderVariant}
                        strokeDashoffset={topLineLength}
                        strokeDasharray={topLineLength}
                        transition={topLineTransition}
                    />
                </svg>
            </div>
            <div className="board">
                <div className="row">
                    <div className="left">
                        <div className="top-title">XX咖啡</div>
                        <div className="empty"></div>
                        <div className="taken-1"></div>
                    </div>
                    <div className="right">剩餘 25% 座位</div>
                </div>
                <div className="row">
                    <div className="left">
                        <div className="top-title">XX咖啡</div>
                        <div className="empty"></div>
                        <div className="taken-2"></div>
                    </div>
                    <div className="right">剩餘 25% 座位</div>
                </div>
                <div className="row">
                    <div className="left">
                        <div className="top-title">XX咖啡</div>
                        <div className="empty"></div>
                        <div className="taken-3"></div>
                    </div>
                    <div className="right">剩餘 25% 座位</div>
                </div>
                <div className="row">
                    <div className="left">
                        <div className="top-title">XX咖啡</div>
                        <div className="empty"></div>
                        <div className="taken-4"></div>
                    </div>
                    <div className="right">剩餘 25% 座位</div>
                </div>
                <div className="row">
                    <div className="left">
                        <div className="top-title">XX咖啡</div>
                        <div className="empty"></div>
                        <div className="taken-5"></div>
                    </div>
                    <div className="right">剩餘 25% 座位</div>
                </div>
            </div>
            <div className="leaf"></div>
            <div className="person"></div>
        </div>
    );
}

export default Billboard;