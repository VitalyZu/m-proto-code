import React from 'react';
import Message from './Message';
import _ from 'lodash';

class Chat extends React.Component {
    constructor(props) {
        super(props);
    }

    onSwipe = function(){
        this.setState({chatClassname: 'hide-chat'});
    }

    render() {
        return (
            <div className={'chat-wrapper ' +  this.props.swipe } >
                <div className="chat">
                    <div className='input-wrapper'>
                        <textarea 
                            rows = "5"
                            onChange = {this.props.handler.txt}
                            value = {this.props.text}
                            onKeyUp={(e)=>{
                                if (e.key === 'Enter') {
                                    this.props.handler.btn();
                                } else if (e.keyIdentifier === 'Enter') {
                                    this.props.handler.btn();
                                } else if (e.keyCode === 13) {
                                    this.props.handler.btn();
                                }
                            }}>
                        </textarea>
                        <button
                            onClick={this.props.handler.btn}
                        >Send</button>
                    </div>
                    <div className='chat-messages' id='chat' ref={(inputRef)=>this.inputRef = inputRef}>
                            { this.props.messages.map(function(value, index){
                                return (
                                    <Message key={index} value={value}/>
                                )
                            })}
                    </div>
                </div>
             </div>
        );
    } 
}

export default Chat;