import {React, useState, useEffect} from "react"
import "./index.css"

const SixthPage = () => {
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        setOpen(!isOpen)
    }, [])

    return (
        <div className="sixth-page-container">
            <div className="title">用更聰明的方式</div>
            <div className="content">找到合適的咖啡廳</div>
            <div className="download">
                <img src="image/google-play.png" alt="google play" />
                <img src="image/app-store.png" alt="app store" />
            </div>
            <div className="footer">
                <img src="image/information.png" alt="information" />
                <div className="media">
                    <img src="image/instagram.png" alt="instagram" />
                    <img src="image/facebook.png" alt="facebook" />
                    <img src="image/mail.png" alt="mail" />
                </div>
            </div>
        </div>
    );
}

export default SixthPage;