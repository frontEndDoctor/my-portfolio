// importing the required dependencies and components
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'  component={Home}/>
        <Route  path='/About'  component={About} />
        <Route path='/Skills'  component={Skills} />
        <Route path='/Projects' component={Projects} />
        <Route path='/Contact'  component={Contact} />
        <Redirect to ="/" />
      
      </Switch>

      

    </Router>
    

  );
}

export default App;


































{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This<code> is my</code> first react app
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  //     </header> */}
  //     <div className="App">     
  //     <main className= "">
  //       <Nav />
  //       <About />
  //       <Skills />
  //       <Projects /> 
  //     </main>
    
    
  // </div>