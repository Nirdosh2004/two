import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
   <Container maxW={'container.xl'} h={'100vh'} p={'36'} mb={'20'}>
        <form>
          <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                <Heading alignSelf={'center'}>
                    Nirdosh2004
                </Heading>  
                <Avatar alignSelf={'center'} boxSize={'32'} />
                <Input focusBorderColor={'purple.500'} placeholder={'Name'} type={'name'}  required />
                <Input focusBorderColor={'purple.500'} placeholder={'Email'} type={'email'}  required />
                <Input focusBorderColor={'purple.500'} placeholder={'Password'} type={'password'} required />
               <Button colorScheme={'purple'}  type={'submit'}>Signup</Button>
               <Text textAlign={'right'}>Already have an account?{"  "}
                    <Button variant={'link'} colorScheme={'purple'}>
                     <Link to={'/login'}>Login</Link>
                    </Button>
               </Text>
               
          </VStack>
        </form>  
   </Container>
  )
}


export default Signup