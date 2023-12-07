/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  ButtonGroup,
  Flex,
  Box
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CommodityCard = ({ cropDescription, cropName, cropPrice, name, src }) => {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Box h={64}>
              <Image
                src={src}
                borderRadius="lg"
              />
          </Box>
          <Stack mt="6" spacing="3">
            <Heading size="md">{cropName} Order</Heading>
            <Text>{cropDescription}</Text>
            <Text color="green.800" fontSize="2xl">
              {cropPrice}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="green">
              Like
            </Button>
            <Button variant="ghost" colorScheme="green">
              Share
            </Button>
          </ButtonGroup>
          <Button
            variant="ghost"
            colorScheme="green"
            ms="auto"
            as={Link}
            to={`/learn-more/commodity-details/${name}`}
          >
            Learn More
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CommodityCard;
