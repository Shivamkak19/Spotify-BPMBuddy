// (() => {

//     const base = document.createElement;
//     let spotifyPlaybackEl;
  
//     document.createElement = function (tagName) {
//       const element = base.apply(this, arguments);
//       if (tagName === 'video' || tagName === 'audio') {
//         spotifyPlaybackEl = element;
//         console.log(spotifyPlaybackEl)
  
//       }
//       return element;
//     };
//   })();

// https://developer.spotify.com/documentation/web-api/reference/get-several-audio-features

  const base = document.createElement;
  let spotifyPlaybackEl;

  document.createElement = function (tagName) {
    const element = base.apply(this, arguments);
    if (tagName === 'video' || tagName === 'audio') {
      spotifyPlaybackEl = element;
      console.log(spotifyPlaybackEl)

    }
    return element;
  };

  console.log("scooby doo hea")

  // this.footer;
// this.playBar;
// this.leftItem;
// this.tempoBox;



// ()=>{
//     const e = document.createElement;
//     let t = null;
//     document.createElement = function(s) {
//         const i = e.apply(this, arguments);
//         return "video" != s && "audio" != s || (t = i),
//         i
//     }
//     console.log("hi");
//     console.log(t);
// }

// // document.createElement = function (tagName) {
// //     const element = base.apply(this, arguments);
// //     if (tagName === 'video' || tagName === 'audio') {
// //       spotifyPlaybackEl = element;
// //     }
// //     return element;
// //   };

//   console.log("outside test");

// setTimeout(() =>{

//     console.log("check video element");
//     // console.log(spotifyPlaybackEl);

//     // chrome.scripting.insertCSS({
//     //     files: ["../service.css"],
//     //     target: { tabId: tab.id },
//     //     });

//     console.log("hit content.js");
//     this.footer = document.getElementsByTagName("footer")[0].firstElementChild;

//     this.playBar = this.footer.lastElementChild.firstElementChild;
//     this.leftItem = this.playBar.firstElementChild;

//     console.log(this.footer)
//     console.log(this.playBar);

//     this.tempoBox = document.createElement("div");
//     this.tempoBox.classList.add("tempoBox");
//     setTempoBox(this.tempoBox);
//     this.playBar.insertAdjacentElement('afterbegin', this.tempoBox);

//     //
//     this.tempoBox.firstElementChild.firstElementChild 
//     console.log(this.tempoBox);
//     console.log(this.playBar);
//     //

//     console.log(this.box1);
//     console.log("finished check");

//     this.shell.addEventListener("click",() =>{
//         console.log("clicked tempo box");
//         this.mainBox.classList.contains("invisible") ? this.mainBox.classList.remove("invisible") : this.mainBox.classList.add("invisible");
//     })



// }, 1000)

// function setTempoBox(element){
//     this.shell = document.createElement("div");
//     shell.classList.add("shell");

//     this.box1 = document.createElement("div");
//     this.mainBox = document.createElement("div");
//     this.box3 = document.createElement("div");

//     this.box1.classList.add("box1");
//     this.mainBox.classList.add("mainBox");
//     this.mainBox.classList.add("invisible");
//     this.box3.classList.add("box3");

//     setMainBox();

//     this.shell.appendChild(this.box1);
//     // this.shell.appendChild(this.mainBox);
//     this.shell.appendChild(this.box3);

//     //Adding content to each box:
//     this.box1.outerHTML += '<div class="svgBox"> <svg class="icon" role="img" height="16" width="16" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M407-325q23 23 66.5 21.5T537-336l216-339-335 219q-30 20-32 64t21 67Zm71-474q57 0 119 18.5T716-717l-52 37q-45-30-96.5-44.5T477.978-739q-140.472 0-239.225 100.215Q140-538.569 140-396.017 140-351 152.5-305q12.5 46 35.5 85h579q22-36 35-84t13-94q0-42-12.5-90.5T758-578l39-52q38 56 57 112.5T875-404q2 60-12 113t-41 98q-12 23-25.5 28t-33.5 5H192q-17 0-33.5-8.5T134-193q-26-48-40-97.5T80-396q0-83 31.5-156.5t85.5-128Q251-735 323.68-767T478-799Zm-9 331Z"/></svg> </div>';

//     element.appendChild(this.mainBox);
//     element.appendChild(this.shell);
// }

// function setMainBox(){


// this.bpmText = document.createElement("span");
// this.bpmText.classList.add("bpmText");

// this.inputNum = document.createElement("input");
// this.inputNum.classList.add("inputNum");

// this.inputSlide = document.createElement("input");
// this.inputSlide.classList.add("inputSlide");

// this.inputReset = document.createElement("input");
// this.inputReset.classList.add("inputReset");


// //////////////////

// this.formBPM = document.createElement("form");
// this.inputNum.type = "number";
// this.inputSlide.type = "range";
// this.inputReset.type = "reset";

// this.inputNum.value = 50;
// this.bpm = this.inputNum.value;
// this.inputNum.min = 0;
// this.inputNum.max = 300;
// this.inputNum.step = 1;

// this.inputSlide.min = 0;
// this.inputSlide.max = 300;
// this.inputSlide.step = 1;

// this.inputReset.value = "Reset BPM";

// this.inputNum.addEventListener("input", () =>{
//     this.bpm = this.inputNum.value;
//     this.inputSlide.value = this.bpm;
//     console.log(this.bpm);
// })

// this.inputSlide.addEventListener("input", () =>{
//     this.bpm = this.inputSlide.value;
//     this.inputNum.value = this.bpm;
//     console.log(this.bpm);
// })



// this.mainBox.appendChild(this.inputNum);
// this.mainBox.appendChild(this.inputSlide);
// this.mainBox.appendChild(this.inputReset);

// }



// (() => {

//   const base = document.createElement;
//   let spotifyPlaybackEl;

//   document.createElement = function (tagName) {
//     const element = base.apply(this, arguments);
//     if (tagName === 'video' || tagName === 'audio') {
//       spotifyPlaybackEl = element;
//       console.log(spotifyPlaybackEl)

//     }
//     return element;
//   };
// })();