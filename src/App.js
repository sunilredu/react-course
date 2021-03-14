import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './About';
import Contact from './Contact';
import Users from './Users';
import CreateUser from './CreateUser';
import { Link, Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [name, setName] = useState("vivek")
  return (
    <div className="App">
      <Router>
        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#features"><Link to="/about">About</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to="/contact">Contact US</Link></Nav.Link>
              <Nav.Link href="#features"><Link to="/list">User List</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to="/users">Create User</Link></Nav.Link>
            </Nav>

          </Navbar>
          <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <CreateUser />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/list">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        </>

      </Router>
    </div>
  );
}

export default App;
