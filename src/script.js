// variables
let numClicks = 0;
let isValentine = false;

// Select buttons
let yesBtn = document.getElementById("yesBtn");
let noBtn = document.getElementById("noBtn");
let noButtonSize = 16;
const imageFolder = 'images/'
const gifs = ["charliebrown1.gif", "charliebrown2.gif", "charliebrown3.gif", "charliebrown4.gif", "charliebrown0.gif"];
const phrases = [
  "Will you be my valentine?", 
  "Hold on there! What do you think you're doing?", 
  "Who do you think you are?", 
  "Awwwwww! Are you sure you want to risk losing me?"
];

// Function to update image and phrase
function updateContent() {
  let activeImage = imageFolder + gifs[Math.floor(Math.random() * gifs.length)];
  document.getElementById("image").src = activeImage;

  let activePhrase = phrases[Math.floor(Math.random() * phrases.length)];
  document.getElementById("phrase").innerHTML = activePhrase;
}

// Initial content setup
updateContent();

// Yes button click handler
const yesClickHandler = () => {
  numClicks++;
  isValentine = true;
  document.getElementById("phrase").innerHTML = "I knew you'd come around! Happy Valentine's Day!";
  noBtn.style.display = "none";
  yesBtn.style.display = "none";
};

// No button click handler
const noClickHandler = () => {
  numClicks++;
  if(noButtonSize === 2){
    noBtn.style.display = "none";
  }
  noButtonSize -= 2;
  
  updateContent();  // Update image and phrase
  yesBtn.classList.add("pulse");
  noBtn.style.fontSize = noButtonSize + "px";
};

// Add event listeners
yesBtn.addEventListener("click", yesClickHandler);
noBtn.addEventListener("click", noClickHandler);
