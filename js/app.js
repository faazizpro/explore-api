function CreateData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then (res => res.json())
    .then ( data => console.log(data));
}

function CreateData2(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json())
        .then(data => console.log(data));
}