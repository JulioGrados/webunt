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

const FormTemplate = ({ portfolio, loading, onSubmit, form, title }) => {
  const { data, changeAllData, changeData, cleanData } = useStateData(
    portfolio || {}
  )

  useEffect(() => {
    changeAllData(portfolio || {})
  }, [portfolio])

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
          path='/administrador/portafolios'
          loading={loading}
          handleSubmit={handleSubmit}
          isSaveClean={!portfolio}
          btnName={!portfolio ? 'Agregar' : 'Editar'}
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
              <Form.Item label='Equipo'>
                {getFieldDecorator('team', {
                  rules: [
                    {
                      message: 'Ingresa el team.'
                    }
                  ],
                  initialValue: data.team || undefined
                })(<Input onChange={e => changeData('team', e.target.value)} />)}
              </Form.Item>
              <Form.Item label='Fundación'>
                {getFieldDecorator('foundation', {
                  rules: [
                    {
                      message: 'Ingresa el foundation.'
                    }
                  ],
                  initialValue: data.foundation || undefined
                })(<Input onChange={e => changeData('foundation', e.target.value)} />)}
              </Form.Item>
              <Form.Item label='Nivel'>
                {getFieldDecorator('level', {
                  rules: [
                    {
                      message: 'Ingresa el level.'
                    }
                  ],
                  initialValue: data.level || undefined
                })(<Input onChange={e => changeData('level', e.target.value)} />)}
              </Form.Item>
              <Form.Item label='Enlace'>
                {getFieldDecorator('link', {
                  rules: [
                    {
                      required: true,
                      message: 'Ingresa el link.'
                    }
                  ],
                  initialValue: data.link || undefined
                })(<Input onChange={e => changeData('link', e.target.value)} />)}
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

export const PortfolioForm = Form.create()(FormTemplate)
