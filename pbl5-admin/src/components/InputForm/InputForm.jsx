import { WrapperInputStyle } from "./style";
import PropTypes from 'prop-types';

const InputForm = (props) => {
    const {placeholder='Nhập text', ...rests} = props
    const handleOnChangeInput = (e) => {
        props.onChange(e.target.value)
    }
    return (
            <WrapperInputStyle placeholder={placeholder} value={props.value} {...rests} onChange={handleOnChangeInput} />
    )
}
InputForm.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
};
export default InputForm