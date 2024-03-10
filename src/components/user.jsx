import "./user.css"
import { useFetchUser } from "../hooks/useFetchusers"

const User = () => {

    const { users } = useFetchUser();
    
  return <>
  <h3>
    {/* <ul>
        { 
        users.map(item => (
            <li key={item.id}> {item.name} - {item.email}</li>
        ))}
    </ul> */}
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>email</th>
                <th>username</th>
                <th>phone</th>
                <th>webSide</th>
            </tr>
            </thead>
            <tbody>
                {users.map(user=>(
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.phone}</td>
                        <td><a href={user.website} target="_blank">{user.website}</a></td>
                    </tr>
                ))}
            </tbody>
       
    </table>

  </h3> 
  </>
}

export default User

