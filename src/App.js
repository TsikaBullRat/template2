import './App.css';
import { Navigation } from './components/Navigation';
import { Quick_donate } from './components/Quick_donate';
import { Banner } from './components/Banner';
import { Tablets } from "./components/Tablets";
import { TextBox } from './components/TextBox';
import { Footer } from './components/Footer';

function App() {
  return (
    <div >
      <Quick_donate />
      <Navigation />
      <Banner />
      <Tablets />
      <TextBox
        headline="About Us"
        text="We as ... wish to help people around the world by etc... and wish to do so admirabley "
        configure="about"
      />
      <TextBox
        headline="Our Impacts"
        text="We ahve done so much as ... to be proud of and thus far. The more we do the do we more. The lives we've changed the peoples we've infulenced the moves we make as precise and as perfect as a game of chess"
        configure="impacts"
      />
      <Footer />
    </div>
  );
}

export default App;
