import './App.css';
import SLLandingPage1 from "./ui-components/SLLandingPage1"
import SLLandingPage2 from "./ui-components/SLLandingPage2"
import SLLandingPage3 from "./ui-components/SLLandingPage3"
import CTASection from "./ui-components/SLCTASection"
import SLNavBarHeader2 from './ui-components/SLNavBarHeader2';

function Landing() {
    return (
        <div className="Landing">
            {/* landing page */}
            <SLNavBarHeader2 />
            <SLLandingPage1 />
            <SLLandingPage2 marginTop="20px" />
            <SLLandingPage3 />
            <CTASection />
        </div>
    );
}

export default Landing;
