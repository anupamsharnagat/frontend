import UsersList  from "../components/UsersList";

function Users()
{
    const User=[{
        id: 'u1',
        name: 'Anupam',
        image: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        places:3
    }]
    return <UsersList items={User}/>
}

export default Users;