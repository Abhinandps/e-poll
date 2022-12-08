import './App.css';
import {Routes,Route,} from "react-router-dom"
import Home from './Routes/Home';
import AdminSignUp from './Routes/Home/Admin/SignUp/AdminSignUp';
import AdminSignIn from './Routes/Home/Admin/SignIn/AdminSignIn';
import VoterSignUp from './Routes/Home/Voter/SignUp/VoterSignUp';
import VoterSignIn from './Routes/Home/Voter/SignIn/VoterSignIn';
import SignInAndSignUp from './Routes/Home/SignInAndSignUp';



function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/admin'>
        <Route path='sign-up' element={<AdminSignUp/>} />
        <Route path='sign-in' element={<AdminSignIn/>} />
      </Route>
      <Route path='/voter'>
        <Route path='sign-up' element={<VoterSignUp/>} />
        <Route path='sign-in' element={<VoterSignIn/>} />
      </Route>
      <Route path='/sign-in' element={<SignInAndSignUp path='sign-in'/>} />
      <Route path='/sign-up' element={<SignInAndSignUp path='sign-up'/>} />
    </Routes>
  );
}


export default App;
