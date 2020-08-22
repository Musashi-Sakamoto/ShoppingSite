import styled from '@emotion/styled'

export const Wrapper = styled.div`
  border-top: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

export const Img = styled.img`
  width: 150px;
  height: auto;
  margin-right: 8px;
`

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`

export const QuantityInput = styled.input`
  font-size: 0.8rem;
  text-align: center;
  outline: none;
  border: 2px solid black;
  height: 50px;
  width: 60px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const ProductTitle = styled.p`
  text-transform: uppercase;
  font-size: 0.8rem;
`

export const Size = styled.p`
  margin-top: 8px;
  color: lightgrey;
  font-size: 0.8rem;
`

export const Price = styled.p`
  font-size: 0.7rem;
`

export const RemoveButton = styled.button`
  outline: none;
  background-color: white;
  border: none;
  margin-left: 8px;
  cursor: pointer;
`
