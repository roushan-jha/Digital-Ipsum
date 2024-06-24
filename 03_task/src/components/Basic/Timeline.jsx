import React from 'react'
import { Chrono } from "react-chrono"


const Timeline = () => {
    
    const items = [
        {
            title: "Journey 1" , desc: "Using Google Font"
        },
        {
            title: "Journey 2", desc: "Made for Figma"
        },
    ];

    return (
      <div>
        {items.map(({title, desc}) => (
        <Chrono mode="HORIZONTAL">
            <div>
                <h1>dhfdg</h1>
                <p>{items.desc}</p>
            </div>
        </Chrono>
        ))}
      </div>
    )
  }

export default Timeline


