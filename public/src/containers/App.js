import { connect } from 'react-redux';
import actions from '../actions/counter';
import actions2 from '../actions/infoMember';

import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.add = this.add.bind(this);
        this.reduce = this.reduce.bind(this);
        this.changeInfo = this.changeInfo.bind(this);
    }

    componentDidMount() {
        console.log(this.props.infoMember);  // {}
    }

    add() {
        this.props.dispatch(actions.increment());
        this.props.dispatch(actions2.setInfoMember({
            id: '28377383',
            script: 'Try my best'
        }));
    }

    reduce() {
        this.props.dispatch(actions.decrement());
    }

    changeInfo() {
        this.props.dispatch(actions2.changInfo('Come on'));
    }

    render() {
        return (
            <div>
                <p>
                    Click: {this.props.counter} times
                    {'   '}
                    <button onClick={this.add}>+</button>
                    {'   '}
                    <button onClick={this.reduce}>-</button>
                    {'   '}
                </p>
                <p onClick={this.changInfo}>this.props.infoMember:
                {this.props.infoMember.id}--{this.props.infoMember.script}</p>
            </div>
        )
    }
}

//将state.counter绑定到props的counter
// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter
//     }
// };

//将action的所有方法绑定到props上
// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         increment: (...args) => dispatch(actions.increment(...args)),
//         decrement: (...args) => dispatch(actions.decrement(...args))
//     }
// };

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
export default connect(state => (state))(Counter);
