import {
    Heading,
    Text,
    Button,
    Box,
    Flex,
    Divider,
  } from "@chakra-ui/react";
  import { FaHome, FaUser, FaCog } from 'react-icons/fa';

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
    <Box h='100vh' w='250px' bg='white' padding='20px' color='#000' boxShadow='2px 0px 4px rgba(0, 0, 0, 0.1)'>
    <Flex flexDir='column' justify='space-between'>
        <Heading fontSize='2xl'>CREDIT LINK</Heading>
        <Divider />

        <Flex flexDir='column' justify='space-between'>
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
                    {item.icon === 'home' && <FaHome size={20} />}
                    {item.icon === 'user' && <FaUser size={20} />}
                    {item.icon === 'cog' && <FaCog size={20} />}
                    <Text ml='3' mt='15px'>{item.name}</Text>
                </Flex>
            ))}
        </Flex>
        <Flex flexDir='column' alignItems='left' mt='50px'>
            <Text>Balance</Text>
            <Button mt='2'>10,000 Ghs</Button>
        </Flex>
        <Flex flexDir='column' alignItems='left' mt='50px'>
            <FaUser size={20}/>
            <Text> Sign Out </Text>
        </Flex>
    </Flex>
</Box>

    
  )
}