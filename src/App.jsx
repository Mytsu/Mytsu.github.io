import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Particles, Welcome } from './components';
import About from './components/About';
import Posts from './components/Posts';
import Projects from './components/Projects';

export default function App() {
    return (
        <Router>
            <Particles />
            <Header />
            <Switch>
                <Route exact={true} path="/" component={Welcome} />
                <Route path="/projects" component={Projects} />
                <Route path="/posts" component={Posts} />
                <Route path="/about" component={About} />
            </Switch>
        </Router>
    );
}
