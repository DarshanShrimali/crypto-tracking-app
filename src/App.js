import logo from './logo.svg';
import './App.css';
import HomeScreen from './components/HomeScreen';
import ViewMore from './components/ViewMore';
import Navbar from './components/navbar';
import News from './components/news';
import eventCalander from './components/eventCalander';
import Newssummary from './components/newssummary';
import Footer from './components/footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <main class='bg-indigo-dark'>
      <Navbar />
    <Switch>
      <Route path="/" component={HomeScreen}  exact/>
      <Route path="/viewmore" component={ViewMore} />
      {/* <Route path="/eventcalander" component={eventCalander} /> */}
      <Route path="/news" component={News} />
      <Route path="/newssummary" component={Newssummary} />
    </Switch>
    <Footer />
    </main>
       
    
  );
}

export default App;
