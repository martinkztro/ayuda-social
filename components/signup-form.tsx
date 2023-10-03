'use client'

import { useState } from 'react'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';

export default function SignupForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // instantiate supabase client
  const supabase = createClientComponentClient()

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value)
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value)
  };

  const handleSubmit = async () => {

    // sends a sign up request to supabase email provider
    await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/api/auth/callback`,
        },
     })

     const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

  };

  return (
    <main className="mx-auto max-w-xs lg:max-w-sm my-auto mt-32">
      <h1 className='text-center mb-10 font-bold text-3xl'>Crear cuenta</h1>
      <Form
          name="normal_login"
          className="login-form w-full flex flex-col "
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Ingrese un correo electrónico válido' }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Correo Electrónico"
              type='email'
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
              Registrarse
            </Button>
          </Form.Item>
          <Form.Item className='mx-auto'>
            <Button type="link" className="text-blue-500" href='/login' >Ingresar</Button>
          </Form.Item>
        </Form>
    </main>
  );
}
