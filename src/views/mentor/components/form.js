import { useEffect } from 'react'
import { Form, Input, Checkbox, Select } from 'antd'

import {
  Box,
  FormLeft,
  FormRight,
  UploadImage,
  FormSection,
  HeaderActions,
  HeaderSection,
  InputNumber
} from '../../../components'

import { useStateData } from '../../../hooks'

const Option = Select.Option

const FormTemplate = ({ mentor, loading, onSubmit, form, title }) => {
  const { data, changeAllData, changeData, cleanData } = useStateData(
    mentor || {}
  )

  useEffect(() => {
    changeAllData(mentor || {})
  }, [mentor])

  const cleanForm = () => {
    form.resetFields()
    cleanData()
  }

  // const changeSlug = e => {
  //   const newSlug = toSlug(e.target.value, { lower: true })
  //   form.setFieldsValue({ slug: newSlug })
  //   changeData('slug', newSlug)
  // }

  const handleSubmit = redirect => {
    console.log('data', data)
    form.validateFields((err, values) => {
      if (!err) {
        
        const formData = new window.FormData()
        if (data.imageFile) {
          formData.append('image', data.imageFile.originFileObj)
        }
        formData.append('data', JSON.stringify(values))

        onSubmit(formData, true, cleanForm)
      }
    })
  }

  const { getFieldDecorator } = form

  return (
    <>
      <HeaderSection title={title}>
        <HeaderActions
          path='/administrador/mentores'
          loading={loading}
          handleSubmit={handleSubmit}
          isSaveClean={!mentor}
          btnName={!mentor ? 'Agregar' : 'Editar'}
        />
      </HeaderSection>
      <Box>
        <Form>
          <FormSection hasLine>
            <FormLeft title='Información' />
            <FormRight>
              <Form.Item label='Nombre'>
                {getFieldDecorator('names', {
                  rules: [
                    {
                      required: true,
                      message: 'Ingresa el names.'
                    }
                  ],
                  initialValue: data.names || undefined
                })(<Input onChange={e => changeData('names', e.target.value)} />)}
              </Form.Item>
              <Form.Item label='Descripción'>
                {getFieldDecorator('description', {
                  rules: [
                    {
                      required: true,
                      message: 'Ingresa el description.'
                    }
                  ],
                  initialValue: data.description || undefined
                })(<Input onChange={e => changeData('description', e.target.value)} />)}
              </Form.Item>
              <Form.Item label='Imagen'>
                <UploadImage
                  image={data.imageFile}
                  url={data && data.photo}
                  handleChange={file => changeData('imageFile', file)}
                />
              </Form.Item>
            </FormRight>
          </FormSection>
        </Form>
      </Box>
    </>
  )
}

export const MentorForm = Form.create()(FormTemplate)
