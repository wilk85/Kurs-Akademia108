import React, {Component} from 'react';
import UserList from './UserList';
import UsersForm from './UserAddPanel';

class Users extends Component{

    constructor(props){
        super(props);
        this.state = {
            listOfUsers: []
        }
    }

    //1. w komponencie rodzica definiujemy metode z parametrem którą przekażemy do komponentu dziecka w propsach
    addUser = (userName) =>  {
        
        let newUser = {
            key: Date.now(),
            name: userName
        }

        this.setState(  (prevState) => {
            return({
                listOfUsers: prevState.listOfUsers.concat(newUser)
            })   
        });
    }

    removeUser = (key) => {
        // console.log(key);
        this.setState({
            listOfUsers: this.state.listOfUsers.filter(el => el.key !== key) 
        })
    }

    
    render(){
        return(
            <div>
                {/* 2. przekazujemy zdefiniowaną metodę w propsach komponentu dziecka */}
                <UsersForm addUser={this.addUser}/>
                <br />
                <UserList currentList={this.state.listOfUsers} listRemoveUser={this.removeUser}/>
            </div>
        )   
    }


}

export default Users;