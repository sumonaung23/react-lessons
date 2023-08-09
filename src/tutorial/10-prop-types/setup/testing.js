import React from 'react';
import PropTypes from 'prop-types';

const testing = () => {
    return (
        <div></div>
    );
}

testing.propTypes = {
    name:PropTypes.array.isRequired,
}

export default testing;
