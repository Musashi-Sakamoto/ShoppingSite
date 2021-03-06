import styled from '@emotion/styled'

import { breakpoints } from '~/utils/styles'

export const Grid = styled.div`
  padding: 60px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  @media (max-width: ${breakpoints.m}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${breakpoints.s}px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Pagination = styled.ul`
  margin: 0;
  list-style: none;
  text-align: center;
`

export const PaginationList = styled.li`
  display: inline-block;
`

export const PaginationButton = styled.button`
  border: none;
  width: 35px;
  height: 35px;
  outline: none;
  cursor: pointer;
  margin-right: 8px;
  background-color: white;
  border: ${props => (props.isCurrent ? 'none' : '2px solid black')};
  &:hover {
    color: ${props => (props.isCurrent ? 'black' : 'white')};
    background-color: ${props => (props.isCurrent ? 'white' : 'black')};
  }
`
export const EmptyText = styled.p`
  text-align: center;
  padding: 48px;
`
