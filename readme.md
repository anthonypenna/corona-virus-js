# Corona Virus JS

Blazing fast library for sprinkling your web app with some top notch coughing. 👌😷🚀

Guaranteed to scare away friends, family and coworkers 💯.

## Installation

```sh
$ npm install corona-virus-js
```

## Usage

Be aware that the user must first have interacted with the DOM before being able to play audio.

```js
import CoronaVirus from "corona-virus-js/dist";

const scaryButton = document.querySelector("#my-scary-button");

scaryButton.addEventListener("click", () => {
  CoronaVirus.spread();
});
```
