import styled from '@emotion/styled'
import { breakpoints } from '~/utils/styles'

export const Wrapper = styled.div`
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakpoints.m}px) {
    padding: 16px 0;
  }
`

export const ListWrapper = styled.div`
  & > div:last-child {
    border-bottom: 1px solid lightgrey;
  }
`

export const TitleInfo = styled.p`
  text-align: center;
  padding-bottom: 64px;
  font-size: 0.8rem;
  @media (max-width: ${breakpoints.m}px) {
    padding-bottom: 32px;
  }
`

export const SubTotal = styled.p`
  text-align: right;
  font-size: 0.8rem;
  padding-top: 64px;
`

export const Message = styled.p`
  text-align: right;
  font-size: 0.8rem;
  padding-top: 24px;
`

export const CheckoutButton = styled.button`
  border: none;
  outline: none;
  margin-top: 24px;
  background-color: black;
  color: white;
  padding: 0 16px;
  font-weight: 300;
  font-size: 0.8rem;
  height: 50px;
  align-self: flex-end;
  &:disabled {
    background-color: lightgrey;
    color: black;
  }
`

export const EmptyText = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 0.8rem;
`

export const EmptyButton = styled.button`
  border: solid 2px black;
  outline: none;
  margin: 24px auto;
  background-color: white;
  color: black;
  padding: 0 16px;
  font-size: 0.8rem;
  height: 50px;
  width: 200px;
  cursor: pointer;
`

export const CheckSection = styled.div`
  font-size: 0.8rem;
  padding-top: 24px;
  font-weight: 300;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
`

export const CheckSpan = styled.span`
  text-align: justify;
  @media (max-width: ${breakpoints.m}px) {
    width: 250px;
  }
`
