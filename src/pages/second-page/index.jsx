import {React, useState, useEffect} from "react"
import "./index.css"
import Billboard from "../../components/billboard/index"

const SecondPage = () => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        setOpen(!isOpen)
    }, [])

    return (
        <div className="second-page-container">
            <Billboard isOpen={isOpen}></Billboard>
        </div>
    );
}

export default SecondPage;