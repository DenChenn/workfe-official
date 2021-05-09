import {React, useEffect, useState, useRef} from "react"
import "./index.css"
import {motion} from "framer-motion"

const Tagmerk = ({isOpen}) => {
    const p1Ref = useRef()
    const [p1Length, setP1Length] = useState(0)
    const p2Ref = useRef()
    const [p2Length, setP2Length] = useState(0)
    const p3Ref = useRef()
    const [p3Length, setP3Length] = useState(0)
    const p4Ref = useRef()
    const [p4Length, setP4Length] = useState(0)
    const p5Ref = useRef()
    const [p5Length, setP5Length] = useState(0)
    const p6Ref = useRef()
    const [p6Length, setP6Length] = useState(0)
    const p7Ref = useRef()
    const [p7Length, setP7Length] = useState(0)
    const p8Ref = useRef()
    const [p8Length, setP8Length] = useState(0)
    const p9Ref = useRef()
    const [p9Length, setP9Length] = useState(0)

    useEffect(() => {
        setP1Length(p1Ref.current.getTotalLength())
        setP2Length(p2Ref.current.getTotalLength())
        setP3Length(p3Ref.current.getTotalLength())
        setP4Length(p4Ref.current.getTotalLength())
        setP5Length(p5Ref.current.getTotalLength())
        setP6Length(p6Ref.current.getTotalLength())
        setP7Length(p7Ref.current.getTotalLength())
        setP8Length(p8Ref.current.getTotalLength())
        setP9Length(p8Ref.current.getTotalLength())
    }, [])

    const p1Tran = {
        duration: 4
    }
    const p2Tran = {
        duration: 2
    }
    const p3Tran = {
        duration: 2
    }
    const p4Tran = {
        duration: 2
    }
    const p5Tran = {
        duration: 2
    }
    const p6Tran = {
        duration: 2
    }
    const p7Tran = {
        duration: 2
    }
    const p8Tran = {
        duration: 2
    }
    const p9Tran = {
        duration: 2
    }


    const leftLeafVariants1 = {
        open: {
            d: "M20.496 41.4002C34.9949 50.3637 53.0933 47.3754 53.0933 47.3754C53.0933 47.3754 47.6845 29.8543 33.1856 20.8908C18.6867 11.9273 0.58821 14.9157 0.58821 14.9157C0.58821 14.9157 5.99707 32.4367 20.496 41.4002Z"
        },
        closed: {
            d: "M28.4358 32.7259C37.061 47.4286 54.4564 53.2495 54.4564 53.2495C54.4564 53.2495 57.8677 35.2327 49.2426 20.53C40.6175 5.82732 23.2221 0.00634766 23.2221 0.00634766C23.2221 0.00634766 19.8107 18.0231 28.4358 32.7259Z"
        }
    }

    const leftLeafTransition1 = {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
    }

    const leftLeafVariants2 = {
        open: {
            d: "M20.496 41.4002C34.9949 50.3637 53.0933 47.3754 53.0933 47.3754C53.0933 47.3754 47.6845 29.8543 33.1856 20.8908C18.6867 11.9273 0.58821 14.9157 0.58821 14.9157C0.58821 14.9157 5.99707 32.4367 20.496 41.4002Z"
        },
        closed: {
            d: "M28.4358 32.7259C37.061 47.4286 54.4564 53.2495 54.4564 53.2495C54.4564 53.2495 57.8677 35.2327 49.2426 20.53C40.6175 5.82732 23.2221 0.00634766 23.2221 0.00634766C23.2221 0.00634766 19.8107 18.0231 28.4358 32.7259Z"
        }
    }

    const leftLeafTransition2 = {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        delay: 3
    }

    const rightLeafVariants1 = {
        open: {
            d: "M37.3079 39.9802C25.5611 52.33 7.29944 54.0303 7.29944 54.0303C7.29944 54.0303 8.08303 35.7078 19.8298 23.3581C31.5766 11.0083 49.8383 9.30797 49.8383 9.30797C49.8383 9.30797 49.0547 27.6305 37.3079 39.9802Z"
        },
        closed: {
            d: "M25.0814 32.4192C23.492 49.3891 10.1959 62.0222 10.1959 62.0222C10.1959 62.0222 -0.523216 47.1417 1.06616 30.1719C2.65553 13.202 15.9516 0.568848 15.9516 0.568848C15.9516 0.568848 26.6707 15.4493 25.0814 32.4192Z"
        }
    }

    const rightLeafTransition1 = {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
    }

    const rightLeafVariants2 = {
        open: {
            d: "M37.3079 39.9802C25.5611 52.33 7.29944 54.0303 7.29944 54.0303C7.29944 54.0303 8.08303 35.7078 19.8298 23.3581C31.5766 11.0083 49.8383 9.30797 49.8383 9.30797C49.8383 9.30797 49.0547 27.6305 37.3079 39.9802Z"
        },
        closed: {
            d: "M25.0814 32.4192C23.492 49.3891 10.1959 62.0222 10.1959 62.0222C10.1959 62.0222 -0.523216 47.1417 1.06616 30.1719C2.65553 13.202 15.9516 0.568848 15.9516 0.568848C15.9516 0.568848 26.6707 15.4493 25.0814 32.4192Z"
        }
    }

    const rightLeafTransition2 = {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        delay: 2
    }

    const BorderVariant = {
        open: {
            strokeDashoffset: 0,
        },
        closed:{
        }
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
        duration: 1,
        delay: 2.5
    }

    const contentVariants = {
        open:{
            scale: [0.5, 1.3, 1],
            opacity: [0, 0.7, 1]
        },
        closed: {}
    }

    return (
        <div className="tagmark-container">
            <div className="background">
                <svg width="100%" height="100%" viewBox="0 0 406 509" fill="none">
                    <path d="M98.8422 508.635C153.405 508.635 197.637 503.305 197.637 496.729C197.637 490.153 153.405 484.822 98.8422 484.822C44.2792 484.822 0.0471802 490.153 0.0471802 496.729C0.0471802 503.305 44.2792 508.635 98.8422 508.635Z" fill="#F2F2F2"/>
                    <path d="M306.942 508.635C361.505 508.635 405.737 503.305 405.737 496.729C405.737 490.153 361.505 484.822 306.942 484.822C252.379 484.822 208.147 490.153 208.147 496.729C208.147 503.305 252.379 508.635 306.942 508.635Z" fill="#F2F2F2"/>
                    <path d="M221.761 28.4166L208.392 23.1441L195.024 17.8717L206.276 8.93618L217.529 0L219.645 14.2087L221.761 28.4166Z" fill="#F2F2F2"/>
                    <path d="M211.124 128.845L197.756 123.572L184.388 118.299L195.003 110.978L205.617 103.657L208.371 116.25L211.124 128.845Z" fill="#F2F2F2"/>
                    <path d="M188.128 263.745L174.76 258.473L161.392 253.2L172.644 244.265L183.896 235.329L186.012 249.537L188.128 263.745Z" fill="#F2F2F2"/>
                    <path d="M47.955 416.258L35.3295 423.12L22.7041 429.982L23.0713 415.622L23.4391 401.262L35.6967 408.76L47.955 416.258Z" fill="#F2F2F2"/>
                    <path d="M35.3429 94.0823L22.7175 100.944L10.092 107.806L10.4592 93.4456L10.8271 79.0857L23.0846 86.584L35.3429 94.0823Z" fill="#F2F2F2"/>
                </svg>
            </div>
            <div className="girl">
                <svg width="100%" height="100%" viewBox="0 0 164 490" fill="none">
                    <path d="M85.8325 62.4873H32.2664V153.931H85.8325V62.4873Z" fill="#2F2E41"/>
                    <path d="M96.5368 58.6464C90.7492 75.7748 81.8747 91.3814 63.7881 91.3814C45.7015 91.3814 32.0585 76.6967 31.0394 58.6464C29.7373 35.5816 45.2843 25.8158 63.7881 25.9113C85.6473 26.0242 103.405 38.319 96.5368 58.6464Z" fill="#2F2E41"/>
                    <path d="M41.9315 187.18L23.0172 258.304C23.0172 258.304 -2.20184 264.606 0.500202 270.909C3.20224 277.211 30.2227 266.407 30.2227 266.407L54.541 206.987L41.9315 187.18Z" fill="#FFB9B9"/>
                    <path d="M57.2432 421.26C57.2432 421.26 74.3561 438.366 63.5479 450.07H86.065L71.6541 414.057L57.2432 421.26Z" fill="#FFB9B9"/>
                    <path d="M74.8876 449.496C74.8876 449.496 74.8876 442.102 67.6732 446.539C60.4588 450.975 37.2125 462.805 37.2125 462.805C37.2125 462.805 21.1805 471.677 44.4269 473.156C67.6732 474.634 90.118 469.459 90.118 466.501C90.118 463.544 87.7132 449.383 87.7132 449.383C87.7132 449.383 82.9036 454.672 74.8876 449.496Z" fill="#2F2E41"/>
                    <path d="M77.9587 435.665L77.0583 465.375L94.1708 468.075V439.266L77.9587 435.665Z" fill="#FFB9B9"/>
                    <path d="M61.7466 98.0495C75.1773 98.0495 86.065 87.1663 86.065 73.7412C86.065 60.3161 75.1773 49.4329 61.7466 49.4329C48.3159 49.4329 37.4282 60.3161 37.4282 73.7412C37.4282 87.1663 48.3159 98.0495 61.7466 98.0495Z" fill="#FFB9B9"/>
                    <path d="M53.1902 93.0977C53.1902 93.0977 64.899 120.107 55.8922 129.11C46.8854 138.113 69.4024 129.11 69.4024 129.11C69.4024 129.11 81.1113 112.004 90.1181 111.104C90.1181 111.104 76.6079 103.901 77.5086 84.9949L53.1902 93.0977Z" fill="#FFB9B9"/>
                    <path d="M37.4281 224.093L35.6268 266.407C35.6268 266.407 3.20223 351.036 15.8118 370.843C28.4213 390.649 58.1438 426.662 58.1438 426.662C58.1438 426.662 75.2567 418.559 75.2567 414.057C75.2567 414.057 58.1438 371.743 43.7329 361.84C43.7329 361.84 44.6336 344.734 58.1438 326.728L70.7533 370.843L76.1574 438.366C76.1574 438.366 91.469 443.768 96.8731 441.067C96.8731 441.067 108.582 397.852 100.476 372.643L98.6745 303.32C98.6745 303.32 122.092 269.108 92.3697 228.594L87.8663 214.189C87.8663 214.189 41.9315 218.691 37.4281 224.093Z" fill="#2F2E41"/>
                    <path d="M79.7602 460.873C79.7602 460.873 79.7602 451.87 71.6541 457.272C63.548 462.674 37.4282 477.079 37.4282 477.079C37.4282 477.079 19.4146 487.882 45.5344 489.683C71.6541 491.484 96.8732 485.181 96.8732 481.58C96.8732 477.979 94.1711 460.735 94.1711 460.735C94.1711 460.735 88.767 467.175 79.7602 460.873Z" fill="#2F2E41"/>
                    <path d="M60.3954 126.409L88.6995 110.187C88.6995 110.187 130.649 111.104 127.947 132.711C127.947 132.711 119.84 160.621 117.138 157.92L111.734 152.518C111.734 152.518 91.9193 193.032 91.9193 201.135C91.838 206.347 90.9259 211.514 89.2173 216.44L40.5805 223.642C40.5805 223.642 45.9846 193.032 37.8785 187.63C29.7724 182.228 27.0703 167.823 35.1764 155.219C38.2582 150.379 40.9365 145.293 43.1842 140.014C44.5996 136.74 46.6502 133.778 49.2176 131.3C51.785 128.823 54.8181 126.878 58.1418 125.579L60.3954 126.409Z" fill="#90796E"/>
                    <path d="M123.443 130.01C123.443 130.01 171.179 168.723 163.073 176.826C154.967 184.929 110.834 217.34 110.834 217.34C110.834 217.34 106.33 244.349 97.3235 243.449C88.3167 242.549 99.1249 210.138 99.1249 210.138L136.954 174.125L116.238 152.518L123.443 130.01Z" fill="#FFB9B9"/>
                    <path d="M63.7882 32.8029C70.9276 32.8029 76.7153 27.0177 76.7153 19.8812C76.7153 12.7447 70.9276 6.95947 63.7882 6.95947C56.6487 6.95947 50.8611 12.7447 50.8611 19.8812C50.8611 27.0177 56.6487 32.8029 63.7882 32.8029Z" fill="#2F2E41"/>
                    <path d="M48.2757 12.9896C48.2759 9.78638 49.4663 6.69741 51.616 4.32188C53.7657 1.94634 56.7215 0.453568 59.91 0.133126C59.4847 0.0908998 59.0537 0.0678711 58.6173 0.0678711C55.1888 0.0678711 51.9007 1.42927 49.4764 3.85256C47.0521 6.27586 45.6902 9.56255 45.6902 12.9896C45.6902 16.4167 47.0521 19.7033 49.4764 22.1266C51.9007 24.5499 55.1888 25.9113 58.6173 25.9113C59.0537 25.9113 59.4847 25.8883 59.91 25.8461C56.7215 25.5256 53.7657 24.0329 51.616 21.6573C49.4663 19.2818 48.2759 16.1928 48.2757 12.9896Z" fill="#2F2E41"/>
                    <path d="M48.8753 47.8018C48.8753 47.8018 48.6053 46.2998 38.0484 50.257C27.4915 54.2142 21.1634 83.4166 26.4418 100.564C28.569 107.475 26.8386 112.457 24.0143 115.944C13.4157 129.026 17.5879 148.675 33.0255 155.402C33.4613 155.592 33.906 155.78 34.3595 155.965L40.9576 159.922C40.9576 159.922 32.5465 148.86 36.7557 134.708C40.4111 122.651 40.8625 109.85 38.0655 97.5654C37.5826 95.4931 37.0341 93.3569 36.411 91.1769C31.1325 72.71 33.6997 74.8426 52.1743 56.3757C52.1743 56.3757 62.7312 64.2901 71.9685 68.2473C81.2058 72.2045 89.1235 76.1617 82.5254 89.3524C75.9274 102.543 60.092 114.415 70.6489 131.562C81.2058 148.71 82.5254 142.115 81.2058 148.71L79.8862 155.306L87.8039 147.391L82.5254 157.944C82.5254 157.944 99.6804 157.944 104.959 144.753L107.598 147.391C107.598 147.391 118.155 128.924 98.3609 111.776C98.3609 111.776 91.7628 107.819 101 94.6286C110.237 81.438 103.143 53.078 91.2665 47.8018C79.39 42.5255 48.8753 47.8018 48.8753 47.8018Z" fill="#2F2E41"/>
                    <path d="M117.076 122.635L113.573 149.249L117.076 157.654C117.076 157.654 132.491 138.744 127.586 128.238C122.681 117.732 117.076 122.635 117.076 122.635Z" fill="#90796E"/>
                </svg>
            </div>
            <div className="right-leaf">
                <svg width="100%" height="100%" viewBox="0 0 47 63" fill="none">
                    <motion.path 
                        animate={isOpen ? "open" : "closed"}
                        variants={rightLeafVariants1}
                        transition={rightLeafTransition1}
                        fill="#90796E"
                    />
                    <motion.path
                        animate={isOpen ? "open" : "closed"}
                        variants={rightLeafVariants2}
                        transition={rightLeafTransition2}
                        fill="#68493B"
                    />
                </svg>
            </div>
            <div className="left-leaf">
                <svg width="100%" height="100%" viewBox="0 0 56 54" fill="none">
                    <motion.path 
                        animate={isOpen ? "open" : "closed"}
                        variants={leftLeafVariants1}
                        transition={leftLeafTransition1}
                        fill="#F2F2F2"
                    />
                    <motion.path 
                        animate={isOpen ? "open" : "closed"}
                        variants={leftLeafVariants2}
                        transition={leftLeafTransition2}
                        fill="#90796E"
                    />
                </svg>
            </div>
            <div className="mark">
                <svg width="100%" height="100%" viewBox="0 0 494 419" fill="none">
                    <motion.path 
                        d="M484.635 207.749L493.274 155.694L385.407 132.85L389.835 0.0656845H337.046L332.988 121.75L187.782 90.9989L190.814 0.0656738H138.025L135.363 79.898L29.2697 57.4303L20.6302 109.486L133.579 133.405L130.137 236.609L8.63949 210.879L0 262.935L128.353 290.117L124.07 418.563H176.859L180.772 301.218L325.978 331.968L323.09 418.563H375.879L378.397 343.069L464.005 361.199L472.644 309.143L380.181 289.562L383.623 186.358L484.635 207.749ZM327.762 278.461L182.556 247.71L185.998 144.506L331.204 175.257L327.762 278.461Z" 
                        fill="#3A1E11"
                        animate={isOpen ? "open" : "closed"}
                        variants={MainBoardVariant}
                        transition={MainBoardTransition}
                    />

                    <motion.path 
                        ref={p1Ref}
                        d="M484.635 207.749L493.274 155.694L385.407 132.85L389.835 0.0656845H337.046L332.988 121.75L187.782 90.9989L190.814 0.0656738H138.025L135.363 79.898L29.2697 57.4303L20.6302 109.486L133.579 133.405L130.137 236.609L8.63949 210.879L0 262.935L128.353 290.117L124.07 418.563H176.859L180.772 301.218L325.978 331.968L323.09 418.563H375.879L378.397 343.069L464.005 361.199L472.644 309.143L380.181 289.562L383.623 186.358L484.635 207.749ZM327.762 278.461L182.556 247.71L185.998 144.506L331.204 175.257L327.762 278.461Z" 
                        stroke="#3A1E11"
                        strokeWidth="2"
                        animate={isOpen ? "open" : "closed"}
                        variants={BorderVariant}
                        strokeDashoffset={p1Length}
                        strokeDasharray={p1Length}
                        transition={p1Tran}
                    />
                    <motion.path 
                        opacity="0.2" 
                        d="M342.325 278.461L345.766 175.257L200.56 144.506L200.458 147.569L331.204 175.257L327.864 275.398L342.325 278.461Z" 
                        animate={isOpen ? "open" : "closed"}
                        variants={MainBoardVariant}
                        transition={MainBoardTransition}
                        fill="black"
                    />
                    
                    <motion.path 
                        ref={p2Ref}
                        opacity="0.2" 
                        d="M342.325 278.461L345.766 175.257L200.56 144.506L200.458 147.569L331.204 175.257L327.864 275.398L342.325 278.461Z" 
                        stroke="#3A1E11"
                        strokeWidth="2"
                        animate={isOpen ? "open" : "closed"}
                        variants={BorderVariant}
                        strokeDashoffset={p2Length}
                        strokeDasharray={p2Length}
                        transition={p2Tran}
                    />
                    <motion.path
                        opacity="0.2" 
                        d="M347.551 121.75L351.608 0.0654297H337.046L333.09 118.687L347.551 121.75Z" 
                        animate={isOpen ? "open" : "closed"}
                        variants={MainBoardVariant}
                        transition={MainBoardTransition}
                        fill="black"
                    />
                    <motion.path 
                        ref={p3Ref}
                        opacity="0.2"
                        d="M347.551 121.75L351.608 0.0654297H337.046L333.09 118.687L347.551 121.75Z" 
                        stroke="black"
                        strokeWidth="2"
                        animate={isOpen ? "open" : "closed"}
                        variants={BorderVariant}
                        strokeDashoffset={p3Length}
                        strokeDasharray={p3Length}
                        transition={p3Tran}
                    />
                    <motion.path 
                        opacity="0.2" 
                        d="M398.185 186.358L398.083 189.42L484.635 207.75L485.13 204.77L398.185 186.358Z" 
                        animate={isOpen ? "open" : "closed"}
                        variants={MainBoardVariant}
                        transition={MainBoardTransition}
                        fill="black"
                    />
                    <motion.path 
                        ref={p4Ref}
                        opacity="0.2" 
                        d="M398.185 186.358L398.083 189.42L484.635 207.75L485.13 204.77L398.185 186.358Z" 
                        stroke="black"
                        strokeWidth="2"
                        animate={isOpen ? "open" : "closed"}
                        variants={BorderVariant}
                        strokeDashoffset={p4Length}
                        strokeDasharray={p4Length}
                        transition={p4Tran}
                    />

                    <motion.path 
                        opacity="0.2" 
                        d="M149.926 79.8978L152.588 0.0654297H138.025L135.465 76.8357L149.926 79.8978Z" 
                        animate={isOpen ? "open" : "closed"}
                        variants={MainBoardVariant}
                        transition={MainBoardTransition}
                        fill="black"
                    />
                    <motion.path 
                        ref={p5Ref}
                        opacity="0.2" 
                        d="M149.926 79.8978L152.588 0.0654297H138.025L135.465 76.8357L149.926 79.8978Z" 
                        stroke="black"
                        strokeWidth="2"
                        animate={isOpen ? "open" : "closed"}
                        variants={BorderVariant}
                        strokeDashoffset={p5Length}
                        strokeDasharray={p5Length}
                        transition={p5Tran}
                    />

                    <motion.path 
                        opacity="0.2" 
                        d="M392.959 343.069L392.857 346.131L464.004 361.199L464.499 358.219L392.959 343.069Z" 
                        animate={isOpen ? "open" : "closed"}
                        variants={MainBoardVariant}
                        transition={MainBoardTransition}
                        fill="black"
                    />
                    <motion.path 
                        ref={p6Ref}
                        opacity="0.2" 
                        d="M392.959 343.069L392.857 346.131L464.004 361.199L464.499 358.219L392.959 343.069Z" 
                        stroke="black"
                        strokeWidth="2"
                        animate={isOpen ? "open" : "closed"}
                        variants={BorderVariant}
                        strokeDashoffset={p6Length}
                        strokeDasharray={p6Length}
                        transition={p6Tran}
                    />

                    <motion.path 
                        opacity="0.2" 
                        d="M195.334 301.217L195.232 304.28L325.978 331.968L323.09 418.564H337.652L340.541 331.968L195.334 301.217Z" 
                        animate={isOpen ? "open" : "closed"}
                        variants={MainBoardVariant}
                        transition={MainBoardTransition}
                        fill="black"
                    />
                    <motion.path 
                        ref={p7Ref}
                        opacity="0.2" 
                        d="M195.334 301.217L195.232 304.28L325.978 331.968L323.09 418.564H337.652L340.541 331.968L195.334 301.217Z" 
                        stroke="black"
                        strokeWidth="2"
                        animate={isOpen ? "open" : "closed"}
                        variants={BorderVariant}
                        strokeDashoffset={p7Length}
                        strokeDasharray={p7Length}
                        transition={p7Tran}
                    />
                    <motion.path 
                        opacity="0.2" 
                        d="M130.239 233.547L144.7 236.609L148.141 133.406L35.1927 109.486L43.3374 60.4096L29.2699 57.4302L20.6299 109.486L133.579 133.406L130.239 233.547Z" 
                        animate={isOpen ? "open" : "closed"}
                        variants={MainBoardVariant}
                        transition={MainBoardTransition}
                        fill="black"
                    />
                    <motion.path 
                        ref={p8Ref}
                        opacity="0.2" 
                        d="M130.239 233.547L144.7 236.609L148.141 133.406L35.1927 109.486L43.3374 60.4096L29.2699 57.4302L20.6299 109.486L133.579 133.406L130.239 233.547Z" 
                        stroke="black"
                        strokeWidth="2"
                        animate={isOpen ? "open" : "closed"}
                        variants={BorderVariant}
                        strokeDashoffset={p8Length}
                        strokeDasharray={p8Length}
                        transition={p8Tran}
                    />
                    <motion.path 
                        opacity="0.2" 
                        d="M14.5628 262.935L22.7074 213.859L8.63931 210.879L0 262.935L128.353 290.117L124.07 418.564H138.632L142.916 290.117L14.5628 262.935Z" 
                        animate={isOpen ? "open" : "closed"}
                        variants={MainBoardVariant}
                        transition={MainBoardTransition}
                        fill="black"
                    />
                    <motion.path 
                        ref={p9Ref}
                        opacity="0.2" 
                        d="M14.5628 262.935L22.7074 213.859L8.63931 210.879L0 262.935L128.353 290.117L124.07 418.564H138.632L142.916 290.117L14.5628 262.935Z" 
                        stroke="black"
                        strokeWidth="2"
                        animate={isOpen ? "open" : "closed"}
                        variants={BorderVariant}
                        strokeDashoffset={p9Length}
                        strokeDasharray={p9Length}
                        transition={p9Tran}
                    />

                </svg>
            </div>
            <motion.div 
                className="tag-1"
                animate={isOpen ? "open" : "closed"}
                initial={false}
                variants={contentVariants}
                transition={{ time: [0,0.3,0.5]}}
            >#網美</motion.div>
            <motion.div 
                className="tag-2"
                animate={isOpen ? "open" : "closed"}
                initial={false}
                variants={contentVariants}
                transition={{ time: [0,0.3,0.5], delay: 0.5}}
            >#大自然</motion.div>
            <motion.div 
                className="tag-3"
                animate={isOpen ? "open" : "closed"}
                initial={false}
                variants={contentVariants}
                transition={{ time: [0,0.3,0.5], delay: 1}}
            >#桌子很大</motion.div>
            <motion.div 
                className="tag-4"
                animate={isOpen ? "open" : "closed"}
                initial={false}
                variants={contentVariants}
                transition={{ time: [0,0.3,0.5], delay: 1.5}}
            >#適合讀書</motion.div>
            <motion.div 
                className="tag-5"
                animate={isOpen ? "open" : "closed"}
                initial={false}
                variants={contentVariants}
                transition={{ time: [0,0.3,0.5], delay: 2}}
            >#貓貓蟲咖波</motion.div>
            <motion.div 
                className="tag-6"
                animate={isOpen ? "open" : "closed"}
                initial={false}
                variants={contentVariants}
                transition={{ time: [0,0.3,0.5], delay: 2.5}}
            >#外語交流</motion.div>
            <motion.div 
                className="tag-7"
                animate={isOpen ? "open" : "closed"}
                initial={false}
                variants={contentVariants}
                transition={{ time: [0,0.3,0.5], delay: 3}}
            >#流行音樂</motion.div>
        </div>
    );
}

export default Tagmerk;