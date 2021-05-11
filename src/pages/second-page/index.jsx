import {React, useState, useLayoutEffect, useRef} from "react"
import "./index.css"
import Billboard from "../../components/billboard/index"
import Vacancy from "../../components/vacancy/index"

const SecondPage = () => {
    const [isOpen, setOpen] = useState(false);
    const secondPageRef = useRef(null)

    useLayoutEffect(() => {
        const topPosition = secondPageRef.current.getBoundingClientRect().top;
        const onScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            if(topPosition < scrollPosition) { 
                setOpen(true)
            }
          };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    return (
        <div className="second-page-container" ref={secondPageRef}>
            <Billboard isOpen={isOpen}></Billboard>
            <Vacancy isOpen={isOpen}></Vacancy>
        </div>
    );
}

export default SecondPage;