import React from 'react';
import './App.css';
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from 'webfontloader';
import Footer from './component/layout/Footer/Footer';

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"]
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />

        <Footer />
      </Router>
    </div>
  );
}

export default App;
