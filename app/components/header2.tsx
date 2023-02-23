"use client"
import { Box, Button, Flex, HStack, Image, Link, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import {SearchIcon, MoonIcon} from "@chakra-ui/icons"
export default function header2() {
  return (
    <Box pt={5} as="header">
        {/* left area */}
        <Flex justifyContent={"space-around"} alignItems={"center"}>
            <Box>
           <HStack>
            <Image src='Logo1.png' alt='logo'/>
            <List>
<HStack align={"center"} spacing={10} fontWeight="bold" ml="40px">
    
    <ListItem>Home</ListItem>
    <ListItem>About</ListItem>
    <ListItem>Contact</ListItem>
</HStack>
</List>
</HStack>
            </Box>
{/* right area */}
<Box>
    <Box pl="15" as="span">
        <SearchIcon w="25" h="25"/>
    </Box>
    <Box as="span" px="15">
<MoonIcon w="25" h="25"/>
    </Box>
    <Link href="http://piaic.org/" target={"_blank"}>
    <Button variant={"outline"}>Go to PIAIC</Button>
    </Link>
</Box>
        </Flex>
    </Box>
  )
}
