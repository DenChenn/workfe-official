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

    const boardVariants = {
        "open": {
            transform: "translateX(0%)",
            opacity: 1,
        },
        "closed": {
            transform: "translateX(-20%)",
            opacity: 0,
        }
    }

    const boardTransition1 = {
        duration: 0.5,
        delay: 2.5
    }

    const boardTransition2 = {
        duration: 0.5,
        delay: 2.7
    }

    const boardTransition3 = {
        duration: 0.5,
        delay: 2.9
    }

    const boardTransition4 = {
        duration: 0.5,
        delay: 3.1
    }

    const boardTransition5 = {
        duration: 0.5,
        delay: 3.3
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

    const EmptyAnimation1 = {
        width: ["0%", "70%"],
    }
    const EmptyAnimation2 = {
        width: ["0%", "40%"],
    }
    const EmptyAnimation3 = {
        width: ["0%", "30%"],
    }
    const EmptyAnimation4 = {
        width: ["0%", "50%"],
    }
    const EmptyAnimation5 = {
        width: ["0%", "10%"],
    }

    const EmptyTransition = {
        duration: 1,
        delay: 3.5
    }

    const leafVariants1 = {
        open: {
            d: "M15.0571 59.1711C28.1549 82.1814 55.0477 91.571 55.0477 91.571C55.0477 91.571 60.7047 63.6535 47.607 40.6432C34.5092 17.6329 7.61636 8.24333 7.61636 8.24333C7.61636 8.24333 1.95928 36.1608 15.0571 59.1711Z"
        },
        closed: {
            d: "M37.2549 51.7974C44.1689 77.3556 67.8509 93.1844 67.8509 93.1844C67.8509 93.1844 80.3231 67.5752 73.4091 42.017C66.4951 16.4587 42.8131 0.629883 42.8131 0.629883C42.8131 0.629883 30.341 26.2391 37.2549 51.7974Z"
        }
    }
    const leafTransition = {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
    }
    const leafTransition2 = {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 2,
        delay: 1
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
                <motion.li 
                    className="row"
                    animate={isOpen ? "open" : "closed"}
                    variants={boardVariants}
                    transition={boardTransition1}
                    initial={false}
                >
                    <div className="left">
                        <div className="top-title">XX咖啡</div>
                        <div className="empty"></div>
                        <motion.div 
                            className="taken-1"
                            animate={EmptyAnimation1}
                            transition={EmptyTransition}
                        ></motion.div>
                    </div>
                    <div className="right">剩餘 25% 座位</div>
                </motion.li>
                <motion.li
                    animate={isOpen ? "open" : "closed"}
                    variants={boardVariants}
                    transition={boardTransition2}
                    initial={false}
                    className="row"
                 >
                    <div className="left">
                        <div className="top-title">XX咖啡</div>
                        <div className="empty"></div>
                        <motion.div 
                            className="taken-2"
                            animate={EmptyAnimation2}
                            transition={EmptyTransition}
                        ></motion.div>
                    </div>
                    <div className="right">剩餘 25% 座位</div>
                </motion.li>
                <motion.li
                    animate={isOpen ? "open" : "closed"}
                    variants={boardVariants}
                    transition={boardTransition3}
                    initial={false}
                    className="row"
                >
                    <div className="left">
                        <div className="top-title">XX咖啡</div>
                        <div className="empty"></div>
                        <motion.div 
                            className="taken-3"
                            animate={EmptyAnimation3}
                            transition={EmptyTransition}
                        ></motion.div>
                    </div>
                    <div className="right">剩餘 25% 座位</div>
                </motion.li>
                <motion.li 
                    animate={isOpen ? "open" : "closed"}
                    variants={boardVariants}
                    transition={boardTransition4}
                    initial={false}
                    className="row"
                >
                    <div className="left">
                        <div className="top-title">XX咖啡</div>
                        <div className="empty"></div>
                        <motion.div 
                            className="taken-4"
                            animate={EmptyAnimation4}
                            transition={EmptyTransition}
                        ></motion.div>
                    </div>
                    <div className="right">剩餘 25% 座位</div>
                </motion.li>
                <motion.li 
                    animate={isOpen ? "open" : "closed"}
                    variants={boardVariants}
                    transition={boardTransition5}
                    initial={false}
                    className="row"
                >
                    <div className="left">
                        <div className="top-title">XX咖啡</div>
                        <div className="empty"></div>
                        <motion.div 
                            className="taken-5"
                            animate={EmptyAnimation1}
                            transition={EmptyTransition}
                        ></motion.div>
                    </div>
                    <div className="right">剩餘 25% 座位</div>
                </motion.li>
            </div>
            <div className="leaf">
                <svg width="100%" height="100%" viewBox="0 0 76 94" fill="none">
                    <motion.path 
                        animate={isOpen ? "open" : "closed"}
                        variants={leafVariants1}
                        transition={leafTransition}
                        fill="#3A1E11"
                    ></motion.path>
                    <motion.path 
                        animate={isOpen ? "open" : "closed"}
                        variants={leafVariants1}
                        transition={leafTransition2}
                        fill="#90796E"
                    />                     
                </svg>
            </div>
            <div className="person">
                <svg width="100%" height="100%" viewBox="0 0 163 496" fill="none">
                    <path d="M126.614 235.479V260.254C126.614 260.254 132.578 300.169 132.578 335.037C132.578 369.906 122.943 451.112 122.943 451.112C122.943 451.112 103.674 457.994 102.297 447.442C100.921 436.89 97.2508 380.917 97.2508 372.658C97.2508 364.4 81.193 301.545 81.193 301.545L71.0995 371.282C71.0995 371.282 74.3111 453.865 71.0995 456.159C67.8879 458.453 52.2889 462.582 50.4538 458.453C48.6186 454.324 38.9839 365.777 38.9839 365.777C38.9839 365.777 31.1844 250.16 35.7724 243.279C40.3603 236.397 44.4895 230.891 44.4895 230.891C44.4895 230.891 110.097 214.833 126.614 235.479Z" fill="#2F2E41"/>
                    <path d="M120.649 448.359L121.8 455.838C122.185 458.389 122.436 460.959 122.552 463.537C122.731 467.294 123.356 473.082 125.497 474C128.709 475.376 149.553 492.956 134.872 493.873C120.19 494.791 112.846 496.376 108.497 493C103.356 489.008 109.179 490.816 106.885 490.816C104.591 490.816 101.839 490.816 100.921 487.145C100.003 483.475 102.297 477.052 102.297 477.052V448.359H120.649Z" fill="#2F2E41"/>
                    <path d="M52.1452 448L50.9946 455.479C50.6093 458.03 50.3583 460.6 50.2426 463.178C50.0637 466.935 49.4385 472.723 47.2974 473.641C44.0859 475.017 23.2411 492.597 37.9225 493.514C52.6039 494.432 59.9487 496.017 64.2974 492.641C69.4386 488.649 63.615 490.456 65.909 490.456C68.203 490.456 70.9557 490.456 71.8733 486.786C72.7909 483.116 70.4969 476.693 70.4969 476.693V448H52.1452Z" fill="#2F2E41"/>
                    <path d="M65.1352 36.3624C65.1352 36.3624 72.9346 55.6318 78.4401 58.8433C83.9456 62.0549 81.193 76.7363 81.193 76.7363L67.4291 96.0057H56.4181L43.1131 73.066C43.1131 73.066 42.1955 57.9258 39.4427 54.2554C36.6899 50.5851 65.1352 36.3624 65.1352 36.3624Z" fill="#FFB9B9"/>
                    <path opacity="0.1" d="M65.1352 36.3624C65.1352 36.3624 72.9346 55.6318 78.4401 58.8433C83.9456 62.0549 81.193 76.7363 81.193 76.7363L67.4291 96.0057H56.4181L43.1131 73.066C43.1131 73.066 42.1955 57.9258 39.4427 54.2554C36.6899 50.5851 65.1352 36.3624 65.1352 36.3624Z" fill="black"/>
                    <path d="M76.605 75.8187L97.2507 80.4067L112.391 232.726C112.391 232.726 104.133 234.103 95.8743 245.114C87.616 256.125 77.5226 254.29 72.4758 251.537C67.4291 248.784 47.2422 240.985 46.7834 237.773C46.3246 234.561 47.701 178.13 47.701 178.13L34.8547 90.0414L41.2778 80.4067H52.7477L61.9236 88.2062L76.605 75.8187Z" fill="#90796E"/>
                    <path d="M45.407 60.2197C58.5831 60.2197 69.2643 49.5384 69.2643 36.3624C69.2643 23.1864 58.5831 12.5051 45.407 12.5051C32.231 12.5051 21.5497 23.1864 21.5497 36.3624C21.5497 49.5384 32.231 60.2197 45.407 60.2197Z" fill="#FFB9B9"/>
                    <path d="M79.8165 68.0192C79.8165 68.0192 124.778 72.6071 128.908 82.2418C133.037 91.8764 126.155 134.544 126.155 134.544C126.155 134.544 142.671 171.707 142.213 180.424C141.754 189.141 157.812 248.784 140.377 241.902C122.943 235.02 128.449 217.127 119.732 229.973C111.015 242.82 107.344 240.984 107.344 240.984C107.344 240.984 98.6272 255.207 95.8744 253.831C93.1216 252.454 91.2865 241.902 97.2508 236.855C103.215 231.809 102.297 223.091 90.8276 206.575C79.3578 190.058 67.4291 103.346 74.311 90.0413C81.193 76.7362 79.8165 68.0192 79.8165 68.0192Z" fill="#6D473C"/>
                    <path d="M126.614 244.196L118.814 251.537L109.179 245.114L113.309 235.479L126.614 244.196Z" fill="#FFB9B9"/>
                    <path d="M46.7834 75.8187C46.7834 75.8187 11.915 88.665 11.915 102.429C11.915 116.193 33.0195 176.295 33.0195 176.295C33.0195 176.295 33.0196 191.894 32.102 195.564C31.1844 199.234 16.7491 231.247 29.3492 234.103C37.2142 235.885 43.6763 240.569 44.26 247.178C44.9532 255.027 38.9446 264.934 39.4427 266.677C40.3603 269.889 45.8658 274.477 45.407 272.183C44.9482 269.889 49.0774 236.855 55.5005 222.174C61.9236 207.493 52.7477 108.852 50.9125 96.0057C50.0269 89.1856 48.6468 82.4388 46.7834 75.8187Z" fill="#6D473C"/>
                    <path d="M28.432 243.278L36.69 263.007L42.884 250.39L35.772 234.561L28.432 243.278Z" fill="#FFB9B9"/>
                    <path d="M72.2842 51.1429C72.2842 51.1429 79.8165 54.2553 84.4045 54.2553C88.9924 54.2553 107.803 63.89 101.38 69.8543C94.9568 75.8187 85.3221 77.195 80.7341 85.9121C76.1462 94.6292 73.8522 96.0056 73.8522 96.0056L65.6841 85.0332C65.6841 85.0332 77.0638 72.1483 76.605 68.0192C76.1462 63.89 72.2842 51.1429 72.2842 51.1429Z" fill="#90796E"/>
                    <path d="M41.8739 62.1741C41.8739 62.1741 36.2311 64.3489 34.8547 68.0193C33.4783 71.6896 24.7613 78.5715 28.4316 80.4067C32.102 82.2418 48.1598 89.5825 51.3713 90.9589C54.5829 92.3353 60.568 87.054 60.568 87.054C60.568 87.054 52.5183 82.4713 52.5183 79.2597C52.5183 76.0481 41.8739 62.1741 41.8739 62.1741Z" fill="#90796E"/>
                    <path d="M22.9261 96.0056L11.9151 98.7584C11.9151 98.7584 -3.22507 166.66 1.36287 183.635C5.95081 200.611 27.5141 251.537 27.5141 251.537L41.2779 235.479C41.2779 235.479 35.2741 198.964 31.8529 196.576C28.4317 194.188 30.7257 189.141 30.7257 187.764C30.7257 186.388 32.1021 187.306 28.8905 184.094C25.679 180.882 40.8192 162.99 36.69 157.943C32.5609 152.896 22.9261 96.0056 22.9261 96.0056Z" fill="#6D473C"/>
                    <path opacity="0.1" d="M131.431 108.622L124.778 83.6182C124.778 83.6182 142.671 96.4644 146.342 115.275C150.012 134.085 164.235 171.707 155.059 188.223C145.883 204.74 129.825 252.454 124.32 251.537C118.814 250.619 105.509 239.149 105.05 237.314C104.591 235.479 128.907 193.27 125.237 190.058C121.567 186.847 122.484 178.589 125.237 176.753C127.99 174.918 131.201 166.201 128.907 166.66C126.614 167.119 119.732 162.531 121.108 157.484C122.484 152.437 114.226 118.487 114.226 118.487L131.431 108.622Z" fill="black"/>
                    <path d="M122.484 80.4066L128.907 82.2418C128.907 82.2418 146.801 95.088 150.471 113.899C154.141 132.709 168.364 170.33 159.188 186.847C150.012 203.363 133.954 251.078 128.449 250.16C122.943 249.243 109.638 237.773 109.179 235.938C108.721 234.103 133.037 191.894 129.366 188.682C125.696 185.47 126.614 177.212 129.366 175.377C132.119 173.542 135.331 164.825 133.037 165.284C130.743 165.742 123.861 161.154 125.237 156.108C126.614 151.061 118.355 117.11 118.355 117.11L122.484 80.4066Z" fill="#6D473C"/>
                    <path d="M63.9208 14.8274L68.3954 13.2003C68.3954 13.2003 59.0394 3.84426 46.0224 4.6579L49.6835 0.996832C49.6835 0.996832 40.7343 -2.25738 32.5987 6.28498C28.322 10.7755 23.3737 16.0539 20.289 22H15.497L17.497 26L10.497 30L17.6818 29.2815C17.0012 32.7348 17.2355 36.3062 18.3614 39.641L19.9885 44.1156C19.9885 44.1156 26.497 31.0986 26.497 29.4715V33.5393C26.497 33.5393 30.9716 29.8783 30.9716 27.4376L33.4123 30.2851L34.6326 25.8105L49.6835 30.2851L47.2429 26.6241L56.5988 27.8444L52.9377 23.3698C52.9377 23.3698 63.514 28.6579 63.9208 33.1325C64.3277 37.6072 69.6157 43.3021 69.6157 43.3021L72.0563 39.2343C72.0563 39.2343 75.7174 20.9291 63.9208 14.8274Z" fill="#2F2E41"/>
                    <path d="M62.997 39C64.93 39 66.497 36.5376 66.497 33.5C66.497 30.4624 64.93 28 62.997 28C61.064 28 59.497 30.4624 59.497 33.5C59.497 36.5376 61.064 39 62.997 39Z" fill="#FFB9B9"/>
                </svg>
            </div>
        </div>
    );
}

export default Billboard;