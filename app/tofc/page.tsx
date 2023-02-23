import React from 'react'
import{Box,Container,HStack,Heading,Text, Button} from "@chakra-ui/react";
export default function page() {
  return (
    <Box>
<Container maxW="1200" bg="blue.50" p="10">
<HStack>
<Box flex="3">
<Heading>
The Outcome for Participants of the Program
</Heading>
<Text>
The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.
</Text>
</Box>

<Box flex="1" alignSelf="flex-start">
<Button colorScheme="blue" float="right">
    View Components
</Button>
</Box>
</HStack>
</Container>
    </Box>
  )
}
