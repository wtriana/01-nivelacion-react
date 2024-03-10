import { useEffect, useState } from "react"

export const useFetchUser = () => {

    const [users, setUser] = useState([])

    const getUsers = async ()=> {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
      
        setUser(data)
    }
    
    useEffect(() => {
        getUsers();
    }, [])

    return { users }

}