/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { logout, useAuth } from "../config/firebase";
import {Text, Box, Flex, useToast} from '@chakra-ui/react'

const Dashboard = () => {
  const currentUser = useAuth();
  const userName = currentUser && currentUser.displayName;
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      setIsLoading(true);
      toast({
        description: "successfully logged-out",
        status: "success",
        duration: 4000,
        variant: "left-accent",
        colorScheme: "teal",
      });
      navigate({ pathname: "/" });
    } catch (error) {
      toast({
        description: error.message,
        status: "error",
        duration: 4000,
        variant: "left-accent",
      });
    }
  };


  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/">
            CreditLink
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
                {/* currentUser email shows here in nav */}
                {userName && (
                <Nav.Item className="ms-auto my-2 my-lg-0">
                  <Text fontWeight="bold" colorScheme="green" alignSelf="center">Logged in as: {userName}</Text>
                </Nav.Item>
              )}
              <Button onClick={handleLogout} variant="outline-danger" isLoading={isLoading}>Logout</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Flex minH="80vh" direction="column" justifyContent="center" alignItems="center">
        <Text as="h1">Dashboard Data goes here</Text>
      </Flex>
    </>
  );
};

export default Dashboard;
