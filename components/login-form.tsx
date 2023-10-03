'use client'

import { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

export default function LoginForm() {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
  
    const supabase = createClientComponentClient()
    
    const handleEmailChange = (event: any) => {
      setEmail(event.target.value)
    };
  
    const handlePasswordChange = (event: any) => {
      setPassword(event.target.value)
    };
  
    const handleSubmit = async (event: any) => {
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })
      if (password !== '' && email !== '') {
        if (error) {
          alert('Correo electrónico o contraseña incorrectos')
        } else {
          alert('Inicio de sesión exitoso')
          location.href = '/'
        }
      }

    };
    
    return (
        <main className="mx-auto max-w-xs lg:max-w-sm my-auto mt-32">
      <h1 className='text-center mb-10 font-bold text-3xl'>Inicio de sesión</h1>
      <Form
          name="normal_login"
          className="login-form w-full flex flex-col "
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          action={'/auth/login'}
          method='POST'
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Ingrese un correo electrónico válido' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              type='email'
              placeholder="Correo Electrónico"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Ingrese su contraseña' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Item>
          <Form.Item className='flex flex-col'>
            <Button type="primary" htmlType="submit" className="text-white w-full bg-blue-500">
              Ingresar
            </Button>
          </Form.Item>
          <Form.Item className='mx-auto'>
            <Button type="link" className="text-blue-500" href='/signup' >Registrarse</Button>
          </Form.Item>
        </Form>
        </main>
     );
}
