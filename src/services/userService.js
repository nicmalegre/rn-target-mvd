import httpClient from 'httpClient';

class UserService {
  login(user) {
    return httpClient.post('/users/sign_in', user);
  }

  logout() {
    return httpClient.delete('/users/sign_out', { data: {} });
  }

  signUp(user) {
    return httpClient.post('/users', user);
  }

  updateUser(user) {
    return httpClient.put('/users/id', user);
  }
}

export default new UserService();
