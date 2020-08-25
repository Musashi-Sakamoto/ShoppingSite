import React from 'react'
import { PolicyDiv, Title, Body, Section } from './styles'

const Policy = ({ policies }) => {
  return (
    <PolicyDiv>
      {policies.map((policy, i) => (
        <Section key={i}>
          <Title>{policy.title}:</Title>
          <br />
          <Body dangerouslySetInnerHTML={{ __html: policy.body }} />
        </Section>
      ))}
    </PolicyDiv>
  )
}

export default Policy
