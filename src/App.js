import './App.css';
import LandingPage1 from "./ui-components/LandingPage1"
import LandingPage2 from "./ui-components/LandingPage2"
import LandingPage3 from "./ui-components/LandingPage3"
import CTASection from "./ui-components/CTASection"
import NavBarHeader2 from "./ui-components/NavBarHeader2"
import ProfilePageDetails from "./ui-components/ProfilePageDetails"

function App() {
  return (
    <div className="App">
      <NavBarHeader2/>
      <LandingPage1/>
      {/* <LandingPage2/> */}
      {/* <LandingPage3/> */}
      {/* <CTASection/> */}
    </div>
  );
}

export default App;
