import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import {
  VideoDiv,
  Container,
  Item,
  FlexContainer,
  Image,
  Label,
} from './styles'
import { useMediaQuery } from 'react-responsive'
import { breakpoints } from '../../utils/styles'

const VideoNav = () => {
  const isSmall = useMediaQuery({ query: `(max-width: ${breakpoints.m}px)` })
  const { allShopifyCollection } = useStaticQuery(
    graphql`
      query {
        allShopifyCollection(filter: { image: { id: { regex: "/^.+/" } } }) {
          edges {
            node {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 910) {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
              fields {
                slug
              }
              title
            }
          }
        }
      }
    `
  )
  const edges = allShopifyCollection.edges

  return (
    <Container>
      <FlexContainer>
        <Item>
          <Link to={`/collections/${edges[0].node.fields.slug}/?page=1`}>
            <Image
              fluid={edges[0].node.image.localFile.childImageSharp.fluid}
              alt={edges[0].node.title}
            />
            <Label>{edges[0].node.title}</Label>
          </Link>
        </Item>
        <Item>
          <Link to={`/collections/${edges[1].node.fields.slug}/?page=1`}>
            <Image
              fluid={edges[1].node.image.localFile.childImageSharp.fluid}
              alt={edges[1].node.title}
            />
            <Label>{edges[1].node.title}</Label>
          </Link>
        </Item>
      </FlexContainer>
      <FlexContainer>
        <Item>
          <Link to={`/collections/${edges[2].node.fields.slug}/?page=1`}>
            <Image
              fluid={edges[2].node.image.localFile.childImageSharp.fluid}
              alt={edges[2].node.title}
            />
            <Label>{edges[2].node.title}</Label>
          </Link>
        </Item>
        <Item>
          <Link to={`/collections/${edges[3].node.fields.slug}/?page=1`}>
            <Image
              fluid={edges[3].node.image.localFile.childImageSharp.fluid}
              alt={edges[3].node.title}
            />
            <Label>{edges[3].node.title}</Label>
          </Link>
        </Item>
        <Item>
          <Link to={`/collections/${edges[4].node.fields.slug}/?page=1`}>
            <Image
              fluid={edges[4].node.image.localFile.childImageSharp.fluid}
              alt={edges[4].node.title}
            />
            <Label>{edges[4].node.title}</Label>
          </Link>
        </Item>
      </FlexContainer>
      {!isSmall && (
        <VideoDiv>
          <iframe
            title="front page"
            width="100%"
            height="100%"
            src="https://player.vimeo.com/video/453346847?autoplay=1&loop=1&title=0&byline=0&portrait=0&muted=1"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
          ></iframe>
        </VideoDiv>
      )}
    </Container>
  )
}

export default VideoNav
