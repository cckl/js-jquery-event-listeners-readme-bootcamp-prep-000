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
      alert("You pressed G!");
    }
  });
}

function submitIt() {
  
}

$(document).ready(function(){

// call functions here

});


