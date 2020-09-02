import React from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { FormContainer, FForm, FField, FErrorMessage, FButton } from './styles'

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('name is required'),
  email: yup
    .string()
    .email('Invalid email')
    .required('email is required'),
  message: yup.string().required(),
})

const ContactForm = () => {
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  return (
    <FormContainer>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
        }}
        onSubmit={(values, actions) => {
          fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'work-with-us', ...values }),
          })
            .then(() => {
              alert('Success')
              actions.resetForm()
            })
            .catch(() => {
              alert('Error')
            })
            .finally(() => actions.setSubmitting(false))
        }}
        validationSchema={validationSchema}
      >
        <FForm name="work-with-us" data-netlify={true}>
          <label htmlFor="name">Name: </label>
          <ErrorMessage name="name" component={FErrorMessage} />
          <FField name="name" />
          <label htmlFor="email">Email: </label>
          <ErrorMessage name="email" component={FErrorMessage} />
          <FField name="email" />
          <label htmlFor="message">Message: </label>
          <ErrorMessage name="message" component={FErrorMessage} />
          <FField name="message" component="textarea" rows="5" />
          <FButton type="submit">Send</FButton>
        </FForm>
      </Formik>
    </FormContainer>
  )
}

export default ContactForm
