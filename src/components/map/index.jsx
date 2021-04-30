import {React, useState} from "react"
import {motion} from "framer-motion"
import "./index.css"
import Pin from "./pin"
import Phone from "./phone"
import People from "./people"

const Map = ({isOpen}) => {
    return (
        <div className="map-container">
            <Phone/>
            <Pin isOpen={isOpen}/>
            <People isOpen={isOpen}></People>
        </div>
    );
}

export default Map;