import { Box, color, Heading, Image, Img } from '@chakra-ui/react'
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
          <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions} >Future is coding</Heading>           
        </Box>  
    </Carousel>
    )
}

export default Home