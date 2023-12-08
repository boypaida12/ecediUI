/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import commoditiesData from "../components/commodityData";
import { Flex, Image, Text, Container, Box, Button } from "@chakra-ui/react";
import Register from "./Authentication/FarmerAuth";
import Navigation from "../components/navbar/Navigation";
import { useAuth } from "../config/firebase";

const CommodityDetails = () => {
  const currentUser = useAuth();
  const navigate = useNavigate();
  const handleBidAuth = () => {
    if (!currentUser) {
      navigate("/register-as-farmer");
      return;
    }
    // Navigate to dashboard directly after authentication
    navigate("/farmer-dashboard");
  };
  
  const { name } = useParams();
  const commodityType = commoditiesData.find(
    (commodityType) => commodityType.name === name
  );

  if (!commodityType) {
    return <div>Program not found</div>;
  }
  return (
    <>
      <Navigation />
      <Container maxW={1300} mt={5}>
        <Flex gap={10}>
          <Box>
            <Image
              src={commodityType.src}
              borderRadius="lg"
              shadow="lg"
              width={400}
            />
          </Box>
          <Box position="relative">
            <Text fontWeight="bold">
              Commodity Name :{" "}
              <Text as="span" fontWeight="normal">
                {commodityType.name}
              </Text>
            </Text>
            <Text fontWeight="bold">
              Commodity Description :{" "}
              <Text as="span" fontWeight="normal">
                {commodityType.description}
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
