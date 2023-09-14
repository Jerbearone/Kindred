const LOGGEDINUSER = "currentUser"
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

export {getCurrentUserName, addCurrentUser, deleteCurrentUser}