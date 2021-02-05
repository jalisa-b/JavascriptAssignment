var cat = "Cat";
var train = "Train";
var hamburger = "Hamburger";
cat = cat.toLowerCase();
train = train.toLowerCase();
hamburger = hamburger.toLowerCase();

document.addEventListener("keydown", checkKeypress);

// checks if a letter pressed on the keyboard matches the
// first letter of an image
function checkKeypress(e) { 
  var letter = e.key;
  console.log(letter);
  letter = letter.toLowerCase();

  if (letter == cat.charAt(0)) {
    giveCatHeart();
  } else if (letter == train.charAt(0)) {
    giveTrainSmoke();
  } else if (letter == hamburger.charAt(0)) {
    giveHamburgerBite();
  }
}

// changes image of cat without heart to image of cat with heart
// then back to cat without heart
function giveCatHeart() {
  document.getElementById("catImage").src = "assets/catWithHeart.png";
  var catSound = document.getElementById("catSound");
  catSound.play();
  setTimeout("removeCatHeart()", 1100);
}

// changes image to cat without heart
function removeCatHeart() {
  document.getElementById("catImage").src = "assets/sittingCat.png";
}

// changes image of train without smoke to image of train with smoke
// then back to train without smoke
function giveTrainSmoke() {
  document.getElementById("trainImage").src = "assets/trainWithSmoke.png";
  var trainSound = document.getElementById("trainSound");
  trainSound.play();  
  setTimeout("removeTrainSmoke()", 1100);
}

// changes image to train without smoke
function removeTrainSmoke() {
  document.getElementById("trainImage").src = "assets/standardTrain.png";
}

// changes image of hamburger without bite to image of hamburger with bite
// then back to hamburger without bite
function giveHamburgerBite() {
  document.getElementById("hamburgerImage").src = "assets/bittenBurger.png";
  var biteSound = document.getElementById("biteSound");
  biteSound.play();
  setTimeout("removeHamburgerBite()", 600);
}

// changes image to hamburger without bite
function removeHamburgerBite() {
  document.getElementById("hamburgerImage").src = "assets/fullHamburger.png";
}
