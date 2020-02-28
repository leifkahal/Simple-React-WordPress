import React from 'react';
import Process from './Process'


const FourOFour = () => {

  const backgroundImg = global.Configs.fofBackground
  // eslint-disable-next-line
  let process = Process()
  
  return (
    <div className="react-fof-wrapper" 
    style={{ 
      minHeight: '100vh',
      'backgroundImage': `url(${backgroundImg})`,
      }}>
    <div id="four-o-four">
      <h2 style={{ fontSize: '5em' }}>404</h2>
      <p>Page not found</p>
    </div>
    </div>
  )
}

export default FourOFour;