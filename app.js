//Enter your code here..
const button = document.querySelector('#btnGet');
const message = document.querySelector('#message');

button.onclick = function() {
    const promise = new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.open("GET", 'https://jsonplaceholder.typicode.com/users');
        request.onload = () => {
            if (request.status === 200) {
                console.log("request:",request)
                resolve(request.response);
                //console.log("request.response:",request.response);
            }
            else{
                reject(Error(request.statusText));
            }
        }
        request.send();
    })
    promise.then((data) =>{
        let player
        console.log("promise executed");
        console.log("data:",JSON.parse(data))
        const result = JSON.parse(data);
        result.forEach(user => {
             player = player + `
             <div class="border">
            <div class="strength">Name : ${user.name}</div>
            <div>Email   : ${user.email}</div>
            <div>Phone   : ${user.phone}</div>
            <div>Website : ${user.website}</div>
            <div>Company : ${user.company.name}</div>
            <div>City    : ${user.address.city}</div>
            <div>Zipcode : ${user.address.zipcode}</div>
            </div>
            `
           
        })
        //console.log(player)
        message.innerHTML = player;
        
    },
    (error) => {
        console.log("message rejected");
        console.log(error.message)
    })
}