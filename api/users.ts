import axios from 'axios';

export class UsersApi {
  static url = 'http://localhost:3000/auth';

  static async login(payload) {
    const response = await axios.post(`${ UsersApi.url }/signin`, payload);

    const { data } = response;

    return data;
  }
}

export default UsersApi;