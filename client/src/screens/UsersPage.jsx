import React, { useState, useEffect } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import axios from 'axios'
// import UsersDetails from "../components/UserDetails";

const UsersPage = () => {
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const {data} = await axios.get('/api/users')
      
      setUsers(data)
    }
    fetchUsers()
  }, [])

  const showTransactions = () => {
    let transactions = [];
    for (let i = 0; i < transactions.length; i++) {
      transactions.push();
    }
    return transactions;
  };
// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// const [email, setEmail] = useState("");
// const [currentBalance, setCurrentBalance] = useState("");
// const [transactions, setTransactions] = useState([]);

return (
  <>
      {users.map((user) => ( // mapping through json file until db is set up
        <Card className="my-3">
          <Card.Header>Account Information</Card.Header>
          <Card.Body
          // show={show}
          // onHide={handleClose}
          key={user._id}
          name={user.firstName + " " + user.lastName}
          email={user.email}
          currentBalance={user.currentBalance}
          transactions={user.transactions}>
            <Card.Title>
              <Link to={`/users/${user._id}`}>Users: {user.firstName + " " + user.lastName}</Link>
            </Card.Title>
            <Card.Title>Email: {user.email}</Card.Title>
          <Card.Text>Current Balance: ${user.currentBalance}</Card.Text>
          <Card.Text>Previous Transactions: </Card.Text>
          <Card.Body>
          <Card.Text>
          {showTransactions().map((transaction) => (
            <Card.List key={transaction}></Card.List>
            ))}
            </Card.Text>
            </Card.Body>
          </Card.Body>
          <Card.Footer className="text-muted text-center">
            {user.id}
          </Card.Footer>
        </Card>
      ))}
    </>
);
};

export default UsersPage;
