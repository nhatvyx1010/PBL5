import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, LayoutFilled, MailFilled, TableOutlined, PicCenterOutlined } from '@ant-design/icons';
import './QuickAction.css';

function QuickAction() {
    const list = [
        { title: 'Layout 布局', icon: LayoutFilled, path: '/layout', iconColor: '#00DDFF' },
        { title: '基础表单', icon: MailFilled, path: '/basicForm', iconColor: '#37A2FF' },
        { title: '基础列表', icon: TableOutlined, path: '/basicTable', iconColor: '#FF0087' },
        { title: '走马灯', icon: PicCenterOutlined, path: '/rotation', iconColor: '#FFBF00' },
    ];

    return (
        <div className='flex-row flex-wrap aciton-content w100 h100'>
            {list.map((item, index) => (
                <Link to={item.path} className='aciton-item flex-column' key={index}>
                    {/* <Icon component={item.icon} style={{ color: item.iconColor }} /> */}
                    <span>{item.title}</span>
                </Link>
            ))}
        </div>
    );
}

export default QuickAction;
