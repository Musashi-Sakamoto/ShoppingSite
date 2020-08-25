import React, { useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'

const HoverCarousel = props => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const onMouseEnter = () => {
    if (props.hoverable) {
      setCurrentSlide(1)
    }
  }

  const onMouseLeave = () => {
    if (props.hoverable) {
      setCurrentSlide(0)
    }
  }

  const updateCurrentSlide = index => {
    if (currentSlide !== index) {
      setCurrentSlide(index)
    }
  }

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Carousel
        infiniteLoop
        swipeable
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        showArrows={false}
        selectedItem={currentSlide}
        onChange={updateCurrentSlide}
        {...props}
      >
        {props.children}
      </Carousel>
    </div>
  )
}

export default HoverCarousel
