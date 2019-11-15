import React from 'react';
// import Notifications from './Notifications.PNG';
// import Onboarding from './Onboarding.PNG';
// import Dashboard from './Dashboard.PNG';

const SiteFormTab = ({ image, bio, background }) => {
  return (
    <div class="siteFormTab">
      <img src={image} height={500}/>
      <div> 
        {bio}
      </div>
    </div>
  )
}

export default SiteFormTab;