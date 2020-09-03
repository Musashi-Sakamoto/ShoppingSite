import React from 'react'
import PropTypes from 'prop-types'

import { Grid, Title, PageTitle, Link } from './styles'
import { Img } from '~/utils/styles'

const CollectionGrid = ({ collections, pageTitle }) => {
  return (
    <Grid>
      <PageTitle>{pageTitle}</PageTitle>
      {collections.map(({ node: { id, fields, image, title } }) => {
        return (
          <Link to={`/collections/${fields.slug}/?page=1`}>
            <Img
              fluid={image && image.localFile.childImageSharp.fluid}
              key={id}
              alt={title}
            />
            <Title>{title}</Title>
          </Link>
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
