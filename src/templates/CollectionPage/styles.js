import styled from '@emotion/styled'
import { Img } from '~/utils/styles'

export const CollectionImage = styled(Img)``

export const Banner = styled.div`
  & > * {
    width: 100%;
  }
  & > iframe {
    z-index: -9999;
    pointer-events: none;
  }
`
