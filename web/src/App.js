import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Film from './component/Film/Film';
import { filmItem } from './component/MainPage/Data';
import Page from './component/MainPage/Page';
import Manga from './component/Manga/Manga';
import Navbar from './component/Navbar/Navbar';
import Footer from '../src/component/Footer/Footer';


function App() {

  return (
    <Router>
      <Navbar />
        <Switch>
            <Route path='/' exact component = {Page} />
            <Route path ='/film' component={Film} />
            <Route path='/manga' component ={Manga} />
        </Switch>
        <Footer />
    </Router>
  );
}

export default App;
