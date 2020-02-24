const coughAudio = require("./assets/cough.mp3");

const playerAttributes = {
  id: "covid-19"
};

const sourceAttributes = {
  src: coughAudio,
  type: "audio/mpeg"
};

const CoronaVirus = {
  __infect(target) {
    return new Promise(resolve => {
      if (document.getElementById(playerAttributes.id)) {
        return resolve();
      }
      const audioPlayer = document.createElement("audio");
      const source = document.createElement("source");
      for (const attribute in sourceAttributes) {
        source.setAttribute(attribute, sourceAttributes[attribute]);
      }
      audioPlayer.setAttribute("id", playerAttributes.id);
      audioPlayer.appendChild(source);
      document.querySelector(target).appendChild(audioPlayer);
      resolve();
    });
  },
  spread({ target }) {
    this.__infect(target).then(() => {
      const audioPlayer = document.getElementById(playerAttributes.id);
      audioPlayer.play();
    });
  }
};

export default CoronaVirus;
