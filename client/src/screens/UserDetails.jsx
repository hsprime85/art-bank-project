import React, { useState, useEffect } from "react";
import { Container, Card, Button, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom'
import axios from 'axios'

// import users from "../utils/users.json";

const UserDetails = ({match}) => {
  const [ user, setUser ] = useState({})

  useEffect(() => {
    const fetchUser = async () => {
      const {data} = await axios.get(`/api/users/${match.params.id}`)
      
      setUser(data)
    }
    fetchUser()
  }, [match])
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [currentBalance, setCurrentBalance] = useState();
  // const [show, setShow] = useState(false);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  
  // Loop through transactions to map
  const showTransactions = () => {
    let transactions = [];
    for (let i = 0; i < transactions.length; i++) {
      transactions.push();
    }
    return transactions;
  };



  return (
    <>
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
              Users: {user.firstName + " " + user.lastName}
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
    </>
  );
};

export default UserDetails;
