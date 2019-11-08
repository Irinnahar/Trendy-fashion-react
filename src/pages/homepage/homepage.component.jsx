import React from 'react';
import DirectoryMenu from '../../components/directory/directory.component';

import './homepage.style.scss';

const Homepage = props => {
  return (
    <div className="homepage">
      <DirectoryMenu />
    </div>
  )
}

export default Homepage;
