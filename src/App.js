import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch} from 'react'

function App() {
    return (<>
        <Router>
            <Navbar>
                <Switch>
                    <Route path='/' exact/>
                </Switch>
            </Navbar>
        </Router>
    </>);
}

export default App;
