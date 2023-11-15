import './App.css';
import SLNavBarHeader from "./ui-components/SLNavBarHeader"
import ProfilePageDetails from "./ui-components/SLProfilePageDetails"
import StudyGroupCardCollection from "./ui-components/StandardCardCollection"



function Profile() {
    return (
        <div className="Profile">
            <SLNavBarHeader></SLNavBarHeader>
            <ProfilePageDetails />
            <StudyGroupCardCollection />
        </div>
    );
}

export default Profile;
