import HeaderComponentUser from "../HeaderComponentUser/HeaderComponentUser";
import PropTypes from 'prop-types';

const DefaultComponentUser = ({children}) => {
    return (
        <div>
            <HeaderComponentUser />
            {children}
        </div>
    )
}
DefaultComponentUser.propTypes = {
    children: PropTypes.node.isRequired,
};
export default DefaultComponentUser