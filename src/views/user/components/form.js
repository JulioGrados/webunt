import { useEffect, useState } from 'react'
import { Form, Input, Select, Transfer, Modal, Checkbox } from 'antd'
import { dataToPayload } from 'utils/functions/user'
import { useStateData } from '../../../hooks'
import { Country, City } from "country-state-city"

import countriesData from 'utils/functions/countries'

import {
  Box,
  FormLeft,
  FormRight,
  FormDouble,
  UploadImage,
  FormSection,
  HeaderActions,
  HeaderSection,
  InputNumber
} from '../../../components'

// import { Table, TableOptions } from 'components-path'

// import moment from 'moment'
// import { SelectAssessors } from '../../../containers'
// import { TableOptions } from '../../../components/table/options'

const FormTemplate = ({
  user,
  loading,
  onSubmit,
  form,
  title,
  role = null
}) => {
  const initialCountry = countriesData.find(country => country.name === 'Perú')
  const { data, changeData, changeAllData } = useStateData(user)

  const [shipping, changeShipping] = useState()
  const [visible, changeVisible] = useState(false)
  const [cities, setCities] = useState([]);
  const countryOptions = Country.getAllCountries();

  useEffect(() => {
    if (user) {
      changeAllData(user)
    } else {
      changeAllData({
        mobileCode: initialCountry.callingCode,
        country: initialCountry.name
      })
    }
  }, [user])

  useEffect(() => {
    if(user && user.country) {
      const cityOptions = City.getCitiesOfCountry(user.country);
      setCities(cityOptions);
    }
  }, [user && user.country])

  const cleanForm = () => {
    // form.resetFields()
    changeAllData({
      mobileCode: initialCountry.callingCode,
      country: initialCountry.name
    })
  }

  const handleSelectCountry = e => {
    changeAllData({
      ...user,
      country: e,
      city: ''
    })
    const cityOptions = City.getCitiesOfCountry(e);
    setCities(cityOptions);
  }

  const handleSelectAssessor = item => {
    changeData('reasign', { username: item.username, ref: item._id })
  }

  const handleSubmit = redirect => {
    form.validateFields((err, values) => {
      if (!err) {
        const userData = dataToPayload({
          ...data,
          ...values
        })
        console.log('userData', userData)
        const formData = new window.FormData()

        if (data.image) {
          formData.append('photo', data.image.originFileObj)
        }
        if (data.shippings) {
          formData.append('shippings', data.shippings)
        }
        formData.append('data', JSON.stringify(userData))
        onSubmit(formData, redirect, cleanForm)
      }
    })
  }
  console.log('data', data)
  const { getFieldDecorator } = form


  return (
    <>
      <HeaderSection title={title}>
        <HeaderActions
          path='/administrador/usuarios'
          loading={loading}
          handleSubmit={handleSubmit}
          isSaveClean={!user}
          btnName={!user ? 'Agregar' : 'Editar'}
        />
      </HeaderSection>
      <Box>
        <Form>
          <FormSection hasLine>
            <FormLeft title='Información Inicial' />
            <FormRight>
              <FormDouble>
                <Form.Item label='Nombres'>
                  {getFieldDecorator('firstName', {
                    initialValue: user && user.firstName
                  })(<Input />)}
                </Form.Item>
                <Form.Item label='Apellidos'>
                  {getFieldDecorator('lastName', {
                    initialValue: user && user.lastName
                  })(<Input />)}
                </Form.Item>
              </FormDouble>
              <FormDouble>
                <Form.Item label='Nombres'>
                  {getFieldDecorator('names', {
                    initialValue: user && user.names
                  })(<Input />)}
                </Form.Item>
                <Form.Item label='Email'>
                  {getFieldDecorator('email', {
                    initialValue: user && user.email
                  })(<Input />)}
                </Form.Item>
              </FormDouble>
                <Form.Item label='Celular'>
                  {getFieldDecorator('mobile', {
                    initialValue: user && user.mobile
                  })(<Input addonBefore={data.mobileCode} />)}
                </Form.Item>
                <Form.Item label='rol'>
                  {getFieldDecorator('rol', {
                    initialValue: user && user.rol
                  })(
                    <Select onChange={e => changeData('rol', e)}>
                      <Select.Option value='administrador'>Administrador</Select.Option>
                      <Select.Option value='emprendedor'>Emprendedor</Select.Option>
                      <Select.Option value='externo'>Externo</Select.Option>
                    </Select>
                  )}
                </Form.Item>
                <Form.Item label='document'>
                  {getFieldDecorator('document', {
                    initialValue: user && user.document
                  })(
                    <Select onChange={e => changeData('document', e)}>
                      <Select.Option value='DNI'>DNI</Select.Option>
                      <Select.Option value='Carné de Extranjería'>Carné de Extranjería</Select.Option>
                      <Select.Option value='Pasaporte'>Pasaporte</Select.Option>
                      <Select.Option value='Otros'>Otros</Select.Option>
                    </Select>
                  )}
                </Form.Item>
                <Form.Item label='DNI'>
                  {getFieldDecorator('dni', {
                    initialValue: user && user.dni
                  })(<Input />)}
                </Form.Item>
                <Form.Item label='Nombre de startup'>
                  {getFieldDecorator('company', {
                    initialValue: user && user.company
                  })(<Input />)}
                </Form.Item>
                <Form.Item label='Razón social'>
                  {getFieldDecorator('companyName', {
                    initialValue: user && user.companyName
                  })(<Input />)}
                </Form.Item>
                <Form.Item label='Ruc'>
                  {getFieldDecorator('ruc', {
                    initialValue: user && user.ruc
                  })(<Input />)}
                </Form.Item>
                <Form.Item label='País'>
                  {getFieldDecorator('country', {
                    initialValue: user && user.country
                  })(
                    <Select onChange={handleSelectCountry}>
                      {countryOptions.map((country) => (
                        <Select.Option key={country.isoCode} value={country.isoCode}>{country.name}</Select.Option>
                      ))}
                    </Select>
                  )}
                </Form.Item>
                <Form.Item label='Ciudad'>
                  {getFieldDecorator('city', {
                    initialValue: data && data.city
                  })(
                    <Select onChange={e => changeData('city', e)}>
                      <Select.Option value="" disabled selected>Seleccionar una opción</Select.Option>
                      {cities.map((city, index) => (
                        <Select.Option key={index} value={city.name}>{city.name}</Select.Option>
                      ))}
                    </Select>
                  )}
                </Form.Item>
                <Form.Item label='Archivo'>
                  {getFieldDecorator('file', {
                    initialValue: user && user.file
                  })(<Input />)}
                </Form.Item>
            </FormRight>
          </FormSection>
        </Form>
      </Box>
    </>
  )
}

export const UserForm = Form.create()(FormTemplate)
