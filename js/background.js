const images=["pexels-eberhard-grossgasteiger-454880.jpg","pexels-james-wheeler-1519088.jpg","pexels-julius-silver-753626.jpg","pexels-pixabay-33109.jpg","pexels-pixabay-459203.jpg"];

const chosenImage=images[Math.floor(Math.random()*images.length)];
document.body.style.backgroundImage=`url(img/${chosenImage})`;

