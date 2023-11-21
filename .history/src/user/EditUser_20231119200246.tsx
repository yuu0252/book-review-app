import axios from "axios";

export const EditUser = () => {
    const URL: string = "https://railway.bookreview.techtrain.dev";
    axios
      .get(`${URL}/users`, {
        headers: {
          authorization:
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };