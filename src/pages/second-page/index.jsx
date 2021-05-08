import {React, useState, useEffect} from "react"
import "./index.css"
import Billboard from "../../components/billboard/index"
import Vacancy from "../../components/vacancy/index"

const SecondPage = () => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        setOpen(!isOpen)
    }, [])

    return (
        <div className="second-page-container">
            <Billboard isOpen={isOpen}></Billboard>
            <Vacancy isOpen={isOpen}></Vacancy>
        </div>
    );
}

export default SecondPage;