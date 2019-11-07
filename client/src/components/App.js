import React, { Component } from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'

const Page1 = () =>
{
    return(
        <div>
            <h3>Page1</h3>
            <Link to="/pagetwo"> next</Link>
        </div>
    )
}
const Page2 = () => {
    return (
        <div>
            <h3>Page2</h3>
            <Link to="/"> previos</Link>
        </div>
    )
}
const App = () =>
{
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={Page1}/>
                    <Route path='/pagetwo' exact component={Page2}/>
                </div>
            </BrowserRouter>
        </div>
    )
} 
export default App;