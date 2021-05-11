import {React, useState, useEffect} from "react"
import Title from "../../components/title/index"
import Map from "../../components/map/index"
import NavBar from "../../components/navbar/index"
import "./index.css"

const FirstPage = () => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true)
    }, [])

    return (
        <div className="first-page-container">
            <NavBar></NavBar>
            <div className="content">
                <Title isOpen={isOpen}/>
                <Map isOpen={isOpen}/>
            </div>
        </div>
    );
}

export default FirstPage;