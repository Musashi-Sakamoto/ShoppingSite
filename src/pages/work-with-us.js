import React from 'react'
import SEO from '~/components/seo'
import { Container } from '~/utils/styles'
import ContactForm from '~/components/ContactForm'

const WorkWithUsPage = () => {
  return (
    <>
      <SEO title="WorkWithUsPage" keywords={[`alt.fashion`, `work with us`]} />
      <Container>
        <ContactForm />
      </Container>
    </>
  )
}

export default WorkWithUsPage
