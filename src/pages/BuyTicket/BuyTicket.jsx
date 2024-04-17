import React, { useState } from 'react';
import type { CSSProperties } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Button, Input, message, Radio, Select, Space, Steps, Table } from 'antd';
import { ShoppingCartOutlined, UserOutlined, DollarOutlined, CaretRightOutlined  } from '@ant-design/icons';
import { ButtonDone, ButtonNext, ButtonPrevious, CustomRadioGroup, InfoCart, InfoUser, InputMember, NameUser, PNameUser, User } from './style';

const { Column } = Table;
const { Option } = Select;

interface DataType {
    key: string;
    name: string;
    type: string;
    documentNumber: string;
    age: number;
    address: string;
    tags: string[];
    info: string;
}
const text = `
- Tại các nhà ga, các điểm bưu cục VNPost, ngân hàng VIB, Payoo, Internet Banking
- Tại các nhà ga, các điểm bưu cục VNPost, ngân hàng VIB, Payoo, Internet Banking
`;
const getRadioItems: () => JSX.Element[] = () => [
{
  key: '1',
  label: 'Thanh toán trả sau bằng tiền mặt, internet banking tại các điểm giao dịch:',
},
{
  key: '2',
  label: 'Chuyển khoản',
},
].map(item => (
<Radio key={item.key} value={item.key}>
  {item.label}
</Radio>
));

