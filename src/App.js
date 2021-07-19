import './App.css';
import { Navigation } from './components/Navigation';
import { Banner } from './components/Banner';
import { Tablets } from "./components/Tablets";
import {TextBox} from './components/TextBox';
import { Footer } from './components/Footer';
import {Gallery} from './components/Gallery';
import {Accomplishments} from './components/Accomplishments'

function App() {
  return (
    <div>
      <Navigation />
      <Banner />
      <Tablets />
      <TextBox/>
      <Accomplishments/>
      <Gallery/>
      <div id="footer"></div>
      <Footer />
    </div>
  );
}

export default App;
