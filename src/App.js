import './App.css';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProjectDescription from './Components/ProjectDescription';
import ProjectsData from './Components/ProjectsData';
import MainPage from './Components/MainPage';

function App() {

  const [projects, setProjects] = useState(ProjectsData);

  return (

    <div className="App" >
        <Router> 
            <Switch>

                <Route path='/' exact>
                  <MainPage/>
                </Route>
                
                <Route path='/projectDescription'  >
                  <ProjectDescription
                  projects = {projects}
                  setProjects= {setProjects}
                  />
                </Route>
                
            </Switch>
        </Router>
    </div>
  );
}

export default App;
