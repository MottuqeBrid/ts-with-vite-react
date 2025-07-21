type UserProps = {
  name: string;
  email: string;
  age: number;
  isRegistered: boolean;
  language: string[];
};

const User = ({ name, email, age, isRegistered, language }: UserProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User</h1>
      <ol>
        <li>Name: {name}</li>
        <li>Email: {email}</li>
        <li>Age: {age}</li>
        <li>Registered: {isRegistered ? "Yes" : "No"}</li>
        <li>Languages: {language.join(", ")}</li>
      </ol>
    </div>
  );
};

export default User;
