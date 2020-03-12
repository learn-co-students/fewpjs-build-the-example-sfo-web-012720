let heartStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red" : "",
  "": "red"
};

let hearts = document.querySelectorAll('.like');

function likeCall (event) {
  let heart = event.target;
  mimicServerCall("derp")
  .then(function(serverMessage){
    heart.innerText = heartStates[heart.innerText];
    heart.style.color = colorStates[heart.style.color];
  })
  .catch(function(error) {
    alert("nooope!!!");
  });
}

for (let heart of hearts) {
  heart.addEventListener('click', likeCall);
}




//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