const BuyTicket: React.FC = () => {
    const [current, setCurrent] = useState(0);
    const [dataSource, setDataSource] = useState([
        {
            key: '1',
            name: '',
            type: '',
            documentNumber: '',
            age: 0,
            address: '',
            tags: [],
            info: '',
        },
    ]);
    

    const handleInputChange = (value: string | number, key: string, dataIndex: string) => {
        const newData = [...dataSource];
        const index = newData.findIndex((item) => key === item.key);
        if (index > -1) {
            const item = newData[index];
            newData.splice(index, 1, { ...item, [dataIndex]: value });
            setDataSource(newData);
        }
    };

    const handleDelete = (key: string) => {
        const newData = [...dataSource];
        setDataSource(newData.filter((item) => item.key !== key));
    };

    const handleAddNewRow = () => {
        const newData = [...dataSource];
        newData.push({
            key: (dataSource.length + 1).toString(),
            name: '',
            type: '',
            documentNumber: '',
            age: 0,
            address: '',
            tags: [],
            info: '',
        });
        setDataSource(newData);
    };

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const steps = [
        {
            title: 'Nhập thông tin khách hàng',
            content: 'First-content',
        },
        {
            title: 'Xác nhận thông tin',
            content: 'Second-content',
        },
        {
            title: 'Thanh toán',
            content: 'Last-content',
        },
        {
            title: 'Hoàn tất',
            content: 'Last-content',
        },
    ];

    const items = steps.map((item) => ({ key: item.title, title: item.title }));
    const [paymentMethod, setPaymentMethod] = useState(1);
    const onChangePaymentMethod = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPaymentMethod(parseInt(e.target.value));
    };
   
    return (
        <div style={{ padding: '3% 8%' }}>
            <Steps current={current} items={items} />
            <div style={{ border: '3px solid #CAF8F8', marginTop: '10px', padding: '20px' }}>
                <InfoCart>
                    <ShoppingCartOutlined style={{ fontSize: '20px', verticalAlign: 'middle', marginLeft: '8px' }} />
                    <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0', verticalAlign: 'middle', margin: '7px', fontWeight: '400' }}>Thông tin giỏ vé</p>
                </InfoCart>
                <Table dataSource={dataSource} pagination={false}>
                    <Column
                        title="Họ và tên"
                        dataIndex="name"
                        key="name"
                        width="25%"
                        render={(text, record) => (
                            <div>
                                <Input
                                    style={{ marginBottom: '8px', width: '100%' }}
                                    value={record.name}
                                    onChange={(e) => handleInputChange(e.target.value, record.key, 'name')}
                                    placeholder="Họ và tên"
                                />
                                <Select
                                    style={{ marginBottom: '8px', width: '100%' }}
                                    value={record.type}
                                    onChange={(value) => handleInputChange(value, record.key, 'type')}
                                    placeholder="Đối tượng"
                                >
                                    <Option value="nguoiLon">Người lớn</Option>
                                    <Option value="treEm">Trẻ em</Option>
                                    <Option value="emBe">Em bé</Option>
                                </Select>
                                <Input
                                    style={{ marginBottom: '8px', width: '100%' }}
                                    value={record.documentNumber}
                                    onChange={(e) => handleInputChange(e.target.value, record.key, 'documentNumber')}
                                    placeholder="Số giấy tờ"
                                />
                            </div>
                        )}
                    />
                    <Column
                        title="Thông tin chỗ"
                        dataIndex="info"
                        key="info"
                        render={(text, record) => (
                            <div>
                                <div>SP4 Đông Anh - Hà Nội</div>
                                <div>18/04/2024 04:27</div>
                                <div>Toa 1 chỗ 22</div>
                                <div>Nằm khoang 4 điều hòa T1</div>
                            </div>
                        )}
                    />
                    <Column
                        title="Giá vé"
                        dataIndex="price"
                        key="price"
                        render={(text, record) => (
                            <div>75000</div>
                        )}
                    />
                    <Column
                        title="Khuyến mãi"
                        dataIndex="tags"
                        key="tags"
                        render={(text, record) => (
                            <div>Không có khuyến mại cho vé này</div>
                        )}
                    />
                    <Column
                        title="Thành tiền"
                        dataIndex="total"
                        key="total"
                        render={(text, record) => (
                            <div>75000</div>
                        )}
                    />
                    <Column
                        title="Xóa"
                        dataIndex="operation"
                        render={(text, record) =>
                            dataSource.length >= 1 ? (
                                <Button onClick={() => handleDelete(record.key)}>Xóa</Button>
                            ) : null
                        }
                    />
                </Table>
                <InfoUser>
                    <InfoCart style={{ width: '230px' }}>
                        <UserOutlined style={{ fontSize: '20px', verticalAlign: 'middle', marginLeft: '8px', color: 'red' }} />
                        <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0', verticalAlign: 'middle', margin: '7px', fontWeight: '400', color: 'red' }}>Thông tin người đặt vé</p>
                    </InfoCart>
                    <p style={{ fontSize: '15px' }}>Quý khách vui lòng điền đẩy đủ và chính xác các thông tin về người mua vé dưới đây. Các thông tin này sẽ được sử dụng để xác minh người mua vé và lấy vé tại ga trước khi lên tàu theo đúng các quy định của Tổng công ty Đường sắt Việt Nam.</p>
                    <User>
                        <NameUser>
                            <PNameUser>Họ và tên</PNameUser>
                            <div style={{ position: 'relative' }}>
                                <Input
                                    placeholder="Họ và tên"
                                    style={InputMember}
                                />
                            </div>
                        </NameUser>
                        <NameUser>
                            <PNameUser>Email</PNameUser>
                            <div style={{ position: 'relative' }}>
                                <Input
                                    placeholder="Email"
                                    style={InputMember}
                                />
                            </div>
                        </NameUser>
                        <NameUser>
                            <PNameUser>Số CMND/CCCD</PNameUser>
                            <div style={{ position: 'relative' }}>
                                <Input
                                    placeholder="Số CMND/CCCD"
                                    style={InputMember}
                                />
                            </div>
                        </NameUser>
                        <NameUser>
                            <PNameUser>Số điện thoại</PNameUser>
                            <div style={{ position: 'relative' }}>
                                <Input
                                    placeholder="Số điện thoại"
                                    style={InputMember}
                                />
                            </div>
                        </NameUser>
                    </User>
                </InfoUser>
                <InfoUser>
                    <InfoCart style={{ width: '230px' }}>
                        <DollarOutlined style={{ fontSize: '20px', verticalAlign: 'middle', marginLeft: '8px', color: 'red' }} />
                        <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '0', verticalAlign: 'middle', margin: '7px', fontWeight: '400', color: 'red' }}>Phương thức thanh toán</p>
                    </InfoCart>
                    <CustomRadioGroup onChange={onChangePaymentMethod} value={paymentMethod}>
                        <Space direction="vertical">
                            <Radio value={1}>Thanh toán trả sau bằng tiền mặt, internet banking tại các điểm giao dịch: tại các nhà ga, các điểm bưu cục VNPost, ngân hàng VIB, Payoo, Internet Banking</Radio>
                            <Radio value={2}>Chuyển khoản</Radio>
                        </Space>
                    </CustomRadioGroup>
                </InfoUser>
            </div>
            <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {current > 0 && (
                    <ButtonPrevious style={{ margin: '8px' }} onClick={() => prev()}>
                        Previous
                    </ButtonPrevious>
                )}
                {current < steps.length - 1 && (
                    <ButtonNext type="primary" onClick={() => next()}>
                        Next
                    </ButtonNext>
                )}
                {current === steps.length - 1 && (
                    <ButtonDone type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </ButtonDone>
                )}
            </div>
        </div>
    );
};

export default BuyTicket;
