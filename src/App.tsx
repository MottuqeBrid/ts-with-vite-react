import "./App.css";
import User from "./components/User/User";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
        <User
          name="Johan"
          email="john.doe@example.com"
          age={30}
          isRegistered={true}
        />
      </div>
    </>
  );
}

export default App;
