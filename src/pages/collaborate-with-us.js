import React from 'react'
import SEO from '~/components/seo'
import { Container } from '~/utils/styles'
import ContactForm from '~/components/ContactForm'

const CollaborateWithUsPage = () => {
  return (
    <>
      <SEO
        title="Collaborate with us"
        keywords={[`alt.fashion`, `collaborate with us`]}
      />
      <Container>
        <ContactForm />
      </Container>
    </>
  )
}

export default CollaborateWithUsPage
