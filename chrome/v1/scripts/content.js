// web-accessible resources are granted scope of main website
// Access video element through initScript.js

s = document.createElement("script")
s.src = chrome.runtime.getURL("scripts/initScript.js") 
document.body.appendChild(s)

console.log("Attached initScript.js to document body")

p = document.createElement("script")
p.src = chrome.runtime.getURL("scripts/authSpotify/master.mjs") 
document.body.appendChild(p)

console.log("Attached master.js to document body")