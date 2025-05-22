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

const FormTemplate = ({ initiative, loading, onSubmit, form, title }) => {
  const { data, changeAllData, changeData, cleanData } = useStateData(
    initiative || {}
  )

  useEffect(() => {
    changeAllData(initiative || {})
  }, [initiative])

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
          path='/administrador/iniciativas'
          loading={loading}
          handleSubmit={handleSubmit}
          isSaveClean={!initiative}
          btnName={!initiative ? 'Agregar' : 'Editar'}
        />
      </HeaderSection>
      <Box>
        <Form>
          <FormSection hasLine>
            <FormLeft title='Información' />
            <FormRight>
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
                  rules: [
                    {
                      message: 'Ingresa el description.'
                    }
                  ],
                  initialValue: data.description || undefined
                })(<Input onChange={e => changeData('description', e.target.value)} />)}
              </Form.Item>
              <Form.Item label='Característica 1'>
                {getFieldDecorator('char1', {
                  rules: [
                    {
                      message: 'Ingresa el char1.'
                    }
                  ],
                  initialValue: data.char1 || undefined
                })(<Input onChange={e => changeData('char1', e.target.value)} />)}
              </Form.Item>
              <Form.Item label='Característica 2'>
                {getFieldDecorator('char2', {
                  rules: [
                    {
                      message: 'Ingresa el char2.'
                    }
                  ],
                  initialValue: data.char2 || undefined
                })(<Input onChange={e => changeData('char2', e.target.value)} />)}
              </Form.Item>
              <Form.Item label='Característica 3'>
                {getFieldDecorator('char3', {
                  rules: [
                    {
                      message: 'Ingresa el char3.'
                    }
                  ],
                  initialValue: data.char3 || undefined
                })(<Input onChange={e => changeData('char3', e.target.value)} />)}
              </Form.Item>
              <Form.Item label='Característica 4'>
                {getFieldDecorator('char4', {
                  rules: [
                    {
                      message: 'Ingresa el char4.'
                    }
                  ],
                  initialValue: data.char4 || undefined
                })(<Input onChange={e => changeData('char4', e.target.value)} />)}
              </Form.Item>
              <Form.Item label='Respaldo'>
                {getFieldDecorator('back', {
                  rules: [
                    {
                      message: 'Ingresa el back.'
                    }
                  ],
                  initialValue: data.back || undefined
                })(<Input onChange={e => changeData('back', e.target.value)} />)}
              </Form.Item>
              <Form.Item label='Imagen'>
                <UploadImage
                  image={data.imageFile}
                  url={data && data.backImage}
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

export const InitiativeForm = Form.create()(FormTemplate)
