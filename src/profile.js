import './App.css';
import NavBarHeader from "./ui-components/NavBarHeader"
import ProfilePageDetails from "./ui-components/ProfilePageDetails"
import StudyGroupCardCollection from "./ui-components/StudyGroupCardCollection"



function Profile() {
    return (
        <div className="Profile">
            <NavBarHeader></NavBarHeader>
            <ProfilePageDetails />
            <StudyGroupCardCollection />
        </div>
    );
}

export default Profile;
