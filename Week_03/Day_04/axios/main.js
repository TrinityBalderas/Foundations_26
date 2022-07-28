// GET REQUEST
function getTodos() {
  // axios({
  //   method: "get",
  //   url: "https://jsonplaceholder.typicode.com/todos",
  // }).then( (todos) => {
  //   console.log(todos);
  // }).catch( (error) => {
  //   console.log(error);
  // })
  axios('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then((todos) => {
    console.log(todos.data);
    showOutput(todos)
  }).catch((error) => {
    console.log(error);
  })
}

// POST REQUEST
function addTodo() {
  axios.post("https://jsonplaceholder.typicode.com/todos", {
    title: "alex has to make me pizza",
    completed: false
  }).then( (response) => {
    console.log(response);
    showOutput(response)
  }).catch( (error) => {
    console.log(error);
  })
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios.put("https://jsonplaceholder.typicode.com/todos/199", {
    title: "updated",
    completed: true
  }).then( (response) => {
    console.log(response);
    showOutput(response)
  }).catch( (error) => {
    console.log(error);
  })
}

// DELETE REQUEST
function removeTodo() {
  axios.delete("https://jsonplaceholder.typicode.com/todos/199").then( (response) => {
    console.log(response);
    showOutput(response)
  }).catch( (error) => {
    console.log(error);
  })
}


// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Headers
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Config
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.config, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
