import './App.css'
import CreateUserForm from "./components/newMember/NewMember.tsx";

function App() {

  return (
    <>
      <h1>Association manager</h1>
      <div className="card">
        <CreateUserForm></CreateUserForm>
      </div>
    </>
  )
}

export default App;
