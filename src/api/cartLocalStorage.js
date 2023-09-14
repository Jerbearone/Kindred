
//add item to user cart
const addItemToCart = async (username, productId, quantity) => {
    //store items in local storage for now..
    const usersCart = await getUsersCart(username);
    //const newProduct = {id: productId, quantity: quantity}
    usersCart[productId] = {quantity: quantity}
    console.log(`Users new cart.. : ${usersCart}`)

    localStorage.setItem(username, JSON.stringify(usersCart))
    
}

const updateItemFromCart = async (username, productId, quantity) => {
    //store items in local storage for now..
    const usersCart = await getUsersCart(username);
    //const newProduct = {id: productId, quantity: quantity}
    usersCart[productId] = {quantity: quantity}
    console.log(`Updated Cart.. : ${usersCart}`)

    localStorage.setItem(username, JSON.stringify(usersCart))

}

const deleteItemFromCart = async(username, productId) => {
    const usersCart = await getUsersCart(username);
    delete usersCart[productId];
    console.log(`Deleted item.. Updated cart: ${usersCart}`)
    localStorage.setItem(username, JSON.stringify(usersCart))

}


//method to get users cart (does not need to be exported)
const getUsersCart = async(username) =>{
    const usersCart = localStorage.getItem(username);
    if (usersCart != null) {
        //convert contents of this back into an object
        let usersItems = JSON.parse(usersCart);
        return usersItems;
    } else {
        return {};

    }
   
}

//get item from user cart

const getItemsFromCart = async(username) => {
    const items = await getUsersCart(username);
    console.log(`Cart items: ${JSON.stringify(items)}`)
    return items;
}

export {addItemToCart, getItemsFromCart, updateItemFromCart, deleteItemFromCart}