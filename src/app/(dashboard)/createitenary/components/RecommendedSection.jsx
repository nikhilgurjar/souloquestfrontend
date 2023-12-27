'use client';
import React from 'react'
import { Stack, Typography, useTheme } from '@mui/material'
import SuggestionCard from './SuggestionCard';
import Carousel from '@/components/carousel';
import CarouselArrows from '@/components/carousel';
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
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        rtl: false,
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
        <CarouselArrows spacing={2} onNext={handleNext} onPrev={handlePrev} />
      </Stack>

    <Carousel ref={carouselRef} {...carouselSettings}>
    {
        recommendations?.map(item => <SuggestionCard key={item.id} recommendation={item} onAddRecommendation={onAddRecommendation} />)
      }
    </Carousel>
    </>
  )
}

export default RecommendedSection