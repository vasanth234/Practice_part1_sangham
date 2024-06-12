{/*this is for localstorage storing the data*/}

/*import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  // State to store our value
  const [valueInput, setValueInput] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // Setter function
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(valueInput) : value;
      // Save to the state
      setValueInput(valueToStore);
      // Save to the local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [valueInput, setValue];
}

export default useLocalStorage;*/

{/*this is the code for email and password storing in the localstorage*/}
/*import {useState,useEffect} from 'react'
function useLocalStorageemailpassword(){
const[email,setEmail]=useState(()=>{
  try{
     const dui=window.localStorage.getItem('useData');
     return dui ? dui.email :''
  }
  catch(error){
    console.log(error);
    return '';
  }
})

const [password,setPassword]=useState(()=>{
  try{
    const drefe=window.localStorage.getItem('useData');
    return drefe ? drefe.password :''
 }
 catch(error){
   console.log(error);
   return '';
 }
})


const setList=(newEmail,newPassword)=>{
      try{
        const newData= {email:newEmail,password:newPassword}
        setEmail(email);
        setPassword(newPassword);
        window.localStorage.setItem('userData',JSON.stringify(newData));
      }
      catch(error){
        console.log(error)
      }
    
}
return [email,password,setList];
}*/

{/*scroll indicator*/}







