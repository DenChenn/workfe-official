import {React, useState, useLayoutEffect, useRef} from "react"
import "./index.css"
import Tagmark from "../../components/tagmark/index"
import Freetag from "../../components/freetag/index"

const ThirdPage = () => {
    const [isOpen, setOpen] = useState(false);
    const thirdPageRef = useRef(null)

    useLayoutEffect(() => {
        const topPosition = thirdPageRef.current.getBoundingClientRect().top;
        const onScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            if(topPosition < scrollPosition) { 
                setOpen(!isOpen)
            }
          };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])


    return (
        <div className="third-page-container" ref={thirdPageRef}>
            <Freetag isOpen={isOpen}></Freetag>
            <Tagmark isOpen={isOpen}></Tagmark>
        </div>
    );
}

export default ThirdPage;