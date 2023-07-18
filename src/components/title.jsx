import React from 'react';

const Title = ({ subtitle }) => (
    <div className='box' style={{ padding: 0 }}>
        <h2 className='header-title'>{subtitle}</h2>

        <p className='header-description'>Use this form to express interest in rotation or a graduate student position at Thakur Lab.</p>

        <hr style={{ margin: 0 }} />

        <p className='required-text'>* Indicates required question</p>
    </div>
);

export default Title;