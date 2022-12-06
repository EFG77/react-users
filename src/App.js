import {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Users from './Components/Users';
import UsersForm from './Components/UsersForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./App.css';

class App extends Component {
  constructor(props) {
    super(props);

    
    this.state= {
      users:[
        {
          name:"Ebenezer",
          email :"eben@email.com",
          gen:23,
          id:"mk44m"

        },
        {
          name:"Alex",
          email :"alex@email.com",
          gen:23,
          id:"h4mi8n4"

        },
        {
          name:"Sally",
          email :"sally@email.com",
          gen:23,
          id:"nk3kjbn"

        },
        {
          name:"Mary",
          email :"mary@email.com",
          gen:23,
          id:"nj34hz"

        },

      
      ],
    };

  };



 handleAddUser=(newUser)=>{
  newUser.id= Math.random().toString()
  this.setState({
    users:[...this.state.users,newUser]
  })

 };


 editUser=(id,replacementData)=>{
this.setState({
users: this.state.users.map((item)=>{
 if (item.id===id)
 {
  return replacementData;
 }else{
  return item;
 }
})
})
}




 deleteUser =(id) =>{
  let undeletedUsers=this.state.users.filter(user=>user.id !==id);

  this.setState({
    users:undeletedUsers
  })

 }

  render(){

    return (
      <div className ="App"> 
      <Container>
       <Row>
         <Col><UsersForm addUser={this.handleAddUser}/></Col>
         <Col><Users users={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser}/></Col>
       </Row>
      </Container>
     </div>
    );
  
  }

  };
  
export default App;
