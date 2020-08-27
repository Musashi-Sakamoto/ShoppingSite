import React from 'react'
import { PolicyDiv, Body, Section } from './styles'

const Policy = ({ policies }) => {
  return (
    <PolicyDiv>
      {policies.map((policy, i) => (
        <Section key={i}>
          <Body dangerouslySetInnerHTML={{ __html: policy.body }} />
        </Section>
      ))}
    </PolicyDiv>
  )
}

export default Policy
