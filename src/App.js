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
          gen:23

        },
        {
          name:"Alex",
          email :"alex@email.com",
          gen:23

        },
        {
          name:"Sally",
          email :"sally@email.com",
          gen:23

        },
        {
          name:"Mary",
          email :"mary@email.com",
          gen:23

        },

      
      ],
    };








  };


 handleAddUser=(newUser)=>{
  
  this.setState({
    users:[...this.state.users,newUser]
  })

 };






  render(){

    return (
      <div className ="App"> 
      <Container>
       <Row>
         <Col><UsersForm addUser={this.handleAddUser}/></Col>
         <Col><Users users={this.state.users}/></Col>
       </Row>
      </Container>
     </div>
    );
  
  }




  };
  
export default App;
