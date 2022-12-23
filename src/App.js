import { Routes, Route } from "react-router-dom";
import Home from './Routes/Home';
import AdminSignUp from './Routes/Home/Admin/SignUp/AdminSignUp';
import AdminSignIn from './Routes/Home/Admin/SignIn/AdminSignIn';
import VoterSignUp from './Routes/Home/Voter/SignUp/VoterSignUp';
import VoterSignIn from './Routes/Home/Voter/SignIn/VoterSignIn';
import SignInAndSignUp from './Routes/Home/SignInAndSignUp';
import HomeLayout from './Routes/Home/Components/HomeLayout';
import Voter from './Routes/Voter';

import VoterLayout from "./Routes/Voter/VoterLayout";
import AdminLayout from "./Routes/Admin/AdminLayout";

import CreateElection from "./Routes/Admin/Election/CreateElection";
import Error from "./Routes/Home/Error/Error"
import History from "./Routes/Voter/History";
import Result from "./Routes/Voter/Result";


import Admin from "./Routes/Admin";
import ViewCandidates from "./Routes/Admin/ViewCandidates";
import Students from "./Routes/Admin/Students";
import Posts from "./Routes/Admin/Posts";
import Branches from "./Routes/Admin/Branches";
import AdminResult from "./Routes/Admin/AdminResult";




function App() {
  return (
    <Routes>
      <Route path='/' element={<HomeLayout />} >
        <Route index element={<Home />} />
        <Route path='/admin'>
          <Route path='sign-up' element={<AdminSignUp />} />
          <Route path='sign-in' element={<AdminSignIn />} />
        </Route>
        <Route path='/voter'>
          <Route path='sign-up' element={<VoterSignUp />} />
          <Route path='sign-in' element={<VoterSignIn />} />
        </Route>
        <Route path='/sign-in' element={<SignInAndSignUp path='sign-in' />} />
        <Route path='/sign-up' element={<SignInAndSignUp path='sign-up' />} />
      </Route>
      <Route path='/dashboard' element={<VoterLayout />}>
        <Route path='voter' >
         <Route path="dashboard" element={<Voter />} />
         <Route path="history" element={<History/>} />
         <Route path="result" element={<Result/>} />
        </Route>
      </Route>
      <Route path='/dashboard' element={<AdminLayout />}>
        <Route path='admin' >
          <Route path="dashboard" element={<Admin/>}/>
          <Route path='election' element={<CreateElection/>} />
          <Route path='view-candidates' element={<ViewCandidates/>} />
          <Route path='students' element={<Students/> }/>
          <Route path='posts' element={<Posts/> }/>
          <Route path='branches' element={<Branches/> }/>
          <Route path='result' element={<AdminResult/> }/>
        </Route>
      </Route>
      <Route path='*' element={<Error />}></Route>



    </Routes>
  );
}

export default App;
