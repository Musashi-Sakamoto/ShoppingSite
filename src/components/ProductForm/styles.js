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
  @media (max-width: ${breakpoints.m}px) {
    justify-content: center;
  }
`

export const Label = styled.p`
  font-weight: 600;
  font-size: 0.6rem;
  line-height: 1;
  margin-bottom: 8px;
  text-transform: uppercase;
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

export const VariantSection = styled.div`
  margin-top: 30px;
`

export const VariantSelect = styled.select`
  padding-left: 15px;
  border: 2px solid black;
  height: 50px;
  min-width: 128px;
  outline: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-border-radius: 0px;
  appearance: none;
  background: url(http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png)
    no-repeat 90% 50% white;
`

export const AddCartButton = styled.button`
  margin-top: 30px;
  width: 100%;
  background-color: white;
  border: 2px solid black;
  height: 50px;
  outline: none;
  font-weight: 600;
  font-size: 0.7rem;
`
