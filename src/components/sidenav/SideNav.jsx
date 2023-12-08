import {
    Text,
    Button,
    Box,
    Flex,
    Divider,
  } from "@chakra-ui/react";
  import { FaUser,  FaCartArrowDown } from 'react-icons/fa';
  import { GiShop } from "react-icons/gi";
  import { LuUserCircle } from "react-icons/lu";
  import { ChevronRightIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";

export default function SideNav() {
    const menu = [
        {
            id:1,
            name:'Marketplace',
            active: true,
            icon: 'home'
        },
        {
            id:2,
            name:'Bids',
            icon: 'user'
        },
        {
            id:3,
            name:'Profile',
            icon: 'cog'
        }
    ]
  return (
    <Box h='90vh' w='250px' bg='white' padding='20px' color='#000' boxShadow='2px 0px 4px rgba(0, 0, 0, 0.1)'>
    <Flex flexDir='column'>
        <Divider />

        <Flex flexDir='column' justify='space-around' as={Link}>
            {menu.map((item, index) => (
                <Flex
                    key={index}
                    px='20px'
                    py='1'
                    _hover={{ bg: 'teal', color: 'white' }}
                    bg={item.active ? 'teal' : 'transparent'}
                    color={item.active ? 'white' : 'teal'}
                    borderRadius='md'
                    cursor='pointer'
                    alignItems='center'
                    mb='15px'
                >
                    {item.icon === 'home' && <GiShop size={20} />}
                    {item.icon === 'user' && <FaCartArrowDown size={20}/>}
                    {item.icon === 'cog' && <FaUser size={20} />}
                    <Text ml='3' mt='15px'>{item.name}</Text>
                </Flex>
            ))}
        </Flex>
        <Flex flexDir='column' alignItems='left' mt={10}>
            <Text textAlign='left'>Balance</Text>
            <Button mt='2'>500 ₵</Button>
        </Flex>
        
        <Divider mt={5}/>
        <Flex as={Link} flexDir='row' alignItems='left'  gap={2} justify='center' align='center'>
            <LuUserCircle size={20}/>
            <Text> Sign Out </Text>
            <ChevronRightIcon mt='5px'/>
        </Flex>
    </Flex>
</Box>

  
  )
}