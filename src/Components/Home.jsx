import { Box, color, Container, Heading, Image, Img, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../Assets/1.jpg'
import img2 from "../Assets/2.jpg"
import img3 from "../Assets/3.jpg"
import img4 from "../Assets/4.jpg"
import img5 from "../Assets/5.png"
import { transform } from 'framer-motion'

const headingOptions = {
          pos:"absolute",
          left:'50%',
          top:'50%',
          transform:'translate(-50%,-50%)',
          textTransform:'uppercase',
          p:'4',
          size:'4xl'
}

const Home = () => {
  return (
    <Box>
      <MyCarousel/>
      <Container minH={'100vh'} maxW={'container.xl'} p={'16'} >
         <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'} >Services</Heading>
         <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']} >
          <Image src={img5} filter={'hue-rotate(-130deg)'} h={['40','400']} />
          <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} textAlign={'center'} >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias distinctio repellat odit libero nesciunt iusto, dolorem, soluta error at totam voluptatum quae sunt non aperiam debitis consequatur, natus nostrum earum!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, in amet perferendis quidem qui non magnam maiores voluptate nulla officiis, quo quis. Libero similique nemo dolorum laboriosam aspernatur consequuntur expedita?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, nihil doloremque quo eveniet adipisci excepturi dolor officia quisquam debitis voluptatem omnis sequi numquam iure alias error quae laudantium voluptates quam!
          </Text>
         </Stack>
      </Container>
    </Box>
  )
};

const MyCarousel = () => {
    return (
          <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false} showThumbs={false}>
        <Box w={'full'} h={'100vh'} >
          <Img src={img1} />
          <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >Watch the future</Heading>           
        </Box> 
        <Box w={'full'} h={'100vh'} >
          <Img src={img2} />
          <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} >Future is coding</Heading>           
        </Box>  
        <Box w={'full'} h={'100vh'} >
          <Img src={img3} />
          <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} >Gaming on console</Heading>           
        </Box> 
        <Box w={'full'} h={'100vh'} >
          <Img src={img4} />
          <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions} >Nightlife is </Heading>           
        </Box> 
    </Carousel>
    )
}

export default Home