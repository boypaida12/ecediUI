/* eslint-disable react/prop-types */
import { Flex, Text } from "@chakra-ui/layout"


const  FarmerCard = ({title, number}) =>  {
  return (

    <Flex border='2px' align='left' flexDir='column' maxW={40} rounded={4} lineHeight={3} p={3}>
        <Text fontSize={15}>{title}</Text>
        <Text fontSize={30} fontWeight='bold'>{number}</Text>
    </Flex>
  )
}

export default FarmerCard