import React from 'react';
import { Box } from '@mui/material';
import imageOne from "../../assets/imageOne.jpg";
import imageTwo  from "../../assets/imageTwo.jpg";
import imageThree from "../../assets/imageThree.jpg";
import imageFour  from "../../assets/imageFour.jpg";


const IndexPage = () => {
  return (
    <Box sx={{p: 5}}>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>

        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={imageOne} width="100%" height={650} alt="First slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={imageTwo} width="100%" height={650} alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={imageThree} width="100%" height={650} alt="Third slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={imageFour} width="100%" height={650} alt="Fourth slide"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </Box>
  )
}

export default IndexPage