import { useState } from 'react'
import { Upload, Icon, message } from 'antd'

import { MEDIA_PATH } from 'utils/files/path'

export const UploadImage = ({ url, image, handleChange, id = '' }) => {
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImage] = useState('')

  const getBase64 = (img, callback) => {
    const reader = new window.FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }

  const beforeUpload = file => {
    const imageType = /image.*/
    const isImage = file.type.match(imageType)
    if (!isImage) {
      message.error('You can only upload JPG or PNG file!')
      return false;
    }
    return false;
  }

  const handleChangeImage = info => {
    if (info.file.status === 'uploading') {
      return setLoading(true)
    }
    console.log('info.file', info.file)
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, url => {
        setImage(url)
        setLoading(false)
        handleChange(info.file)
      })
    } else {
      setLoading(false)
    }
    if (info.file.status === 'error') {
      message.error('Ocurrio un error al cargar la imagen!')
    }
  }

  const uploadButton = (
    <div>
      <Icon type={loading ? 'loading' : 'plus'} />
      <div className='ant-upload-text'>Upload</div>
    </div>
  )

  return (
    <Upload
      listType='picture-card'
      className='avatar-uploader'
      showUploadList={false}
      beforeUpload={beforeUpload}
      onChange={handleChangeImage}
      customRequest={({ file, onSuccess, onError }) => {
        // Simula un upload exitoso (si no subes realmente a servidor)
        setTimeout(() => {
          onSuccess("ok"); // Esto evita que file.status = 'error'
        }, 0);
      }}
    >
      {!loading ? (
        url && !image ? (
          <img
            src={'http://localhost:8001' + url}
            width='100'
            height='100'
            alt='image'
            id={id}
          />
        ) : imageUrl && image ? (
          <img src={imageUrl} width='100' height='100' alt='image' id={id} />
        ) : (
          uploadButton
        )
      ) : (
        uploadButton
      )}
    </Upload>
  )
}
