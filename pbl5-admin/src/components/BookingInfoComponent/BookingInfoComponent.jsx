import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Input, Popconfirm, Table, Modal, DatePicker } from 'antd';
import moment from 'moment'; // Import moment for date manipulation

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave(record.key, {
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

const App = () => {
  const [dataSource, setDataSource] = useState([]);
  const [count, setCount] = useState(0);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [recordToUpdate, setRecordToUpdate] = useState(null);
  const [form] = Form.useForm(); // Add this line to create the form instance

  useEffect(() => {
    // Set initial data source
    setDataSource([
      {
        key: '0',
        ID: '1',
        DATE: moment(),
        START_AT: 'DN',
        ARRIVAL_AT: 'HN',
        KILOMETER: '100',
        COST: '50',
        "DATE/TIME": moment(),
      },
      {
        key: '1',
        ID: '2',
        DATE: moment(),
        START_AT: 'HN',
        ARRIVAL_AT: 'HCM',
        KILOMETER: '120',
        COST: '60',
        "DATE/TIME": moment(),
      },
    ]);
    setCount(2);
  }, []);

  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };

  const handleAdd = (values) => {
    const newData = {
      key: count.toString(),
      ...values,
      DATE: moment(values.DATE), // Convert date to moment object
      "DATE/TIME": moment(values["DATE/TIME"]),
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
    form.resetFields(); // Clear form fields
    setOpenAddModal(false); // Close modal after successful addition
  };

  const handleUpdate = (record) => {
    setRecordToUpdate({ ...record });
    form.setFieldsValue(record); // Set form fields with current row data
    setOpenUpdateModal(true);
  };

  const handleSave = (key, row) => {
    const index = dataSource.findIndex((item) => item.key === key);
    if (index !== -1) {
      const newData = [...dataSource];
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...row,
        DATE: moment(row.DATE), // Convert date to moment object
        "DATE/TIME": moment(row["DATE/TIME"]),
      });
      setDataSource(newData);
      setOpenUpdateModal(false);
    }
  };
  

  const defaultColumns = [
    {
      title: 'ID',
      dataIndex: 'ID',
      width: '10%',
      editable: true,
      sorter: (a, b) => a.ID.localeCompare(b.ID),
    },
    {
      title: 'DATE',
      dataIndex: 'DATE',
      render: (text, record) => moment(text).format('DD/MM/YYYY'),
    },
    {
      title: 'START_AT',
      dataIndex: 'START_AT',
      render: (text, record) => locationMap[text] || text,
      sorter: (a, b) => a.START_AT.localeCompare(b.START_AT),
    },
    {
      title: 'ARRIVAL_AT',
      dataIndex: 'ARRIVAL_AT',
      render: (text, record) => locationMap[text] || text,
      sorter: (a, b) => a.ARRIVAL_AT.localeCompare(b.ARRIVAL_AT),
    },
    {
      title: 'KILOMETER',
      dataIndex: 'KILOMETER',
      sorter: (a, b) => parseFloat(a.KILOMETER) - parseFloat(b.KILOMETER),
    },
    {
      title: 'COST',
      dataIndex: 'COST',
      sorter: (a, b) => parseFloat(a.COST) - parseFloat(b.COST),
    },
    {
      title: 'DATE/TIME',
      dataIndex: 'DATE/TIME',
      render: (text, record) => moment(text).format('DD/MM/YYYY HH:mm'),
    },
    {
      title: 'ACTION',
      dataIndex: 'operation',
      render: (_, record) => (
        <div>
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <a>Delete</a>
          </Popconfirm>
          <a style={{ marginLeft: 8 }} onClick={() => handleUpdate(record)}>
            Update
          </a>
        </div>
      ),
    },
  ];

  const locationMap = {
    'DN': 'Đà Nẵng',
    'HN': 'Hà Nội',
    'HCM': 'TP HCM',
    // Thêm các địa điểm khác nếu cần thiết
  };

  return (
    <div>
      <Modal
        title="Update Employee"
        centered
        visible={openUpdateModal}
        onCancel={() => setOpenUpdateModal(false)}
        footer={null}
        style={{ textAlign: 'center' }}
      >
        {recordToUpdate && (
          <Form
            layout="vertical"
            onFinish={(values) => {
              handleSave(recordToUpdate.key, { ...recordToUpdate, ...values });
            }}
            initialValues={recordToUpdate}
            form={form} // Pass the form instance to the Form component
          >
            <Form.Item
              label="ID"
              name="ID"
              rules={[{ required: true, message: 'Please input ID!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="DATE"
              name="DATE"
              rules={[{ required: true, message: 'Please input date!' }]}
            >
              <DatePicker format="DD/MM/YYYY" style={{width: '100%'}} />
            </Form.Item>
            <Form.Item
              label="START_AT"
              name="START_AT"
              rules={[{ required: true, message: 'Please input start time!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="ARRIVAL_AT"
              name="ARRIVAL_AT"
              rules={[{ required: true, message: 'Please input arrival time!' }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="KILOMETER"
              name="KILOMETER"
              rules={[{ required: true, message: 'Please input kilometer!' }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="COST"
              name="COST"
              rules={[{ required: true, message: 'Please input cost!' }]}
            >
              <Input type="number" />
            </Form.Item>
            <Form.Item
              label="DATE/TIME"
              name="DATE/TIME"
              rules={[{ required: true, message: 'Please input date/time!' }]}
            >
              <DatePicker format="DD/MM/YYYY HH:mm"  style={{width: '100%'}}/>
            </Form.Item>
            <div style={{ textAlign: 'center' }}>
              <Button type="primary" htmlType="submit">
                Confirm Update
              </Button>
            </div>
          </Form>
        )}
      </Modal>

      <Table
        bordered
        dataSource={dataSource}
        columns={defaultColumns}
        components={{
          body: {
            row: EditableRow,
            cell: EditableCell,
          },
        }}
        rowClassName="editable-row"
        pagination={false}
        scroll={{ y: 'calc(100vh - 200px)' }} // Thiết lập chiều cao của thanh cuộn
      />

    </div>
  );
};

export default App;
