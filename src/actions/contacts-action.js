import { ADD_CONTACT, DELETE_CONTACT, FETCH_CONTACTS, GET_CONTACT } from "../types/contants";



// 1. hit to the end point get the data 
// 2. on ce you get the data update the store (async)

export const  fetchContacts = () =>  async (dispatch) => {
    let URL ="http://localhost:4000/contacts";
    let resp = await fetch(URL); 
    let contacts = await resp.json();
    let action = {type:FETCH_CONTACTS, data:contacts};
    dispatch(action);
  }


export  const addContact = (contact) => async (dispatch)=> {
    let URL ="http://localhost:4000/contacts";
    let resp = await fetch(URL, {
        method:"POST", 
        body: JSON.stringify(contact), 
        headers: {
            'Content-Type':'application/json'
        }
    }); 

    let newConact = await resp.json(); 
    dispatch({type:ADD_CONTACT, data:newConact});
}

export const deleteContact =(id ) => async (dispatch)=> {
    let URL ="http://localhost:4000/contacts";
    await fetch(URL + id , {method:'DELETE'});
    dispatch({type:DELETE_CONTACT, data:id});
}

// write a function to get by id 
export const getContact =(id ) => async (dispatch)=> {
    let url1="http://localhost:4000/contacts/"
   let resp= await fetch(url1 + id , {method:'GET'});
    let data = await resp.json();
    dispatch({type:GET_CONTACT, data:data});
}

