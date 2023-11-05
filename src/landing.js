import './App.css';
import LandingPage1 from "./ui-components/LandingPage1"
import LandingPage2 from "./ui-components/LandingPage2"
import LandingPage3 from "./ui-components/LandingPage3"
import CTASection from "./ui-components/CTASection"

function Landing() {
    return (
        <div className="Landing">
            {/* landing page */}
            <LandingPage1 />
            <LandingPage2 />
            <LandingPage3 />
            <CTASection />
        </div>
    );
}

export default Landing;
