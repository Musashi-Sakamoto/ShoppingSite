import styled from '@emotion/styled'
import { breakpoints } from '~/utils/styles'

export const ExtraInfo = styled.p`
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 1;
  margin: 30px 0;
`

export const PriceTag = styled.p`
  font-weight: 600;
  font-size: 0.8rem;
  line-height: 1;
  margin: 30px 0;
`

export const Quantity = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`

export const Label = styled.p`
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1;
  margin-bottom: 8px;
`
export const QuantityMinusButton = styled.button`
  outline: none;
  width: 48px;
  height: 57px;
  border: 2px solid black;
  border-right: none;
  background-color: white;
`
export const QuantityPlusButton = styled.button`
  outline: none;
  width: 48px;
  height: 57px;
  border: 2px solid black;
  border-left: none;
  background-color: white;
`
export const QuantityInput = styled.input`
  text-align: center;
  outline: none;
  border: 2px solid black;
  height: 50px;
  width: 50px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
