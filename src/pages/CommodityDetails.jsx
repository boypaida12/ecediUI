/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import commoditiesData from "../components/commodityData";
import { Flex, Image, Text, Container, Box, Button } from "@chakra-ui/react";
import Register from "./Authentication/Register";

const CommodityDetails = () => {

  const navigate = useNavigate();
  const handleBidAuth = ()=> {
    navigate({to:'/register'})
    console.log("register page not showing")
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
      <Container maxW={1300} mt={5}>
        <Flex gap={10}>
          <Box>
            <Image
              src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Green double couch with wooden legs"
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
              <Button type="button" colorScheme="green" px={10} position="absolute" bottom={0} onClick={handleBidAuth}>Bid</Button>
          </Box>
        </Flex>
      </Container>
      <Register/>
    </>
  );
};

export default CommodityDetails;
