import { Button } from "antd";
import PropTypes from 'prop-types';

const ButtonComponent = ({size, styleButton, styleTextButton, textButton, disabled, ...rests}) => {
    return (
        <Button
            style={{
                ...styleButton,
                background: disabled ? '#ccc' : styleButton.background
            }}
            size={size} 
            {...rests}
            //icon={<SearchOutlined style={{color:'colorButton'}} />}
            >
            <span style={styleTextButton}>{textButton}</span>
        </Button>
    );
}
ButtonComponent.propTypes = {
    size: PropTypes.string,
    styleButton: PropTypes.object,
    styleTextButton: PropTypes.object,
    textButton: PropTypes.string,
    disabled: PropTypes.bool,
    rests: PropTypes.object, // Nếu có bất kỳ props nào khác không được xác định trước
};
export default ButtonComponent;
