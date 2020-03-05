// const promise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve('hello');
//   }, 3000);
// });

// promise.then(function(result) {
//   console.log(result);
// });

// const myFetchPromise = fetch('https://jsonplaceholder.typicode.com/users');
// myFetchPromise
//   .then(function(result) {
//     return result.json();
//   })
//   .then(function(newResult) {
//     console.log(newResult);
//   });

const myFetchPromise = fetch('https://jsonplaceholder.typicode.com/users');
myFetchPromise
  .then(function(result) {
    return result.json();
  })
  .then(function(newResult) {
    whatToDoWithUserArray(newResult);
  });

function whatToDoWithUserArray(users) {
  //   console.log(users, 'users');

  users.forEach(function loopFunction(item, index, array) {
    whatToDoWithASingleUser(item);
    // console.log(item);
  });
}

function whatToDoWithASingleUser(singleUser) {
  //   console.log(singleUser);
  const el = document.createElement('div');
  el.innerHTML = singleUser.username;
  document.body.appendChild(el);
}
