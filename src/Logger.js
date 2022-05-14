// Logger.js by WhaleWellWell. Free to use! Have fun

class Logger {
  constructor(message) {
    this.message = msg; // Shorthand for easier typing.

    let ErrorMsg = {
      "Fatal": "A FATAL error has occurred :( ",
      "Minor": "A Minor error has orrurred "
    }; 
  }

  throwFatal() {
    console.log(ErrorMsg.Fatal + msg);
    return msg;
  }
  
  throwMinor() {
    console.log(ErrorMsg.Minor + msg);
    return msg;
  }

  logMessage() {
    console.log(msg);
    return msg;
  }
}
