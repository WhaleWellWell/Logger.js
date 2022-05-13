// Logger.js by WhaleWellWell. Free to use! Have fun!

let Errors = {
  "Fatal": "A FATAL error has occurred :( ",
  "Minor": "A Minor error has orrurred "
};

function throwFatal(message) {
  console.log(Errors.Fatal + message);
  return message;
}

function throwMinor(message) {
  console.log(Errors.Minor + message);
  return message;
}

function logMessage(message) {
  console.log(message);
  return message;
}