import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'
import { BsFillGrid3X3GapFill } from "react-icons/bs"
import { FaThList } from "react-icons/fa"
import "../Css/List.css"
import "../Css/responsive.css"



const Events = ({ viewToggler, isList }) => {
  const { category } = useParams();
  const url = `https://allevents.s3.amazonaws.com/tests/${category}.json`
  const [sortedEvents, setSortedEvents] = useState([]);
  

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(url);
        const json = response.data;
        setSortedEvents(json.item)
      } catch (error) { console.error(error); }
    }
    fetchApi()
  }, [url]);



  return (
    <>
      <div className="toggler" onClick={viewToggler}>
        <h3 >Toggle View </h3>
        {isList ? <FaThList /> : <BsFillGrid3X3GapFill />}
      </div>


      <div className={isList ? "cards_container_list" : "cards_container"}>
        {sortedEvents.map((val) => {
          return (
            <div className={isList ? "all_events_list" : "all_events_grid"} key={val.event_id} >
              <div className={isList ? "each_event_list" : "each_event"}>
                <img src={val.thumb_url} alt="" />
              </div>
              <p className="event_name">{val.eventname}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Events
