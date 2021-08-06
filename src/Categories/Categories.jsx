import React from 'react'
import { Link } from "react-router-dom";


const Categories = ({ event }) => {
  return (
    <div className="cards_container">
      {event.map((val) => {
        return (
          <div className="all_cards" key={val.id} >
            <Link className="each_card" to={`/${val.category}`}>
              <h1>{val.category}</h1>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Categories
