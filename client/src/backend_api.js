let backendUrl;
const version = "v1";

if (window.location.hostname === "localhost") {
  backendUrl = `http://localhost:5000/${version}`;
} else {
  backendUrl = `${window.location.origin}/${version}`;
}

export const API_URL = backendUrl;
