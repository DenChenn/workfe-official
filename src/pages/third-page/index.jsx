import {React, useState, useEffect} from "react"
import "./index.css"
import Tagmark from "../../components/tagmark/index"
import Freetag from "../../components/freetag/index"

const ThirdPage = () => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        setOpen(!isOpen)
    }, [])

    return (
        <div className="third-page-container">
            <Freetag isOpen={isOpen}></Freetag>
            <Tagmark isOpen={isOpen}></Tagmark>
        </div>
    );
}

export default ThirdPage;