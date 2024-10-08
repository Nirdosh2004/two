import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,DrawerCloseButton,Button, useDisclosure, Stack, VStack, HStack} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'

const Header = () => {

          const {isOpen,onOpen,onClose} = useDisclosure()

  return (
  <>
  <Button zIndex={'overlay'} pos={'fixed'} top={'4'} left={'4'} colorScheme='purple' p={'0'} w={'10'} h={'10'} borderRadius={'full'} onClick={onOpen} >
          <BiMenuAltLeft size={"20"}  />
  </Button>
  <Drawer isOpen={isOpen} placement='left' onClose={onClose} >
          <DrawerOverlay/>
          <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Nirdosh2004</DrawerHeader>
                    <DrawerBody>
                              <VStack alignItems={'flex-start'} >
                                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'} >
                                        <Link to={'/'}>Home</Link>
                                </Button>

                                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'} >
                                        <Link to={'/videos'}>Videos</Link>
                                </Button>

                                <Button onClick={onClose} variant={'ghost'} colorScheme={'purple'} >
                                        <Link to={'/videos?category=free'}>Not working</Link>
                                </Button>

                                <Button  onClick={onClose} variant={'ghost'} colorScheme={'purple'} >
                                        <Link to={'/upload'}>Also not working bro</Link>
                                </Button>
                              </VStack>
                              <HStack pos={'absolute'} bottom={'10'} left={'0'}  w={'full'} justifyContent={'space-evenly'} >
                                 <Button onClick={onClose} colorScheme={'facebook'} >
                                    <Link to={'/login'} >LogIn</Link>    
                                 </Button> 

                                 <Button  onClick={onClose} colorScheme={'facebook'} variant={'outline'} >
                                    <Link to={'/signup'} >SignUp</Link>    
                                 </Button>      
                              </HStack>
                    </DrawerBody>
          </DrawerContent>
  </Drawer>
  </>
  )
}

export default Header