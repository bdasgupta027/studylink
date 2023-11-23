import '../dist/output.css';
{/* <link href="/dist/output.css" rel="stylesheet"></link> */}
import SLNavBarHeader from "./ui-components/SLNavBarHeader"
import ProfilePageDetails from "./ui-components/SLProfilePageDetails"
import StudyGroupCardCollection from "./ui-components/StudyGroupCardCollection"
import StandardCardCollection from "./ui-components/StandardCardCollection"
import { API, Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import { getProfileCard } from './graphql/queries';
import EditProfile from './ui-components/SLEditProfile';





function Profile() {
    const [profileCard, setProfileCard] = useState(null);
    const [profileImage, setProfileImage] = useState("");

    const createProfileCardDetails = async () => {
        const user = await Auth.currentAuthenticatedUser();
        try {
            const response = await API.graphql({
                query: getProfileCard,
                variables: { id: user.attributes.sub }
            });
            const fetchedProfileCard = response.data.getProfileCard;
            setProfileCard(fetchedProfileCard);
            setProfileImage(fetchedProfileCard.image);
            console.log("FINAL PROFILE", fetchedProfileCard);
        } catch (err) {
            console.log(err);
            return false;
        }
    };

    useEffect(() => {
        createProfileCardDetails();
      }, []); 

      const updateProfileImage = (newImage) => {
        setProfileImage(newImage);
      };
    return (
        <div className="Profile">
            <SLNavBarHeader profileImage={profileImage} setProfileImage={setProfileImage} />
            {profileCard && <ProfilePageDetails profileCard={profileCard} profileImage={profileImage} style={{ marginTop: '20px' }} />}
            <StandardCardCollection />
        </div>
    );
}

export default Profile;
