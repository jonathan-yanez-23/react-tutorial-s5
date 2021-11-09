//
import React from "react";
import {Route, Redirect} from "react-router-dom";
import PropTypes from "prop-types"

// CSS
import "./SecureRoute.css";


class SecureRoute extends React.Component {
    render() {
        const { hasUser, ...restProps} = this.props;
        return hasUser ? <Route {...restProps}/>: <Redirect to="/"></Redirect>;
    }
}

SecureRoute.propTypes = {
    hasUser: PropTypes.bool.isRequired
}

export default SecureRoute;