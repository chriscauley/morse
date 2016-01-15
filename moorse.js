"use strict";
class Sound {
  constructor(name,opts) {
    opts.repeat = opts.repeat ||6;
    this.ci = 0;
    elements = [];
    for (var i=0;i<opts.repeat;i++) {
      var e = document.createElement("audio");
      e.src = opts.name+"mp3";
    }
  }
}
new Sound();
