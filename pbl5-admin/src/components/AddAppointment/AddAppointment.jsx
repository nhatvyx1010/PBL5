import React, { useState, useEffect, useRef } from 'react'
import { Modal, Button, Form, Input, message, DatePicker, Checkbox } from 'antd'
import Draggable from 'react-draggable';
import styles from './style.js'
import classNames from 'classnames/bind';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const cx = classNames.bind(styles);

const AddAppointment = ({ currentDate, openModal, setOpenModal }) => {
  dayjs.extend(customParseFormat);
  const addAppointmentFormLayout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 24
    },
  };

  const [startTime, setStartTime] = useState(currentDate.hour(dayjs().hour()).minute(dayjs().minute()).second(0))
  const [endTime, setEndTime] = useState(currentDate.hour(dayjs().hour()).minute(dayjs().minute()).add(30, 'minute'))
  const [remind, setRemind] = useState(false);

  const navigate = useNavigate();

  // Handle click out boundary of modal 
  const handleOk = () => {
    setOpenModal(false);
  }

  // Handle click button "X" of modal
  const handleCancel = () => {
    setOpenModal(false);
  }

  // Handle check click "Remind me"
  const handleRemind = () => {
    setRemind(!remind);
  }

  // ---------------------------  Set field for date input  ---------------------------
  const [form] = Form.useForm();
  form.setFieldValue('startTime', startTime);
  form.setFieldValue('endTime', endTime);

  useEffect(() => {
    setStartTime(currentDate.hour(dayjs().hour()).minute(dayjs().minute()))
    setEndTime(currentDate.hour(dayjs().hour()).minute(dayjs().minute()).add(30, 'minute'))
  }, [currentDate])

  // ---------------------------      Modal Draggable      ---------------------------
  const draggleRef = useRef(null);
  const [disabled, setDisabled] = useState(false);
  const [bounds, setBounds] = useState({
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  });

  const onStart = (_event, uiData) => {
    const { clientWidth, clientHeight } = window.document.documentElement;
    const targetRect = draggleRef.current?.getBoundingClientRect();
    if (!targetRect) {
      return;
    }
    setBounds({
      left: -targetRect.left + uiData.x,
      right: clientWidth - (targetRect.right - uiData.x),
      top: -targetRect.top + uiData.y,
      bottom: clientHeight - (targetRect.bottom - uiData.y),
    });
  };

  // ---------------------------      Validate wheather appointment duration is invalid    ---------------------------
  const validateTimeDifference = (rule, value, callback) => {
    const { getFieldValue } = form;
    const startTime = getFieldValue('startTime');
    const endTime = getFieldValue('endTime');

    const startDate = new Date(startTime);
    const endDate = new Date(endTime);

    const diffInMs = endDate - startDate;

    const diffInMinutes = Math.floor((diffInMs / 1000) / 60);

    if (diffInMinutes < 1) {
      callback('Invalid duration');
    } else {
      callback();
    }
  };
  
  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().startOf('day');
  };

  // ---------------------------      Handle submit Form      ---------------------------
  // Failed case
  const onFinishFailed = (values) => {
    console.log('Error', values)
    message.error('Add appointment failed! Try again');
  }

  // Successful case
  const onFinish = (values) => {
    const { title, location, remind } = values;
    Swal.fire(
      'Created!',
      'Your appointment has been created.',
      'success'
    ).then(() => {
      navigate(0)
    })
  };

  return (
    <Modal
      title={
        <div
          style={{
            width: '100%',
            cursor: 'move',
            textAlign: 'center',
            marginBottom: 24
          }}
          onMouseOver={() => {
            setDisabled(false);
          }}
          onMouseOut={() => {
            setDisabled(true);
          }}
        >
          Thêm lịch trình
        </div>
      }
      open={openModal}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
      modalRender={(modal) => (
        <Draggable
          disabled={disabled}
          bounds={bounds}
          onStart={(event, uiData) => onStart(event, uiData)}
        >
          <div ref={draggleRef}>{modal}</div>
        </Draggable>
      )}
    >
      <Form
        {...addAppointmentFormLayout}
        form={form}
        layout='vertical'
        name='appointment_form'
        labelAlign='left'
        labelWrap='true'
        size='large'
        autoComplete="off"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className={cx("modal-form")}
        initialValues={{
          remind: true,
        }}
      >
        <Form.Item
          name='title'
          label="Title"
          rules={[
            {
              required: true,
              message: 'Title is required!'
            },
          ]}
          hasFeedback
        >
          <Input
            placeholder='Sinh nhật'
          />
        </Form.Item>
        <Form.Item
          name='location'
          label="Location"
          rules={[
            {
              required: true,
              message: 'Location is required!'
            },
          ]}
          hasFeedback
        >
          <Input
            placeholder='Đà Nẵng'
          />
        </Form.Item>
        <Form.Item
          label="Start Time"
          name='startTime'
          rules={[
            { 
              required: true, 
              message: 'Please select a start time!' 
            }
          ]}
          hasFeedback
        >
          <DatePicker
              placeholder='Select start time'
              format="YYYY-MM-DD HH:mm"
              disabledDate={disabledDate}
              showTime={{
                defaultValue: dayjs('00:00', 'HH:mm'),
              }}
              onChange={(value) => { setStartTime(value) }}
              style={{width: '100%'}}
          />
        </Form.Item>
        <Form.Item
          label="End Time"
          name='endTime'
          rules={[
            {
              required: true,
              message: 'Please select an end time!'
            },
            {
              validator: validateTimeDifference
            }
          ]}
          hasFeedback
        >
          <DatePicker
            placeholder='Select end time'
            format="YYYY-MM-DD HH:mm"
            disabledDate={disabledDate}
            showTime={{
              defaultValue: dayjs('00:00', 'HH:mm'),
            }}
            onChange={(value) => { setEndTime(value) }}
            style={{width: '100%'}}
          />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            ...addAppointmentFormLayout.wrapperCol,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button type="primary" htmlType="submit">
            Thêm lịch trình
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddAppointment;
