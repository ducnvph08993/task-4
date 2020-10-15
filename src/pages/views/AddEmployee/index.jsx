import React from "react";
import { Form, Input, InputNumber, Button, Typography } from 'antd';
import './AddEmployee.scss';
import noteActions from '../../../redux/actions/employeeActions';
import inputActions from '../../../redux/actions/inputActions';
import { useDispatch, useSelector } from "react-redux";
import employeeActions from "../../../redux/actions/employeeActions";
// import PropTypes from 'prop-types'

const {Title} = Typography

const layout = {
  labelCol : {
    span: 6,
  },
  wrapperCol: {
    span: 12,
  }
};

const validateMessages = {
  required: '\${label} is required!',
  types: {
    email: '${label} is not validate email',
    number: '${label} is not validate number',
  },
  number: {
    number: '${label} must be between ${min} to ${max}'
  },
};

const onFinish = values => console.log(values);

const AddEmployee = () => {
  const name = useSelector(state => state.inputs.name);
  const age = useSelector(state => state.inputs.age);
  const address = useSelector(state => state.inputs.address);
  const dispatch = useDispatch();
  // const form = Form();

  // form.setFieldsValue({employees:{
  //   name: name,
  //   age: age,
  //   address:address,
  
  // }})
 

  const handleAdd = () => {
    dispatch(employeeActions.addEmployee({
      name,
      age,
      address,
    }))
  }

  return (
    <div className="add-form">
     <Title id="title">Add-Employee</Title>
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
        name={['employees','name']}
        label="Name"
        rules = {[
          {
            required:true,
          },
        ]}
      >
        <Input  />
      </Form.Item>
      <Form.Item
        name={['employees','email']}
        label="Email"
        rules = {[
          {
            type:'email',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={['employees','age']}
        label="Age"
        rules = {[
          {
            type:'number',
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item wrapperCol={{...layout.wrapperCol, offset: 10}}>
        <Button type="primary" htmlType="submit" onClick={handleAdd}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

AddEmployee.propTypes = {};

export default AddEmployee;
