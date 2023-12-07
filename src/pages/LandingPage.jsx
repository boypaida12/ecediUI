/* eslint-disable no-unused-vars */
import React from "react";
import CommodityCard from "../components/card/CommodityCard";
import commoditiesData from "../components/commodityData";
import { Flex } from "@chakra-ui/react";
import {Container} from 'react-bootstrap'

const LandingPage = () => {
  return (
    <>
      <Container>
          <Flex gap={5} mt={5}>
            {commoditiesData.map((commodities) => (
              <CommodityCard
                key={commodities.id}
                name={commodities.name}
                cropName={commodities.name}
                cropDescription={commodities.description}
              />
            ))}
          </Flex>
      </Container>
    </>
  );
};

export default LandingPage;
