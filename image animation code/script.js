function moveImages() {
    const images = document.querySelectorAll('.image');
  
    images.forEach((image) => {
      const x = Math.random() * (window.innerWidth - image.clientWidth);
      const y = Math.random() * (window.innerHeight - image.clientHeight);
      const rotation = Math.random() * 360;
  
      image.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
    });
  }
  
  setInterval(moveImages, 3000); // Change the interval as needed
  