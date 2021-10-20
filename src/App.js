import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact key="app:home" path="/" component={Home} />
          <Route exact key="app:about" path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
