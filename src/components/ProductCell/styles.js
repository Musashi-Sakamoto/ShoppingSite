import styled from '@emotion/styled'

export const Product = styled.div`
  position: relative;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`

export const Title = styled.span`
  margin-top: 24px;
  font-weight: 600;
  font-size: 0.6rem;
  text-align: center;
`

export const PriceTag = styled.span`
  font-weight: 600;
  font-size: 0.7rem;
  text-align: center;
  margin-top: 15px;
`

export const SoldOut = styled.span`
  position: absolute;
  font-size: 0.5rem;
  top: -10px;
  left: -10px;
`
