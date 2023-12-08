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
  Container as Contain,
  Image,
  SimpleGrid,
  Spacer,
  IconButton
} from "@chakra-ui/react";
import axios from "axios";
import { IconArrowNarrowRight, IconPencilPlus, IconShare, IconThumbUp } from '@tabler/icons-react';

export function ProductCard({ image, size, fit, name, location, quantity, deliveryTime }) {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          boxSize={size}
          src={image}
          objectFit={fit}
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Flex>
            <Text as='b' pr={1}>Crop Name:</Text>
            <Text fontSize='lg' m={0}>{name}</Text>
          </Flex>

          <Flex>
            <Text as='b' pr={1}>Delivery Location:</Text>
            <Text fontSize='lg' m={0}>{location}</Text>
          </Flex>

          <Flex>
            <Text as='b' pr={1}>Quantity:</Text>
            <Text fontSize='lg' m={0}>{quantity}</Text>
          </Flex>

          <Flex>
            <Text as='b' pr={1}>Delivery Timeframe:</Text>
            <Text fontSize='lg' m={0}>{deliveryTime}</Text>
          </Flex>
        </Stack>
      </CardBody>

      <CardFooter>
        <Flex>
          <ButtonGroup spacing={3} mr={20}>
            <IconButton aria-label='Like' icon={<IconThumbUp />} />

            <IconButton aria-label='Share' icon={<IconShare />} />
          </ButtonGroup>

          <Button rightIcon={<IconArrowNarrowRight />} colorScheme='blue.400'>
            Learn More
          </Button>
        </Flex>
      </CardFooter>
    </Card>
  );
};

const BuyerDashboard = () => {
  const currentUser = useAuth();
  const userName = currentUser && currentUser.displayName;
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const productsData = [
    {
      image: "/public/images/almond.jpg",
      // size: "200px",
      name: "Almond",
      location: "Kenya",
      quantity: "10 tons",
      deliveryTime: "04 Apr",
    },
    {
      image: "/public/images/cashew.jpg",
      // size: "220px",
      // objectFit:'cover',
      name: "Cashew",
      location: "Ghana",
      quantity: "80 tons",
      deliveryTime: "23 Jan",
    },
    {
      image: "/public/images/groundnut.jpg",
      name: "Groundnut",
      location: "Ghana",
      quantity: "20 tons",
      deliveryTime: "01 Jan",
    },
    {
      image: "/public/images/maize.jpg",
      name: "Maize",
      location: "Ghana",
      quantity: "50 tons",
      deliveryTime: "01 Jan",
    },
    {
      image: "/public/images/cocoa.jpg",
      name: "Cocoa",
      location: "Nigeria",
      quantity: "50 tons",
      deliveryTime: "22 Oct",
    },
  ];


  const products = productsData.map((product, index) => <ProductCard {...product} key={index} />);

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
          <Navbar.Brand as={Link} to="/buyer-dashboard">
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
                    colorScheme="green"
                    alignSelf="center"
                    me={5}
                    mt={2}
                  >
                    Welcome Buyer {userName}
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

      <Flex mt={10} mx={20}>

        <Button style={{marginLeft: "auto"}} leftIcon={<IconPencilPlus />} className="py-2" colorScheme='blue'>
          + Create Order
        </Button>
      </Flex>

      <Flex py="4%" px="4%" bg='white'>
        <SimpleGrid columns={4} spacing={10}>
          {products}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export default BuyerDashboard;
