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

const FormTemplate = ({ page, loading, onSubmit, form, title }) => {
  const { data, changeAllData, changeData, cleanData } = useStateData(
    page || {}
  )

  useEffect(() => {
    changeAllData(page || {})
  }, [page])

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
          path='/paginas'
          loading={loading}
          handleSubmit={handleSubmit}
          isSaveClean={!page}
          btnName={!page ? 'Agregar' : 'Editar'}
        />
      </HeaderSection>
      <Box>
        <Form>
          <FormSection hasLine>
            <FormLeft title='Información' />
            <FormRight>
              <Form.Item label='Página'>
                {getFieldDecorator('page', {
                  rules: [
                    {
                      required: true,
                      message: 'Ingresa nombre de la página.'
                    }
                  ],
                  initialValue: data && data.page
                })(<Input onChange={e => changeData('page', e.target.value)}  />)}
              </Form.Item>
              <Form.Item label='Título'>
                {getFieldDecorator('title', {
                  rules: [
                    {
                      required: true,
                      message: 'Ingresa el title.'
                    }
                  ],
                  initialValue: data.title || undefined
                })(<Input onChange={e => changeData('title', e.target.value)} />)}
              </Form.Item>
              <Form.Item label='Nombre'>
                {getFieldDecorator('name', {
                  rules: [
                    {
                      required: true,
                      message: 'Ingresa el name.'
                    }
                  ],
                  initialValue: data.name || undefined
                })(<Input onChange={e => changeData('name', e.target.value)} />)}
              </Form.Item>
              <Form.Item label='Descripción'>
                {getFieldDecorator('description', {
                  initialValue: data && data.description
                })(<Input.TextArea rows={3} onChange={e => changeData('description', e.target.value)} />)}
              </Form.Item>
              <Form.Item label='Imagen'>
                <UploadImage
                  image={data.imageFile}
                  url={page && data.image}
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

export const PageForm = Form.create()(FormTemplate)
