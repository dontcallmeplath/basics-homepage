const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal_container");

open.addEventListener("click", function () {
  prompt("EMAIL PLEASE:  \n(this doesn't store anywhere lol)");
  modal.classList.add("show");
});

close.addEventListener("click", function () {
  modal.classList.remove("show");
});

function creditDue() {
  let permission = prompt("Do we agree on giving credit where it's due?");
  permission = permission.toLowerCase();
  permission = permission.trim();
  // permission = permission.replace("no", "yes");

  if (permission == "yes") {
    alert(
      "Credit™ \n😎Florin Pop's CodePen 'Pretty Modal' \n🤩Spotify User 'Megan Loveless' and their 'Best of Nashville' playlist \n😊Spotify User 'The Sounds of Spotify' and their 'The Sound of Nashville Indie' playlist \n🥰'Bee and Puppycat' created by artist, Natasha Allegri - gif via giphy \nc/o Frederator Studios aka Cartoon Hangover"
    );
  } else {
    alert("Interesting response 🤨🙄");
  }
}
let footerButton = document.getElementById("footer");
footerButton.addEventListener("click", creditDue);
