
(function (window) {
var byeSpeaker = {};

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
var speakWord = "Good Bye";

// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
byeSpeaker.speak=function(name) {
  console.log(speakWord + " " + name);
}

window.byeSpeaker=byeSpeaker;

})(window);
