type UserDemoProps = {
  id: number;
  name: string;
  email: string;
  age: number;
  isRegistered: boolean;
}[];
const UserDemo = ({ users }: { users: UserDemoProps }) => {
  console.log(users);
  return (
    <div>
      <h1>User Demo</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.age} -{" "}
            {user.isRegistered ? "Registered" : "Not Registered"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDemo;
