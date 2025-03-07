import axios from "axios";

const ins = axios.create();
ins.interceptors.response.use(
  function (respond) {
    if(respond.data.code !== 0) {
      console.log(respond.data.msg)
      return null;
    }
    return respond.data.data
  }
)

export default ins