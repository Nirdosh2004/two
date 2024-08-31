import { Box, Heading, HStack, Stack, VStack,Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'} >
       <Stack direction={['column','row']} >
          <VStack alignitems={'stretch'} w={'full'} px={'4'}>
             <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'}  >Hello world what subscribe</Heading>    
             <HStack borderBottom={'2px solid white'} py={'2'} >
                    <Input placeholder='Enter Emain here....' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
               <Button
                p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}
               >
                 <AiOutlineSend size={'20'} />
               </Button>      
             </HStack>   
          </VStack>

          <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']} >
            <Heading textAlign={'center'} textTransform={'uppercase'}>Nirdosh2004</Heading>
            <Text>@2024; All rights reserved</Text>
          </VStack>

          <VStack w={'full'} >
            <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
            <Button variant={'link'} colorScheme={'purple'}>
                    <a href="https://github.com/Nirdosh2004">Github</a>
            </Button>
            <Button variant={'link'} colorScheme={'purple'}>
                    <a href="https://leetcode.com/Nirdosh2004/">Leetcode</a>
            </Button>
            <Button variant={'link'} colorScheme={'purple'}>
                    <a href="https://calm-kitsune-ee5836.netlify.app/">Portfolio</a>
            </Button>
          </VStack>
          
       </Stack>   

    </Box>
  )
}

export default Footer