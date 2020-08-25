import styled from '@emotion/styled'
import { breakpoints } from '~/utils/styles'

export const PolicyDiv = styled.div`
  padding: 120px 0 150px;
  @media (max-width: ${breakpoints.m}px) {
    padding-top: 20px;
  }
`

export const Section = styled.div`
  margin-bottom: 48px;
`

export const Title = styled.p`
  font-size: 0.8rem;
`

export const Body = styled.p`
  font-size: 0.75rem;
`
