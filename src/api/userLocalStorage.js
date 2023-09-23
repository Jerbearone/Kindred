const LOGGEDINUSER = "currentUser"
const USERNAMELIST = "usernames"
//get username
const getCurrentUserName = async() => {
    return localStorage.getItem(LOGGEDINUSER);

}
//save current username
const addCurrentUser = async(username) => {
    localStorage.setItem(LOGGEDINUSER, username);
}

//delete current username
const deleteCurrentUser = async() => {
    localStorage.removeItem(LOGGEDINUSER);
}

//add a current users username and password to local storage
const registerUser = async(username, password) => {
     //store items in local storage for now..
     //console.log(`${username} : ${password}`);
     const user = {};
     user[USERNAMELIST] = {[`${username}`]: password};
     //console.log(JSON.stringify(user));
     localStorage.setItem(USERNAMELIST, JSON.stringify(user));
}

//check local storage user login if the DB doesn't have the user
const loginThroughLocalStorage = async(username, password) => {
    const users = localStorage.getItem(USERNAMELIST);
    const parsedUsers = await JSON.parse(users);
    const currentUsername = parsedUsers[USERNAMELIST];
    const currentPassword = currentUsername[username];
    if (currentPassword) {
        console.log("user exists");
        if (currentPassword == password) {
            return true
        } else {
            console.log('password is incorrect')
            return false;
        }
    } else {
        console.log("user does not exist");
        return false;
    }

}

export {getCurrentUserName, addCurrentUser, deleteCurrentUser, registerUser, loginThroughLocalStorage}