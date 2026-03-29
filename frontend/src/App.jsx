import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your components here
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
