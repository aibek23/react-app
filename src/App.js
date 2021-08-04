import logo from './logo.svg';
import './App.css';
import Header from './Hader/Header';
import AllNews from './AllNews/AllNews';
import News from './News/News';
import Articles from './Articles/Articles';
import Footer from './Footer/Footer';
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Header/>
       <section>
          <Route path='/AllNews' component={AllNews}/>
          <Route path='/News' component={News}/>
          <Route path='/Articles' component={Articles}/>                
        </section>
      <Footer/> 
    </BrowserRouter>  
  );
}

export default App;
