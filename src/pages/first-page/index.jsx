import {React, useState, useEffect} from "react"
import Title from "../../components/title/index"
import "./index.css"

const FirstPage = () => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        setOpen(!isOpen)
    }, [])

    return (
        <div className="first-page-container">
            <Title isOpen={isOpen}/>
        </div>
    );
}

export default FirstPage;