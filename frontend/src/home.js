import React from 'react';
import {Route} from "react-router-dom";
import About from "./components/about/about";
import Menu from "./components/menu/menu";
import Gallery from "./components/gallery/gallery";
import Contacts from "./components/contacts/contacts";
import DishDetails from "./components/dish-details/dish-details";
import {Container} from "react-bootstrap";

const Home = () => {
    return (
        <Container className="py-5">
            <Route exact path="/about" component={() => <About/>}/>
            <Route exact path="/menu" component={() => <Menu/>}/>
            <Route exact path="/gallery" component={() => <Gallery/>}/>
            <Route exact path="/contacts" component={() => <Contacts/>}/>
            <Route exact path="/dish/:id" component={() => <DishDetails/>}/>
        </Container>

    );
};

export default Home;