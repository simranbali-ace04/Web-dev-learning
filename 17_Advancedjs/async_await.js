function fetchUserData(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve({name: "chaicode" , url: "https://chaicode.com"})
        }, 3000);
    })
}

async function getUserData() {
    try {
        console.log("Fetching user data...");
        const userData = await fetchUserData();
        console.log("User Data: ", userData);
        
    } catch (error) {
        console.log("Error fetching data", error);
        
    }
}

getUserData();


/* Steps of execution flow:
getUserData() is called  
console of Fetching user data is printed
fetchUserData of await function is called 
Promise is returned immediately and timer is on 
await keyword is read
pauses the getUserData function , not the whole program
after 3 seconds timer , promise is resolved and stored in const userData
JS resumes the execution from the paused line in getUserData
The next line executes of UserData*/