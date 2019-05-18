import axios from "axios";

const setAuthToken = async authToken => {
  if (authToken) {
    axios.defaults.headers.common["x-auth-token"] = authToken;
  } else {
    await delete axios.defaults.headers.common["x-auth-token"];
  }
};

export default setAuthToken;
