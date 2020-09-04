import styled from '@emotion/styled'
import { Form, Field } from 'formik'

import { breakpoints } from '~/utils/styles'

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 64px;
  margin: auto;
  @media (max-width: ${breakpoints.m}px) {
    padding-top: 32px;
  }
`
export const DropDownDiv = styled.div`
  cursor: pointer;
  outline: none;
`

export const FileName = styled.p`
  margin-bottom: 8px;
  font-size: 0.6rem;
  padding-left: 36px;
`

export const DropDownP = styled.p`
  margin-bottom: 16px;
  font-size: 0.8rem;
  text-align: center;
`

export const DropDownPHover = styled.p`
  margin-bottom: 16px;
  font-size: 0.8rem;
  text-align: center;
  color: lightgray;
`

export const FForm = styled(Form)`
  min-width: 600px;
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakpoints.m}px) {
    min-width: 300px;
  }
`

export const FErrorMessage = styled.span`
  color: crimson;
  font-size: 0.8rem;
`

export const FField = styled(Field)`
  margin-bottom: 24px;
  border: 1px solid black;
  border-radius: 2px;
`

export const FButton = styled.button`
  border-radius: 2px;
  border: 2px solid black;
  background-color: white;
  width: 200px;
  align-self: flex-end;
  cursor: pointer;
  @media (max-width: ${breakpoints.m}px) {
    width: auto;
    align-self: stretch;
  }
`
