import React, { useState } from 'react';
import EditProfile from './SLEditProfile';
import ProfilePageDetails from './SLProfilePageDetails';

function App() {
  const [profileImage, setProfileImage] = useState(
    'https://th.bing.com/th/id/OIP.ncOCV5LVCL8j70Edjgyn6QHaGy?rs=1&pid=ImgDetMain'
  );

  const handleImageChange = (newImageUrl) => {
    setProfileImage(newImageUrl);
  };

  return (
    <div>
      <EditProfile handleImageChange={handleImageChange} />
      <ProfilePageDetails profileImage={profileImage} />
    </div>
  );
}

export default App;