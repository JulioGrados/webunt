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

const FormTemplate = ({ question, loading, onSubmit, form, title }) => {
  const { data, changeAllData, changeData, cleanData } = useStateData(
    question || {}
  )
  const {users} = useUsers()

  useEffect(() => {
    changeAllData(question || {})
  }, [question])

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
  console.log('question', question)
  return (
    <>
      <HeaderSection title={title}>
        <HeaderActions
          path='/administrador/cuestionario'
          loading={loading}
          handleSubmit={handleSubmit}
          isSaveClean={!question}
          btnName={!question ? 'Agregar' : 'Editar'}
        />
      </HeaderSection>
      <Box>
        <Form>
          <FormSection hasLine>
            <FormLeft title='Información' />
            <FormRight>
                <Form.Item label='Usuario'>
                    <Select onChange={e => changeData('user', e)} value={question.user}>
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
                  initialValue: question && JSON.stringify(question.questions, null, 2)
                })(<Input.TextArea rows={10} />)}
            </FormRight>
          </FormSection>
        </Form>
      </Box>
    </>
  )
}

export const QuestionForm = Form.create()(FormTemplate)
