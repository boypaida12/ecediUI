import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Divider,
  Box,
  Text,
  ButtonGroup,
  Button,
  Image,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import EscrowBid from "./EscrowBid";

const BuyerBid = () => {
  const posts = [
    {
      img: "https://media.istockphoto.com/id/541989982/photo/bags-of-feed.jpg?s=612x612&w=0&k=20&c=VTZ3pgIv6eZZwHZUlVzKce5D_fHebOiYck4KXyT3tRA=",
      content:
        "Crop Name: Maize   Delivery Location:  Kenya Quantity: 10 Tons      Delivery Timeframe: 01 Dec ",
    },
    {
      img: "https://media.istockphoto.com/id/541989982/photo/bags-of-feed.jpg?s=612x612&w=0&k=20&c=VTZ3pgIv6eZZwHZUlVzKce5D_fHebOiYck4KXyT3tRA=",
      content:
        "Crop Name: Maize   Delivery Location:  Kenya Quantity: 10 Tons      Delivery Timeframe: 01 Dec ",
    },
    {
      img: "https://media.istockphoto.com/id/541989982/photo/bags-of-feed.jpg?s=612x612&w=0&k=20&c=VTZ3pgIv6eZZwHZUlVzKce5D_fHebOiYck4KXyT3tRA=",
      content:
        "Crop Name: Maize   Delivery Location:  Kenya Quantity: 10 Tons      Delivery Timeframe: 01 Dec ",
    },
    {
      img: "https://media.istockphoto.com/id/541989982/photo/bags-of-feed.jpg?s=612x612&w=0&k=20&c=VTZ3pgIv6eZZwHZUlVzKce5D_fHebOiYck4KXyT3tRA=",
      content:
        "Crop Name: Maize   Delivery Location:  Kenya Quantity: 10 Tons      Delivery Timeframe: 01 Dec ",
    },
    {
      img: "https://media.istockphoto.com/id/541989982/photo/bags-of-feed.jpg?s=612x612&w=0&k=20&c=VTZ3pgIv6eZZwHZUlVzKce5D_fHebOiYck4KXyT3tRA=",
      content:
        "Crop Name: Maize   Delivery Location:  Kenya Quantity: 10 Tons      Delivery Timeframe: 01 Dec ",
    },
    {
      img: "https://media.istockphoto.com/id/541989982/photo/bags-of-feed.jpg?s=612x612&w=0&k=20&c=VTZ3pgIv6eZZwHZUlVzKce5D_fHebOiYck4KXyT3tRA=",
      content:
        "Crop Name: Maize   Delivery Location:  Kenya Quantity: 10 Tons      Delivery Timeframe: 01 Dec ",
    },
  ];

  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(400px, 1fr))"
    >
      {posts.map((post, index) => (
        <Card key={index} maxW="sm">
          <CardBody>
            <Image src={post.img} alt={post.title} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{post.title}</Heading>
              <Flex direction="column" align="flex-start">
                {post.content.split("\n").map((line, i) => (
                  <Text key={i}>
                    <span fontWeight="bold"> {line}</span>
                  </Text>
                ))}
              </Flex>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="">
                <EscrowBid />
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Decline
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default BuyerBid;
