"use client"
import { Box,CardFooter,Button,Link,Center,CardBody, Text,CardHeader,Heading,Card, Container,Flex } from '@chakra-ui/react'
import React from 'react'
import { IoIosSpeedometer } from "react-icons/io";
import { FaCommentDollar } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
export default function highlights() {
  return (
    <Box py="50" as="section">
        <Box textAlign="center">
 <Text color="blue.500" fontWeight="bold">
    Highlights
    </Text>   
<Heading fontWeight="semibold">Web 3 and Metaverse Specialization</Heading>        
<Text fontSize="20" py="3">
In this course you will learn how to develop Web 3.0 DApps, create a project, deploy it in production, write smart contracts, unit test them, and create user interfaces for them. We will also learn to develop ERC-20 and NFT tokens, DAOs, Oracles, etc.  Please note that in order to develop Web 3 applications you also need to build on top of Web 2.0 technologies which we have already covered in the previous quarters.
</Text>
        </Box>
<Container maxW="1200">
<Flex gap="5">
<Card align="center">
<CardHeader>
<Center color="blue.500">
<IoIosSpeedometer size="80"/>
</Center>
<Heading size="md" mt="5">
{" "}
Open Metaverse Web Development 
</Heading>
</CardHeader>
<CardBody>
<Text>
Open Metaverse Learning Repo 
</Text>
<Link href="https://github.com/panaverse/metaverse-web ">https://github.com/panaverse/metaverse-web </Link>
</CardBody>
<CardFooter>
<Button colorScheme="blue">View here</Button>
    </CardFooter>
</Card>

{/* card 2 */}

<Card align="center">
<CardHeader>
<Center color="blue.500">
<FaCommentDollar size="80"/>
</Center>
<Heading size="md" mt="5">
{" "}
Blender 3D asset Creation for the Metaverse (Remote Zoom Class) 
</Heading>
</CardHeader>
<CardBody>
<Text>
Blender development is being funded by heavyweights in the real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is expected to become the standard asset creation tool for metaverse.  
</Text>
<Link href="https://www.blender.org/download/">https://www.blender.org/download/ </Link>
</CardBody>
<CardFooter>
<Button colorScheme="blue">View here</Button>
    </CardFooter>
</Card>

{/* card 3 */}
<Card align="center">
<CardHeader>
<Center color="blue.500">
<BsFillGearFill size="80"/>
</Center>
<Heading size="md" mt="5">
{" "}
Introduction to Machine Learning, Data Science, and AI
</Heading>
</CardHeader>
<CardBody>
<Text>
Blender development is being funded by heavyweights in the real-time 3D (RT3D) space such as Apple, Unity, AMD, Intel, Meta, NVIDIA, AWS, Epic Games, Adobe, Microsoft, and Decentraland. It is expected to become the standard asset creation tool for metaverse.  
</Text>
<Link href="https://www.blender.org/download/">https://www.blender.org/download/ </Link>
</CardBody>
<CardFooter>
<Button colorScheme="blue">View here</Button>
    </CardFooter>
</Card>
</Flex>
</Container>

    </Box>
  )
}
