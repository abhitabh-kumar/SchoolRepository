import React from 'react'
import ComponentsHeading from '../componentsHeading/ComponentsHeading'
import Navigate from '../../materialUIComponents/navigation/Navigate'
import Footer from '../footer/Footer'
import './about.css'
import teacher from '../../assests/avtar.png'
import { mission, story, vision, whyWe } from '../../dummyData/about'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Box, Typography } from '@mui/material'

const AboutPage = () => {
  return (
    <>
      <ComponentsHeading prevPath={"Home "} path={" / About"} comColor="#ffffdd" content={"About Ourself"} />
      <div className="aboutUs">
        <Box class="container">
          <img src={teacher} alt="Image" class="image" />
          <FormatQuoteIcon sx={{ transform: "rotate(180deg)", marginRight: '5px' }} />
            Sushila Public School was founded as a heartfelt tribute to the loving memory of 
            <span style={{color:'red'}}>  Smt. Sushila Devi</span>, whose values, wisdom, and nurturing spirit continue to inspire generations. The school stands as a testament to her unwavering belief in the power of education and its ability to transform lives. Driven by the vision of providing quality education in an environment that fosters growth, curiosity, and compassion, Sushila Public School aims to honor her legacy by shaping young minds and instilling in them the values of perseverance, respect, and lifelong learning.
          <FormatQuoteIcon sx={{ marginLeft: '3px' }} />
        </Box>
        <Box>
          <p className='aboutHeader'>Story : <hr/></p>
          <p style={{ textAlign: "justify",}}>{story}</p>
        </Box>
        <Box>
          <p className='aboutHeader'>Vision :<hr/></p>
          <p style={{ textAlign: "justify" }}>{vision}</p>
        </Box>
        <Box>
          <p className='aboutHeader'>Why Choose Us? : <hr/></p>
          <p style={{ textAlign: "justify" }}>{whyWe}</p>
        </Box>
      </div>
    </>
  )
}

export default AboutPage