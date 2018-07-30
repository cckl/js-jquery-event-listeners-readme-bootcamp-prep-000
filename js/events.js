//define functions here

function getIt() {
  $('p').on('click', function(){
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('load', function() {
    this.classList.add('.tasty');
  });
}

function pressIt() {
  $('form#typing').on('keydwn', function() {
    if (key.which === 71) {
      alert('You pressed G!');
    }
  });
}

function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  });
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});


