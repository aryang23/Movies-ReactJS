import './App.css';
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Movies from './Components/Movies'
import Favourite from './Components/Favourite'
import {BrowserRouter as Router,Switch,Route, BrowserRouter} from 'react-router-dom';
import { Routes  } from 'react-router-dom';

function App() {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact component={Movies} render={(props)=>{
          <>
            <Banner {...props}/>
            <Movies {...props}/>
          </>
        }}/>
        <Route path="/favourites" component={Favourite} />
      </Routes>
      {/* <Banner/> */}
      {/* <Movies/> */}
      {/* <Favourite/> */}
    </Router>
  );
}

export default App;

/*
CSS in React: -
1. Inline CSS
2. Object
3. External CSS File
4. External Module File
*/