import { useEffect, useState } from 'react'
import { Form, Input, Checkbox, Select, } from 'antd'

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

import { useStateData, useUsers } from '../../../hooks'

const Option = Select.Option

const FormTemplate = ({ welcome, loading, onSubmit, form, title }) => {
  const { data, changeAllData, changeData, cleanData } = useStateData(
    welcome || {}
  )
  const {users} = useUsers()

  useEffect(() => {
    changeAllData(welcome || {})
  }, [welcome])

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
  console.log('users', users)
  console.log('welcome', welcome)
  return (
    <>
      <HeaderSection title={title}>
        <HeaderActions
          path='/administrador/bienvenida'
          loading={loading}
          handleSubmit={handleSubmit}
          isSaveClean={!welcome}
          btnName={!welcome ? 'Agregar' : 'Editar'}
        />
      </HeaderSection>
      <Box>
        <Form>
          <FormSection hasLine>
            <FormLeft title='Información' />
            <FormRight>
                <Form.Item label='Usuario'>
                    <Select onChange={e => changeData('user', e)} value={welcome.user}>
                        {users.map((item) => (
                            <Select.Option key={item._id} value={item._id}>{item.email}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item label='Usuario'>
                    
                </Form.Item>
                {getFieldDecorator('Respuestas', {
                  rules: [
                    {
                      required: true,
                      message: 'Ingresa la descripción de la institución.'
                    }
                  ],
                  initialValue: welcome && JSON.stringify(welcome.questions, null, 2)
                })(<Input.TextArea rows={10} />)}
            </FormRight>
          </FormSection>
        </Form>
      </Box>
    </>
  )
}

export const WelcomeForm = Form.create()(FormTemplate)
