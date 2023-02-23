'use client'
import { StarIcon} from '@chakra-ui/icons'
import { BiRocket } from "react-icons/bi";
import { RiMoonFoggyLine } from "react-icons/ri";
import { RxCode } from "react-icons/rx";

import { Box, Container, Flex, Heading, HStack, VStack, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

export default function features() {
  return (
    <Box py="50"  as="section"textAlign={"center"} >
    <Box textAlign="center" pt='5'>
        <Text color="blue.500" fontWeight="bold">Course Features</Text>
    <Heading fontWeight={"semibold"}>What you can expect?</Heading>
    <Text fontSize="20" py="3" px="10">
    This curriculum is intended for beginners who want to learn software development from the ground up. The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects. To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core onsite classes complemented by online Zoom laboratories and recorded videos.
    </Text>
    
    <Heading fontWeight={"15"}pt='5'px="10">Core Courses (Common in All Specializations):
Every participant of the program will start by completing the following three core courses:</Heading>
</Box>
    <Container maxW={1200} mt="10">
<Box>
    <SimpleGrid columns={2} spacing={10}>
        {/* feature1 */}
<Box>
    <HStack color="blue.500">
        <Box>
            <StarIcon w={10} h={10}/>
        </Box>
        <Box>
            <Heading fontSize={18}>
            
Quarter I (Core)
            </Heading>
            <Text>
            
CS-101: Object-Oriented Programming using TypeScript

            </Text>
        </Box>
    </HStack>
</Box>

{/* feature 2 */}

<Box>
    <HStack color="blue.500">
        
            <BiRocket size={50}/>
        
        <Box>
            <Heading fontSize={18}>
            Quarter II (Core)

            </Heading>
            <Text>
            
            W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform

            </Text>
        </Box>
    </HStack>
</Box>

{/* feature 3 */}

<Box>
    <HStack color="blue.500">
        
            <RiMoonFoggyLine size={50}/>
        
        <Box>
            <Heading fontSize={18}>
            Quarter III (Core)

            </Heading>
            <Text>
            
            $-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development

            </Text>
        </Box>
    </HStack>
</Box>

{/* feature 4 */}

<Box>
    <HStack color="blue.500">
        
            <RxCode size={50}/>
        
        <Box>
            <Heading fontSize={18}>
            Quarter IV

            </Heading>
            <Text>
            
            W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps

            </Text>
        </Box>
    </HStack>
</Box>



    </SimpleGrid>

    {/* feature 5 */}

<Box>
    <VStack color="blue.500" alignContent={"center"}>
        
            <StarIcon w={10} h={10} />
        
        <Box>
            <Heading fontSize={18}>
            Quarter V

            </Heading>
            <Text> 
            MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences
            </Text>
        </Box>
    </VStack>
</Box>
</Box>
</Container>
</Box>
  )
}
