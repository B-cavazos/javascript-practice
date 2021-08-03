fetch("http://c0b23c3ae165.ngrok.io/facts")
.then((res)=> {return res.json();})
.then((fact)=>{
    fact.forEach(f=>console.log(f.text))
});

//sending data into an api
 const BASE_URL = "http://c0b23c3ae165.ngrok.io";
 const REGISTER_ENDPOINT = "/register";
 const LOGIN_ENDPOINT = "/login"
 
//post function
function post(endpoint, data){
    fetch(BASE_URL + endpoint, 
        {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            }
        }).then( res =>{
            return res.json();
        })    
}

//using post() to register
post(REGISTER_ENDPOINT, {hello: true}) 
.then(function (data) {
        console.log(data);
});

//using post() to log in
post(LOGIN_ENDPOINT,{username:'b', password:'password'}) //post(endpoint, keyValue:BeingPushed)
.then(console.log(data));


//IN-CLASS PROJECT