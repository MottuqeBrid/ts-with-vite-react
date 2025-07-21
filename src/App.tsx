import "./App.css";
// import User from "./components/User/User";
import UserDemo from "./components/User/UserDemo";

// const user1 = {
//   name: "Johan",
//   email: "johan@example.com",
//   age: 30,
// };
// const user2 = {
//   name: "Jane",
//   email: "jane@example.com",
//   age: 25,
// };
// const user3 = {
//   name: "Johan",
//   email: "johan@example.com",
//   age: 30,
// };

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    age: 28,
    isRegistered: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    age: 32,
    isRegistered: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 24,
    isRegistered: true,
  },
];
function App() {
  return (
    <>
      <div className="mt-10 mx-auto px-4 min-w-screen">
        <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
        {/* <User user={user1} />
        <User user={user2} />
        <User user={user3} /> */}
        <UserDemo users={users} />
      </div>
    </>
  );
}

export default App;
