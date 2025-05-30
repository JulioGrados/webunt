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

const FormTemplate = ({ goal, loading, onSubmit, form, title }) => {
  const { data, changeAllData, changeData, cleanData } = useStateData(
    goal || {}
  )

  useEffect(() => {
    changeAllData(goal || {})
  }, [goal])

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
          path='/administrador/metas'
          loading={loading}
          handleSubmit={handleSubmit}
          isSaveClean={!goal}
          btnName={!goal ? 'Agregar' : 'Editar'}
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
              <Form.Item label='Número'>
                {getFieldDecorator('number', {
                  rules: [
                    {
                      message: 'Ingresa el number.'
                    }
                  ],
                  initialValue: data.number || undefined
                })(<Input onChange={e => changeData('number', e.target.value)} />)}
              </Form.Item>
              <Form.Item label='Descripción'>
                {getFieldDecorator('description', {
                  rules: [
                    {
                      message: 'Ingresa la descipción.'
                    }
                  ],
                  initialValue: data.description || undefined
                })(<Input onChange={e => changeData('description', e.target.value)} />)}
              </Form.Item>
              <Form.Item label='Imagen'>
                <UploadImage
                  image={data.imageFile}
                  url={data && data.image}
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

export const GoalForm = Form.create()(FormTemplate)
