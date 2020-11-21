import React from 'react';
import './App.css';
import TopBar from "./components/top-bar/top-bar";
import Header from "./components/header/header";
import Main from "./components/main/main";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./components/about/about";
import Menu from "./components/menu/menu";
import Gallery from "./components/gallery/gallery";
import Contacts from "./components/contacts/contacts";
import {Container} from "react-bootstrap";
import DishDetails from "./components/dish-details/dish-details";
import Footer from "./components/footer/footer";
import Home from "./home";

function App() {
    return (
        <Router>
            <div className="main-wrap">
                <TopBar/>
                <Header/>
                <Route exact path="/" component={() => <Main/>}/>
                <Route exact path="/about" component={() => <Home/>}/>
                <Route exact path="/menu" component={() => <Home/>}/>
                <Route exact path="/gallery" component={() => <Home/>}/>
                <Route exact path="/contacts" component={() => <Home/>}/>
                <Route exact path="/dish/:id" component={() => <Home/>}/>
                </div>
                <Footer/>

        </Router>


);
}

export default App;
