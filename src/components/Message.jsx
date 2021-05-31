import React from 'react';

class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: props.value,
            output: '',
            iterator: 0
        }  
    }

    componentDidMount(){
        let that = this;
        let msg = this.state.text.split('');
        function timeout(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        async function draw(ms) {
            await timeout(ms);
            that.setState((state) => {
                let value = msg[that.state.iterator]
                return {output: state.output + value, iterator: state.iterator + 1}
            });
            if(that.state.text !== that.state.output) draw(50 - that.state.iterator);
        }
        draw(250);
    }

    render() {
        return (
            <div className='chat-message-wrapper'>
                <div className='chat-message'>{this.state.output}</div>
            </div>
        );
    } 
}

export default Message;