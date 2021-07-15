import './App.css';
import { Navigation } from './components/Navigation';
import { Messager } from './components/Messager';
import { Banner } from './components/Banner';
import { Tablets } from "./components/Tablets";
import {TextBox} from './components/TextBox';
import { Footer } from './components/Footer';
import {Gallery} from './components/Gallery';

function App() {
  return (
    <div>
      {/*<Messager />*/}
      <Navigation />
      <Banner />
      <Tablets />
      <TextBox/>
      <Gallery/>
      <Footer />
    </div>
  );
}

export default App;
