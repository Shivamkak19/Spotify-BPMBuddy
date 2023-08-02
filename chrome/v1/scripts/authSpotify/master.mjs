import { redirectToAuthCodeFlow } from "./redirect";
import { getAccessToken } from "./getToken";

const clientId = "your_client_id";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");

if (!code) {
    redirectToAuthCodeFlow(clientId);
} else {
    const accessToken = await getAccessToken(clientId, code);
    const BPM = await fetchBPM(accessToken);
    console.log(BPM)
}

async function fetchBPM(token) {
    const result = await fetch("'https://api.spotify.com/v1/audio-features?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B'", {
        method: "GET", headers: { Authorization: `Bearer ${token}` }
    });

    return await result.json();
}
