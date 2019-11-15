import React from 'react';
import minionThong from './minionThong.jpg';
import me from './me.JPG';

const name = <p>Anna Lanzino</p>;
const bio = <p>Hi! My name is Anna. I'm a junior Computer Science major at the University of Florida.</p>
const img = <img src={me} height={400}/>

const Header = () => {
  return (
      <div className="App">
      <header className="App-header">
        {name}
        <div class="headerBio">
          {bio}
        </div>
        <div className="headerContainer">
          {img}
        </div>
      </header>
    </div>
  )
}

export default Header;