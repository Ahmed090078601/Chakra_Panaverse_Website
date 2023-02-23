"use client"
import {Link,Image, Avatar, AvatarGroup, Box, Button, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import React from 'react'

export default function TopContainer() {
  return (
 <Box 
 as="section"
 backgroundImage={"/images/background.webp"}
 backgroundSize="contain"
 py="20"
 mt="5"
 >
<HStack display={{lg:'flex', base:'grid'}}>
    {/* left side */}
    <Box pl="44" color="white" w="50%" >
<Heading fontSize={60}>Build your next idea even faster</Heading>
    <Text>
    One Year Panaverse DAO Earn as you Learn Program. Consolidating Web
            3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and
            Ambient Computing/IoT Technologies
    </Text>

    <Box mt="5">
        <Button colorScheme="blue" mr="5">Apply Now</Button>
        <Button colorScheme="blue" variant="outline">
            Earn More
        </Button>
    </Box>
    <Flex alignItems={"center"}>
        <AvatarGroup size="md" max={3} mt="5">
          <Avatar
          name="Zia Khan"
          src="https://pbs.twimg.com/profile_images/1478630664190795778/xuBHOC65_400x400.jpg"
          />  
          <Avatar
                name="Adil Altaf"
                src="https://avatars.githubusercontent.com/u/62209503?v=4"
              />
       
              <Avatar name="Christian Nwamba" src="https://avatars.githubusercontent.com/u/45433310?v=4" />
            
            <Avatar
                name="Prosper Otemuyiwa"
                src="https://bit.ly/prosper-baba"
              />
              </AvatarGroup>
 <Text mt="5" ml="3">
  By:{" "}
  <Link 
  color="blue.500"
  target={"_blank"}
 href="https://youtube.com/@owaisali124/"
 >
 Ahmed Abbas
  </Link>
 </Text>
              <Text mt="5" ml="3">
& created By:{" "}

<Link
color="blue.500"
target="_blank"
href={"https://github.com/"}
>
    PIAIC
</Link>
              </Text>

    </Flex>
    </Box>
<Box>

</Box>
<Box w="50%">
<Image src="/images/banner.png"/>
</Box>
</HStack>
 </Box>
  )
}
