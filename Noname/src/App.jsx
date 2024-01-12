import React, { useState } from 'react';

const App = () => {
  
  // List of image filenames in the public folder
  const images = ['01.jpg', '02.jpg', '03.jpg'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(public/${images[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100vw',
    minHeight: '100vh', // Set the minimum height to cover the entire viewport
  };

  return (
    <div style={backgroundImageStyle}>
      <div>
        <h1>Your Content Goes Here</h1>
        <button onClick={nextImage}>Change Background</button>
      </div>
    </div>
  );
};

export default App;
