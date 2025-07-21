type UserProps = {
  name: string;
  email: string;
  age: number;
  isRegistered: boolean;
};

const User = ({ name, email, age, isRegistered }: UserProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User</h1>
      <ol>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Age: {age}</li>
        <li>Registered: {isRegistered ? "Yes" : "No"}</li>
      </ol>
    </div>
  );
};

export default User;
