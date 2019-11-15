import React from 'react';
import Notifications from './Notifications.PNG';
import Onboarding from './Onboarding.PNG';
import Dashboard from './Dashboard.PNG';
import SiteFormTab from './SiteFormTab';

const summary = <p>Over the summer, I interned for a pretty cool startup called SiteForm! It's a construction management mobile application. Here are some of the projects I was able to work on.</p>

const SiteForm = () => {
  return (
   <div>
     <div class="header">
      <header>SiteForm</header>
     </div>
      {summary}
      <SiteFormTab
        image={Dashboard}
        bio="The first project I worked on was a dashboard for the app. I pulled data from firebase, formatted it, and then used Victory Native library to make a few nice charts."
        background="orange"
      />
      <SiteFormTab
        image={Notifications}
        bio="The second project I worked on was a notification system for the app. I used Expo Tokens to collect users IDs so-to-speak, and was then able to send them notifications as well as allow them to send notifications amongst each other!"
        background="orange"
      />
      <SiteFormTab
        image={Onboarding}
        bio="The second project I worked on was a notification system for the app. I used Expo Tokens to collect users IDs so-to-speak, and was then able to send them notifications as well as allow them to send notifications amongst each other!"
        background="orange"
      />
   </div>   
  )
}

export default SiteForm;