// seconds counter 

var seconds = 0;
var el = document.getElementById('seconds-counter');

function incrementSeconds() {
    seconds += 1;
    el.innerText = "I've been programming for " + seconds + " seconds.";
}

var cancel = setInterval(incrementSeconds, 1000);


// bakcground change

const btn = document.getElementById('darkmode');

    btn.addEventListener('click', function onClick(event) {
      const backgroundColor = document.body.style.backgroundColor;

      if (backgroundColor === 'white') {
        document.body.style.backgroundColor = 'gray';
      }
      else {
        document.body.style.backgroundColor = 'white';
      }

    });

