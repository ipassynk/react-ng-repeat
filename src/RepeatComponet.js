import React, {Component} from 'react'

class RepeatComponet extends Component {
    render() {
        let children = [];
        for (let i = 0; i < this.props.count; i++) {
            children.push(React.cloneElement(this.props.children, {count: 0, key: i}));
        }

        return (
            <div>{children}</div>
        );
    }
}

export default RepeatComponet;