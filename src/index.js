import request from 'request';


 function getUserName(userID) {
    return request('/users/' + userID).then(user => user.name);
  }
