
import './App.css';
import { Fragment } from 'react';
import  ProfileList from './component/ProfileList';
import Address from "./component/Address"
import FullName from "./component/FullName"
import ProfilePhoto from "./component/ProfilePhoto"
import el from "./el.jpeg";

function App() {
  const profileList = [
    {
      id: 1,
      fullName: 'med amine',
      bio: 'fullstack ',
      profession: "web developer",
      Image: el
    },
  ];
  const alertDescription = desc => alert(`Descrtitio: ${desc}`);

  return (
    <Fragment>
    
    <ProfileList
      profileList={profileList}
      alertDescription={alertDescription}
    />
  </Fragment>
);
}

    <div className="App">
     
      <div class="card">
      <ProfilePhoto />
  <div class="card-body">
    <FullName />
    <Address />
    <a href="#!" class="btn btn-primary">Button</a>
  </div>
</div>
   
    </div>
  

export default App;