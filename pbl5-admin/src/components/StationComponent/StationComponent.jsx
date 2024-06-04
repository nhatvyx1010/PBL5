import { ConfigProvider, Dropdown, Menu, Modal, Form, Button, Input } from 'antd';
import moment from 'moment';
import { useState, useEffect } from "react";
import { Table, Popconfirm } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons'

import styled from 'styled-components';

const ActionButton = styled.a`
  display: inline-block;
  padding: 4px 8px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #08979c;
  background-color: #e6fffb;
  border: 1px solid #f6ffed;
  border-radius: 4px;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #13c2c2;
    color: #ffffff;
  }
`;

const App = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  const [dataSource, setDataSource] = useState([]);


  /////////////////       UPDATE             /////////////////
  const [formUpdate] = Form.useForm(); // Add this line to create the form instance
  const [recordToUpdate, setRecordToUpdate] = useState(null);
  // const [errorMessage, setErrorMessage] = useState('');
  // console.log("errorMessage: "+errorMessage);

  

    const [formDataUpdate, setFormDataUpdate] = useState({
      stationId: '',
      stationPoint: ''
    });
    const { stationId, stationPoint } = formDataUpdate;

    console.log("--"+stationId);

    const handleSave = (key, row) => {
      const index = dataSource.findIndex((item) => item.key === key);
      if (index !== -1) {
        const newData = [...dataSource];
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
          date: moment(row.date), // Convert date to moment object
        });
        setDataSource(newData);
        setOpenUpdateModal(false);
      }
    };
    
  const handleRowClick = (record) => {
    setFormDataUpdate({ ...formDataUpdate, userId: record.userId });
  };
    const handleChangeUpdate = (e) => {
        const { name, value } = e.target;
        setFormDataUpdate({
          ...formDataUpdate,
          [name]: value
        });
      };
    const handleUpdate = (record) => {
      setRecordToUpdate({ ...record });
      formUpdate.setFieldsValue(record); // Set form fields with current row data
      setOpenUpdateModal(true);
    };

    const getData = () => {
      if (!user.access_token) {
        navigate('/');
      } else {
        fetch(`${process.env.REACT_APP_API_URL}/api/v1/stations`, {
          method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
          console.log("data: ", data);
          if (data.meta.status_code === 401) {
            alert(data.meta.error);
          } else if (data.meta.status_code === 200 && data.data.result) {
            setDataSource(data.data.result);
          } else {
            alert("Lấy dữ liệu không thành công. Vui lòng thử lại.");
          }
        })        
        .catch((error) => {
          console.error('Error:', error);
          alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
        });
      }
    };
  

  const [openUpdateModal, setOpenUpdateModal] = useState(false);

    const handleDataUpdate = () => {formDataUpdate
      console.log("id"+  recordToUpdate.stationId + " Point" + recordToUpdate.stationPoint)
      console.log("id"+  formDataUpdate.stationId + " Point" + formDataUpdate.stationPoint)
      
      const formData = new FormData();
      formData.append("stationId", recordToUpdate.stationId);
      formData.append("stationPoint", recordToUpdate.stationPoint);
      console.log("FINAL: \nid: "+  recordToUpdate.stationId + " Point: " + formDataUpdate.stationPoint)

      console.log(`${process.env.REACT_APP_API_URL}/api/v1/stations/${recordToUpdate.stationId}`);
      fetch(`${process.env.REACT_APP_API_URL}/api/v1/stations/${recordToUpdate.stationId}`, {
          method: "PUT",
          headers: {
            // 'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.access_token}`
          },
          body: formData,
      })
      .then((response) => response.json())
      .then((data) => {
            console.log("update: ", data);
            if (data.meta.status_code === 200) {
            console.log("update: ", data);
              getData();
              setOpenUpdateModal(false);
          } else {
              alert(" Cập nhật không thành công. Vui lòng thử lại.");
          }
      })
      .catch((error) => {
          console.error('Lỗi:', error);
          alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
      });
    };

  /////////////////       ADD             /////////////////
  const [count, setCount] = useState(0);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [formAdd] = Form.useForm(); // Add this line to create the form instance
  const [errorMessage, setErrorMessage] = useState('');

  const [formDataAdd, setFormDataAdd] = useState({
    stationPointAdd: '',
  });
  const { stationPointAdd } = formDataAdd;
  
  const handleChangeAdd = (e) => {
    const { name, value } = e.target;
    setFormDataAdd({
      ...formDataAdd,
      [name]: value
    });
  };

    const handleCloseAddModal = () => {
      setFormDataAdd({
        stationPointAdd: '',
      });

      setOpenAddModal(false);
    };

    const handleDataAdd = () => {
        if (!formDataAdd.stationPointAdd) {
          setErrorMessage("Vui lòng điền đầy đủ thông tin.");
          return;
        } else {
          setErrorMessage('');
        }

        console.log("--data: " + formDataAdd.stationPointAdd+" -- msg: "+errorMessage);

        const formData = new FormData();
        formData.append("stationPoint", formDataAdd.stationPointAdd);
    
        fetch(process.env.REACT_APP_API_URL + "/api/v1/stations", {
          method: "POST",
          headers: {
            'Authorization': `Bearer ${user.access_token}`
          },
          body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.meta.status_code === 201) {
            getData();
            setOpenAddModal(false);
    
          } else {
            alert("Đăng ký không thành công. Vui lòng thử lại.");
          }
        })
        .catch((error) => {
          console.error('Lỗi:', error);
          alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
        });
      };


      const handleAdd = (values) => {
        const newData = {
          key: count.toString(),
          ...values,
        };
        setDataSource([...dataSource, newData]);
        setCount(count + 1);
        formDataAdd.resetFields();
        setOpenAddModal(false); // Close modal after successful addition
      };

  /////////////////       Effect             /////////////////

  useEffect(() => {
    getData(user.access_token);
  }, [user.access_token, navigate]);

  const columns = [
    {
      title: 'Station ID',
      dataIndex: 'stationId',
      fixed: 'left',
      width: 150,
      key: 'stationId',
    },{
      title: 'Station Point',
      dataIndex: 'stationPoint',
      key: 'stationPoint',
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 150,
      render: (record) => (
        <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="1">
              <Popconfirm
                title={record.status === 'Pending' ? 'Bạn có chắc chắn muốn cập nhật yêu cầu lịch trình mới?' : 'Bạn có chắc chắn muốn hủy yêu cầu lịch trình?'}
                okText="Đồng ý"
                cancelText="Hủy"
                onConfirm={() => handleUpdate(record)}
              >
                <ActionButton type="link">Update</ActionButton>
              </Popconfirm>
            </Menu.Item>
            <Menu.Item key="2">
              <Popconfirm
                title="Bạn có chắc chắn muốn thực hiện hành động 2?"
                okText="Đồng ý"
                cancelText="Hủy"
                onConfirm={() => handleSecondAction(record)}
              >
                <ActionButton type="link">Delete</ActionButton>
              </Popconfirm>
            </Menu.Item>
          </Menu>
        }
    >
      <ActionButton>
        Action <DownOutlined />
      </ActionButton>
    </Dropdown>
        ),
      },
    ];

  const handleSecondAction = (record) => {
    console.log("record2", record);
  }

  const rowStyle = { height: '20px' };
  const cellStyle = { padding: '0' };

  return (
    <>
         <Button type="primary" onClick={() => setOpenAddModal(true)} style={{ marginBottom: '20px' }}>
           Thêm Station
         </Button>
         <Modal
            title="Add Station"
            centered
            visible={openAddModal}
            onCancel={handleCloseAddModal}
            footer={null}
            style={{ textAlign: 'center' }}
          >
            <Form
              layout="vertical"
              onFinish={(values) => {
                handleAdd(values);
                setOpenAddModal(false);
              }}
              form={formAdd} // Pass the form instance to the Form component
            >
              <Form.Item
                label="Name"
                name="stationPointAdd"
                rules={[{ required: true, message: 'Please input station name!' }]}
              >
                <Input 
                  type="text" 
                  name="stationPointAdd" 
                  value={stationPointAdd} 
                  onChange={handleChangeAdd} 
                  placeholder="Station Name"
                />
              </Form.Item>
              
              <div style={{ textAlign: 'center' }}>
                <Button type="primary" 
                    onClick={handleDataAdd} 
                    >
                  Add Station
                </Button>
              </div>
            </Form>
          </Modal>

      <ConfigProvider>
        {dataSource.length > 0 ? (
          <Table
            columns={columns}
            pagination={{ pageSize: 6 }}
            dataSource={dataSource}
            // scroll={{ x: 1300 }}
            rowStyle={() => rowStyle}
            cellStyle={() => cellStyle}
            onRow={(record) => ({
              onClick: () => handleRowClick(record),
            })}
          />
        ) : (
          <p>Loading...</p>
        )}
      </ConfigProvider>

      
      <Modal
        title="Cập nhật"
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
            form={formUpdate} // Pass the form instance to the Form component
          >
            <Form.Item
              label="Name"
              name="stationPoint"
              rules={[{ required: true, message: 'Please input station name!' }]}
            >
              <Input 
                type="text" 
                name="stationPoint" 
                value={stationPoint} 
                onChange={handleChangeUpdate} 
                placeholder="Station Point"
              />
            </Form.Item>
            <div style={{ textAlign: 'center' }}>
              <Button 
                type="primary" 
                onClick={handleDataUpdate} >
                Cập nhật
              </Button>
            </div>
          </Form>
        )}
      </Modal>
    </>
  );
};

export default App;
