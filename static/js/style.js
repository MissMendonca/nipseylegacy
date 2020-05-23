var index = 0;
var quote = '"'+'I hope my story inspires everyone out there to keep hustling and chasing their dreams.'+'"'; /* The text */
var speed = 70; /* The speed/duration of the effect in milliseconds */

(function typeWriter() {
  if (index < quote.length) {
    document.getElementById("index-text").innerHTML += quote.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
})();

