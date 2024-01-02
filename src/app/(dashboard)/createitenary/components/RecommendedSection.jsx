'use client';
import React from 'react'
import { IconButton, Stack, Typography, useTheme } from '@mui/material'
import SuggestionCard from './SuggestionCard';
import Carousel from '@/components/carousel';
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";

const RecommendedSection = ({recommendations, onAddRecommendation}) => {
    const carouselRef = React.useRef(null);
    const theme = useTheme();
    
    const handlePrev = () => {
        carouselRef.current?.slickPrev();
      };
    
    const handleNext = () => {
        carouselRef.current?.slickNext();
    };

    const carouselSettings = {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        rtl: false,
        lazyLoad: true,
        variableWidth: true,
        infinite: true,
        responsive: [
          {
            breakpoint: theme.breakpoints.values.md,
            settings: { slidesToShow: 2 },
          },
          {
            breakpoint: theme.breakpoints.values.sm,
            settings: { slidesToShow: 1 },
          },
        ],
      };

  return (
    <>
    <Stack direction="row" justifyContent="space-between" sx={{ mt: 3, mb: 5 }}>
        <Typography variant="subtitle2" sx={{color: (theme)=> theme.palette.grey[400]}}>
        Recommended Places
        </Typography>
        <Stack direction='row' justifyContent={'center'}>
          <IconButton onClick={handlePrev}>
            <FaAngleLeft size={10} />
          </IconButton>
          <IconButton onClick={handleNext}>
            <FaAngleRight size={10} />
          </IconButton>
        </Stack>
      </Stack>

    <Carousel ref={carouselRef} {...carouselSettings} 
    whileHover="hover"
    sx={{ px: 1 }}
    >
    {
        recommendations?.map(item => <SuggestionCard key={item.id} recommendation={item} onAddRecommendation={onAddRecommendation} />)
      }
    </Carousel>
    </>
  )
}

export default RecommendedSection