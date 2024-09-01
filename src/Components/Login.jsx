import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
   <Container maxW={'container.xl'} h={'100vh'} p={'36'} mb={'20'}>
        <form>
          <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                <Heading alignSelf={'center'}>
                    Welcome back!
                </Heading>  
                <Input focusBorderColor={'purple.500'} placeholder={'Email'} type={'email'}  required />
                <Input focusBorderColor={'purple.500'} placeholder={'Password'} type={'password'} required />
               <Button variant={'link'} alignSelf={'end'}>
                    <Link to={'/forgetpassword'}>Forget Password</Link>
               </Button>
               <Button colorScheme={'purple'}  type={'submit'}>Login</Button>
               <Text textAlign={'right'}>New user?{"  "}
                    <Button variant={'link'} colorScheme={'purple'}>
                     <Link to={'/signup'}>Signup</Link>
                    </Button>
               </Text>
               
          </VStack>
        </form>  
   </Container>
  )
}

export default Login