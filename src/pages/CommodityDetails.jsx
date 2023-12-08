/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import commoditiesData from "../components/commodityData";
import { Flex, Image, Text, Container, Box, Button } from "@chakra-ui/react";
import Register from "./Authentication/FarmerAuth";
import Navigation from "../components/navbar/Navigation";
import { useAuth } from "../config/firebase";
import axios from "axios";

const CommodityDetails = () => {
  const currentUser = useAuth();
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState({});

  const createBid = async (farmerId, orderId) => {
    try {
      const url = 'https://ecedilink.onrender.com/bid';
      const data = {
        farmerId: farmerId,
        orderId: orderId
      };
      const response = await axios.post(url, data);
      console.log("the response",response.data); // Handle the response as needed
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleBidAuth = async () => {
    // if (!currentUser) {
    //   navigate("/register-as-farmer");
    //   return;
    // }
    //fund wallet
    //create Bid
     let status = await createBid("65731c2b290325ec2dee0605",id)
     console.log("status is", status)
    // Navigate to dashboard directly after authentication
    alert("created a bid successfully")
    navigate("/farmer-dashboard");
  };
  
  const { id } = useParams();
  
  const commodityOrders = async () => {
    try {
      let getData = await axios("https://ecedilink.onrender.com/orders");
      console.log(getData.data);
      const commodityType = getData.data.find(
        (commodityType) => commodityType._id === id
      );
      setOrderDetails(commodityType)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    commodityOrders();
  }, []);


  if (!orderDetails) {
    return <div>Program not found</div>;
  }
  return (
    <>
      <Navigation />
      <Container maxW={1300} mt={5}>
        <Flex gap={10}>
          <Box>
            <Image
              src="https://media.istockphoto.com/id/541989982/photo/bags-of-feed.jpg?s=612x612&w=0&k=20&c=VTZ3pgIv6eZZwHZUlVzKce5D_fHebOiYck4KXyT3tRA="
              borderRadius="lg"
              shadow="lg"
              width={400}
            />
          </Box>
          <Box position="relative">
            <Text fontWeight="bold">
              Commodity Name :{" "}
              <Text as="span" fontWeight="normal">
                {orderDetails.cropName}
              </Text>
            </Text>
            <Text fontWeight="bold">
              Commodity Description :{" "}
              <Text as="span" fontWeight="normal">
                {orderDetails.description}
              </Text>
            </Text>
            <Button
              type="button"
              colorScheme="green"
              px={10}
              position="absolute"
              bottom={0}
              onClick={handleBidAuth}
            >
              Bid
            </Button>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default CommodityDetails;
