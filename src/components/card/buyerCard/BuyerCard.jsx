import React from "react";
import SideBar from "../../sideBar/SideBar";
import "./buyerCard.css";
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
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BuyerCard = ({ cropDescription, cropName, cropPrice, name, src }) => {
  return (
    <>
      {/* <SideBar /> */}
      <section id="buyerCard">
        <div className="container buyerCardContainer ">
          <article className="cardItems ">
            <div className="cardItemsImage">
              <img src="" alt="Project" />
            </div>
            <div className="">
              <h3>
                Crop Name: Maize{" "}
                <span>Delivery Location: Kenya Delivery Timeframe: 01 Dec</span>
              </h3>
            </div>
            <div className=" Cta">
              <button className="btn">L</button>
              <button className="btn">S</button>

              <button className="btn">Learn More</button>
            </div>
          </article>

          <article className="cardItems ">
            <div className="cardItemsImage">
              <img src="" alt="Project" />
            </div>
            <div className="">
              <h3>
                Crop Name: Maize{" "}
                <span>Delivery Location: Kenya Delivery Timeframe: 01 Dec</span>
              </h3>
            </div>
            <div className="cardItems Cta">
              <a href="" className="btn btn-primary" target="_blank">
                Live
              </a>
              <a href="" className="btn" target="_blank">
                Source
              </a>
            </div>
          </article>

          <article className="cardItems ">
            <div className="cardItemsImage">
              <img src="" alt="Project" />
            </div>
            <div className="">
              <h3>
                Crop Name: Maize{" "}
                <span>Delivery Location: Kenya Delivery Timeframe: 01 Dec</span>
              </h3>
              <p>
                <button>L</button>
                <button>S</button>
                <button>Learn More</button>
              </p>
            </div>
            <div className="cardItems Cta">
              <a href="" className="btn btn-primary" target="_blank">
                Live
              </a>
              <a href="" className="btn" target="_blank">
                Source
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Hey Ben, i am trying to use chacra here but I am not sure if I will */}

      <Card maxW="sm">
        <CardBody>
          <Box h={64}>
            <Image src={src} borderRadius="lg" />
          </Box>
          <Stack mt="6" spacing="3">
            <Heading size="md"> Crop Name: Maize </Heading>
            <Text>Delivery Location: Kenya Delivery Timeframe: 01 Dec</Text>
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

export default BuyerCard;
