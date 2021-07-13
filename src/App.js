import './App.css';
import { Navigation } from './components/Navigation';
import { Quick_donate } from './components/Quick_donate';
import { Banner } from './components/Banner';
import { Tablets } from "./components/Tablets";
import {TextBox} from './components/TextBox';
import { Footer } from './components/Footer';
import {Gallery} from './components/Gallery';
/*import Clone from './components/Clone';*/

function App() {
  return (
    <div >
      <Quick_donate />
       <Navigation />
      <Banner />
      <Tablets />
      <TextBox
        headline="About Us"
        text="Big Brothers United is a Non Profit Organization that has been established to combat the scourge of alcohol and drug and abuse in Beaconsfield and Green point in particular. The founder of this organization Mr Tebogo C Moroka said that the youth in these two areas find themselves in the crossfire between two forces that wrestle over the unused time that that is at the disposal of the youth. He said that there are no facilities that can keep the youth away from the streets and this results in the force of evil winning the wrestle because there are more alcohol facilities and drug sales. He said the youth in these areas need help and they need it urgently. As Big Brothers United, we try to create activities for the youth to keep them out of the streets; that is how we will fight the drug and alcohol abuse that is happening in our area."
        configure="about"
      />
      <Gallery/>
     {/* <Clone config="about"/>*/}
      <Footer />
    </div>
  );
}

export default App;
