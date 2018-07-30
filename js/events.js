//define functions here

function getIt() {
  $('p').on('click', function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on('click', function() {
    alert('img!');
  });
}

function pressIt() {
  $('#typing').on('keydown', function() {
    if (event.which == 71) {
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


