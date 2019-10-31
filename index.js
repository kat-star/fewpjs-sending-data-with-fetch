// Add your code here
function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    const newObject = object['id'];
    const newDiv = document.createElement('div');
    newDiv.innerHTML = newObject;
    document.body.appendChild(newDiv);
  })
  .catch(function(error) {
    const newError = document.createElement('div');
    newError.innerHTML = 'Unauthorized Access';
    document.body.appendChild(newError);
  });
}