import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Grid, Title, PageTitle } from './styles'
import { Img, StyledLink } from '~/utils/styles'

const CollectionGrid = ({ collections, pageTitle }) => {
  return (
    <Grid>
      <PageTitle>{pageTitle}</PageTitle>
      {collections.map(({ node: { id, fields, image, title } }) => {
        return (
          <StyledLink to={`/collections/${fields.slug}/?page=1`}>
            <Img
              fluid={image && image.localFile.childImageSharp.fluid}
              key={id}
              alt={title}
            />
            <Title>{title}</Title>
          </StyledLink>
        )
      })}
    </Grid>
  )
}

CollectionGrid.propTypes = {
  collections: PropTypes.array.isRequired,
  pageTitle: PropTypes.string.isRequired,
}

export default CollectionGrid
