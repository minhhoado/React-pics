import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID Lze3lTmf_7Sf9Qeft14cD41SnvWmuFVMAt_b9SdkOzg",
  },
});
