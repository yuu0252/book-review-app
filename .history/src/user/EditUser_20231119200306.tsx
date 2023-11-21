import axios from "axios";

export const EditUser = () => {
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