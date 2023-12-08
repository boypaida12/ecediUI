/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import CommodityCard from "../components/card/CommodityCard";
import { Flex, Spinner, Box, Text } from "@chakra-ui/react";
import { Container } from "react-bootstrap";
import Navigation from "../components/navbar/Navigation";
import axios from "axios";

const LandingPage = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const commodityOrders = async () => {
    try {
      let getData = await axios("https://ecedilink.onrender.com/orders");
      console.log(getData.data);
      setOrders(getData.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    commodityOrders();
  }, []);

  return (
    <>
      <Navigation />
      <Container>
        {isLoading ? (
          // Display a loading spinner while fetching data
          <Flex justify="center" align="center" mt={5}>
            <Spinner size="xl" />
          </Flex>
        ) : (
          <Flex gap={5} mt={5} flexWrap="wrap">
            {orders.map((order) => (
              <CommodityCard
                key={order._id} // Use `_id` as the unique key
                cropName={order.cropName}
                cropDescription={order.description}
                id={order._id}
                // Add other properties from the order as needed
              />
            ))}
            {orders.length === 0 && ( // Show a message if there are no orders
              <Box textAlign="center" mt={5} w="100%">
                <Text>No orders available</Text>
              </Box>
            )}
          </Flex>
        )}
      </Container>
    </>
  );
};

export default LandingPage;
