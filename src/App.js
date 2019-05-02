import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink as Link} from 'react-router-dom';

import './App.scss';

const Home = () =>
    <section className="home">
        <h1>[Home Page]</h1>
    </section>
const About = () =>
    <section className="events">
        <h1>[About the Company]</h1>
    </section>


class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
              <header className="App-header">
                   <Router>
                     <div className='main'>
                         <nav>
                             <Link to='/'>[Home]</Link>
                             <Link to='about'>[About]</Link>
                             
                         </nav>
                         
                         <Route exact path='/' component={Home} />
                         <Route path='/about' component={About} />

                     </div>
                   </Router> 
              </header>
            </div>
        );
    }
}

export default App;
