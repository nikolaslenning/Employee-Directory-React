import React from 'react';

class Sort extends React.Component {
    state = {
      users: []
    };
  
    componentDidMount() {
      this.fetchUsers();
    }
  
    fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data)
        this.setState({ users: data });
      } catch (error) {
        console.log(error);
      }
    };
  
    render() {
      return (
        <>
          <h1>All Employees</h1>
  
          <ul>
            {this.state.users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </>
      );
    }
  };
export default Sort;