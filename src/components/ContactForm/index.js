import React, { useState, useCallback } from 'react'
import { Formik, ErrorMessage } from 'formik'
import { useDropzone } from 'react-dropzone'
import * as yup from 'yup'
import {
  FormContainer,
  FForm,
  FField,
  FErrorMessage,
  FButton,
  DropDownP,
  DropDownDiv,
  DropDownPHover,
  FileName,
} from './styles'

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
  const [file, setFile] = useState({})

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    setFile(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  const encode = data => {
    const formData = new FormData()
    Object.keys(data).forEach(k => {
      formData.append(k, data[k])
    })
    return formData
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
            // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({ 'form-name': 'work-with-us', ...values, file }),
          })
            .then(() => {
              alert('Success')
              actions.resetForm()
            })
            .catch(() => {
              alert('Error')
            })
            .finally(() => {
              setFile({})
              actions.setSubmitting(false)
            })
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
          <DropDownDiv {...getRootProps()}>
            <input {...getInputProps()} name="file" />
            {isDragActive ? (
              <DropDownPHover>Drop your resume here ...</DropDownPHover>
            ) : (
              <DropDownP>
                Drag 'n' drop some resume here, or click to select your resume
              </DropDownP>
            )}
            {file.name && <FileName>{file.name}</FileName>}
          </DropDownDiv>
          <FButton type="submit">Send</FButton>
        </FForm>
      </Formik>
    </FormContainer>
  )
}

export default ContactForm
