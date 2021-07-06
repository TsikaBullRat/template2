import './App.css';
import { Navigation } from './components/Navigation';
import { Quick_donate } from './components/Quick_donate';
import { Banner } from './components/Banner';
import { Tablets } from "./components/Tablets";
import {TextBox} from './components/TextBox';
import { Footer } from './components/Footer';
import Clone from './components/Clone'

function App() {
  return (
    <div >
      <Quick_donate />
      <Navigation />
      <Banner />
      <Tablets />
      <TextBox
        headline="About Us"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum. Maecenas sed enim ut sem viverra aliquet. Ut etiam sit amet nisl purus in. Amet justo donec enim diam vulputate ut pharetra. Erat nam at lectus urna. Dictum sit amet justo donec enim diam vulputate ut pharetra. Iaculis urna id volutpat lacus. Feugiat in fermentum posuere urna nec. Pellentesque dignissim enim sit amet venenatis urna. Faucibus a pellentesque sit amet porttitor eget dolor. Vestibulum lorem sed risus ultricies tristique nulla. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Consectetur adipiscing elit ut aliquam purus. Nunc faucibus a pellentesque sit amet porttitor eget dolor morbi. Ultrices sagittis orci a scelerisque purus semper eget duis at. Amet facilisis magna etiam tempor orci eu. Orci nulla pellentesque dignissim enim sit amet venenatis. Nec nam aliquam sem et tortor consequat. Malesuada fames ac turpis egestas maecenas pharetra."
        configure="about"
      />
      {/*<Clone config="about"/>*/}
      <Footer />
    </div>
  );
}

export default App;
