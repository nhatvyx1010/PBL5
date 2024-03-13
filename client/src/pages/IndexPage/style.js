import { Radio } from 'antd';
import styled from 'styled-components';

export const CustomRadioGroup = styled(Radio.Group)`
    .ant-radio-checked .ant-radio-inner {
        border-color: #079DD9; /* Màu khung viền khi được chọn */
        background-color: #079DD9; /* Màu nền khi được chọn */
    }

    .ant-radio-inner::after {
        background-color: #079DD9; /* Màu chấm bên trong khi được chọn */
    }
`;
