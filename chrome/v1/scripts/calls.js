let previousData
let currentID
let currentBPM
let accessToken

let redirectToAuthCodeFlow
let generateCodeVerifier
let generateCodeChallenge
let getAccessToken

const clientId = "0a14cada01a44c409906e474c1d00226";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

main()

export async function main(){
  await moduleLoading();

  console.log("now outside") 


if (!code) {
  redirectToAuthCodeFlow(clientId);
} 
else {
  await setAccessToken();
}

console.log("check ACCESS");
console.log(accessToken)

// Sends HTTP GET request every 5 seconds, checks if the song URI has changed
// setInterval(handleDataChange(await fetchProfile(accessToken)), 3000); // Fetch every 5 seconds (adjust as needed)

data = await fetchProfile(accessToken)
handleDataChange(data)

console.log("data")
document.addEventListener("songChange", async () =>{
    await getBPM(accessToken, currentID)
})

console.log ("rep")
}

////////////////////////////////////////////////////////////////////////////////

export async function setAccessToken(){
  accessToken = getAccessToken(clientId, code);
}

// Import accessToken function from authorizaton.js
export async function moduleLoading() {
   ({
    redirectToAuthCodeFlow,
    generateCodeVerifier,
    generateCodeChallenge,
    getAccessToken,
  } = await import('./authorization.js'));
}


// async function fetchProfile(token) {
//   const result = await fetch("https://api.spotify.com/v1/me", {
//       method: "GET", headers: { Authorization: `Bearer ${token}` }
//   });

//   return await result.json();
// }



export async function fetchProfile(token) {
    const result = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    console.log("before")

    // Grabs the song URI from the output JSON, splits and grabs song ID
    // example structure: "spotify:artist:songID"

    console.log(result.json())
    result = result.json().context.uri.split(":artist:")[1]

    console.log("after")
    console.log(result)

    return result;
}

// Sets currentID when songID changes
export function handleDataChange(data) {
    if (data && JSON.stringify(data) !== JSON.stringify(previousData)) {
      // Data has changed, do something with the updated data
      currentID = data
      console.log("Data has changed:", data);

        // Dispatch the custom event "songChange"
        const event = new Event("songChange");
        document.dispatchEvent(event);

      // Perform your actions or updates here
      // For example, you could update a UI component with the new data
      previousData = data;
    }
  }

// HTTP GET request for BPM given current ID
export async function getBPM(token, ID){
    var query_songID = "https://api.spotify.com/v1/audio-features/" + ID
    const result = await fetch(query_songID, {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    currentBPM = result.json().tempo

  }