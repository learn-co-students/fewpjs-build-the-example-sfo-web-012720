// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function(){
  likeElement = document.getElementsByClassName('like')

  document.addEventListener('click', submitLike)
  
});

  const submitLike = (event) => {
    mimicServerCall()
    .then(resp => likePost(event))
    .catch(error => {
      const modal = document.getElementById('modal')
      const modalMessage = document.getElementById('modal-message')
      modalMessage.textContent = error
      modal.classList.remove("hidden")
      setTimeout(() => modal.classList.add("hidden"), 5000)      
    })
  }

  const likePost = event => {
    if (event.target.className == 'like'){
      event.target.classList.add("activated-heart")
      event.target.getElementsByClassName("like-glyph")[0].innerText = FULL_HEART
    } else if (event.target.className == 'like activated-heart'){
      event.target.classList.remove("activated-heart")
      event.target.getElementsByClassName("like-glyph")[0].innerText = EMPTY_HEART
    }
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
