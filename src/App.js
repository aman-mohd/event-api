import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Categories from './Categories/Categories';
import Events from './Events/Events';

function App() {

  const [event, setEvent] = useState([])
  const [isList, setIsList] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://allevents.s3.amazonaws.com/tests/categories.json");
        const data = response.data;
        setEvent(data)
      } catch (error) {
        console.error(error);
      }
    }
    fetchData()
  }, [])

  const viewToggler = () => {
    setIsList(!isList);
  }

  return (

    <div className={isList ? "container_list" : "container"}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Categories event={event} />
          </Route>
          <Route exact path="/:category">
            <Events viewToggler={viewToggler} isList={isList} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
