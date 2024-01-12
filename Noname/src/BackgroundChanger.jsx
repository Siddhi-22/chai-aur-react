import React, { useState } from 'react';

const BackgroundChanger = () => {
  // List of background images
  const images = [
    '/public/01.jpg',
    '/public/02.jpg',
    '/public/03.jpg',
  ];

  // State to track the current background image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle image change
  const changeBackgroundImage = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  // Style object to set the background image
  const containerStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  };

  return (
    <div style={containerStyle}>
      <h1>Your Content Goes Here</h1>
      <button onClick={changeBackgroundImage}>Change Background</button>
    </div>
  );
};

export default BackgroundChanger;
