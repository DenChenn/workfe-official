import React from "react"
import "./index.css"
import Pin from "./pin"
import Phone from "./phone"
import People from "./people"
import Cafe1 from "./cafe-1"
import Cafe2 from "./cafe-2"
import Cafe3 from "./cafe-3"

const Map = ({isOpen}) => {
    return (
        <div className="map-container">
            <Phone/>
            <Pin isOpen={isOpen}/>
            <People isOpen={isOpen}></People>
            <Cafe1 isOpen={isOpen}></Cafe1>
            <Cafe2 isOpen={isOpen}></Cafe2>
            <Cafe3 isOpen={isOpen}></Cafe3>
        </div>
    );
}

export default Map;