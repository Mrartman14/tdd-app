import React from 'react';

import './layout.css';

class Layout extends React.PureComponent {
    render() {
        return (
            <div className="layout">
                {this.props.children}
            </div>
        );
    }
}

export {
    Layout,
};