import HeaderComponent from "../HeaderComponent/HeaderComponent";
import PropTypes from 'prop-types';

const DefaultComponent = ({children}) => {
    return (
        <div>
            <HeaderComponent />
            {children}
        </div>
    )
}

DefaultComponent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultComponent