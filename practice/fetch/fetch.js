const fetchAPI = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      console.log(res);
      return res;
    })
    .catch(e => {
      console.log(e);
      return e;
    });
};

console.log(fetchAPI());
