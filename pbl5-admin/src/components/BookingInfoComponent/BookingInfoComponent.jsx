import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Input, Popconfirm, Table,  } from 'antd';
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


  

  const defaultColumns = [
    {
      title: 'ID',
      dataIndex: 'ID',
      width: '10%',
      editable: true,
      sorter: (a, b) => a.ID.localeCompare(b.ID),
    },
    {
      title: 'Ngày đặt vé',
      dataIndex: 'DATE',
      render: (text, record) => moment(text).format('DD/MM/YYYY'),
    },
    {
      title: 'Nơi đi',
      dataIndex: 'START_AT',
      render: (text, record) => locationMap[text] || text,
      sorter: (a, b) => a.START_AT.localeCompare(b.START_AT),
    },
    {
      title: 'Nơi đến',
      dataIndex: 'ARRIVAL_AT',
      render: (text, record) => locationMap[text] || text,
      sorter: (a, b) => a.ARRIVAL_AT.localeCompare(b.ARRIVAL_AT),
    },
    {
      title: 'Kilometer',
      dataIndex: 'KILOMETER',
      sorter: (a, b) => parseFloat(a.KILOMETER) - parseFloat(b.KILOMETER),
    },
    {
      title: 'Giá tiền',
      dataIndex: 'COST',
      sorter: (a, b) => parseFloat(a.COST) - parseFloat(b.COST),
    },
    {
      title: 'Ngày/Thời gian khởi hành',
      dataIndex: 'DATE/TIME',
      render: (text, record) => moment(text).format('DD/MM/YYYY HH:mm'),
    },
    {
      title: '',
      dataIndex: 'operation',
      render: (_, record) => (
        <div>
          <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
            <Button type="link">Delete</Button>
          </Popconfirm>
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
