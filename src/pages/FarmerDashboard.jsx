/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { logout, useAuth } from "../config/firebase";
import {
  Text,
  Box,
  Flex,
  useToast,
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  Heading,
  ButtonGroup,
} from "@chakra-ui/react";
import axios from "axios";
import SideNav from "../components/sidenav/SideNav";

const FarmerDashboard = () => {
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

  const [farmerDetails, setFarmerDetails] = useState([]);

  const farmer = async () => {
    try {
      let getData = await axios(
        "https://ecedilink.onrender.com/user"
      );
      console.log(getData.data);
      setFarmerDetails(getData.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    farmer();
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to="/farmer-dashboard">
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
                <Nav.Item className="ms-auto my-lg-0">
                  <Text
                    fontWeight="bold"
                    color="green"
                    alignSelf="center"
                    me={5}
                    mt={2}
                  >
                    Welcome Farmer <Text as="span" fontWeight="normal" color="black">{userName}</Text>
                  </Text>
                </Nav.Item>
              )}
              <Button
                onClick={handleLogout}
                variant="outline-danger"
                isLoading={isLoading}
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Flex
        minH="80vh"
      >
        <SideNav/>
      </Flex>
    </>
  );
};

export default FarmerDashboard;
