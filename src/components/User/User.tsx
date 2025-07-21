type UserProps = {
  name: string;
  email: string;
  age: number;
};

const User = ({ user: { name, email, age } }: { user: UserProps }) => {
  return (
    <div className="w-full border rounded-xl p-4 mb-4">
      <h1 className="text-2xl font-bold mb-4">User</h1>
      <ol>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Age: {age}</li>
      </ol>
    </div>
  );
};

export default User;
