import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import "./style/LoginForm.css";

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
   
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const onFinish = values => {
    console.log('Success:', values);
    
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    alert(`you are currently cunected to our app!`);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const handleLogout = () => {
   
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    alert(`you are currently discunected to our app!`);
  };

  return isLoggedIn ? (
    <div>
      <p>You are logged in!</p>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  ) : (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          
          <img src="images/backround.jpg" alt="Login"/>
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Welcome back</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password 
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginForm;
