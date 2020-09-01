import React from 'react'
import Slider from 'react-slick'
import { useStaticQuery, graphql } from 'gatsby'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import {
  MenuLink,
  BottomContainer,
  EachSlide,
  SlickContainer,
  BeforeArrow,
  NextArrow,
} from './styles'

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <NextArrow
      className={className}
      style={{ ...style, display: 'block', textShadow: '0 0 2px black' }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <BeforeArrow
      className={className}
      style={{ ...style, display: 'block', textShadow: '0 0 2px black' }}
      onClick={onClick}
    />
  )
}

const BottomNav = () => {
  const { allShopifyCollection } = useStaticQuery(
    graphql`
      query {
        allShopifyCollection(filter: { handle: { ne: "frontpage" } }) {
          nodes {
            title
            handle
          }
        }
      }
    `
  )
  const settings = {
    dots: false,
    infinite: true,
    variableWidth: true,
    speed: 500,
    swipe: false,
    pauseOnHover: true,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  return (
    <BottomContainer>
      <SlickContainer>
        <Slider {...settings}>
          {allShopifyCollection.nodes.map((node, i) => (
            <EachSlide key={i}>
              <MenuLink to={`/collections/${node.handle}/?page=1`}>
                {node.title}
              </MenuLink>
            </EachSlide>
          ))}
        </Slider>
      </SlickContainer>
    </BottomContainer>
  )
}

export default BottomNav
