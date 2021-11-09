import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class NoUserRoute extends React.Component {
    render() {
      const { hasUser, ...restProps } = this.props;
   
      return !hasUser ? <Route {...restProps} /> : <Redirect to="/" />;
    }
}

NoUserRoute.propTypes = {
    hasUser: PropTypes.bool.isRequired
}

export default NoUserRoute;