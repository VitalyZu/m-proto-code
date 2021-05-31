import React from 'react';
import Chat from './components/Chat';
import Time from './components/Time';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swipe: '',
      swipeStart: '',
      view: true,
      text: '',
      messages: ['Hello!']
    }
  }

  onEditMessage(e) {
    this.setState({text: e.target.value});
  }

  onSendMessage() {
    if(!this.state.text) return;
    this.setState(function(state){
      return {messages: [...state.messages, state.text], text: ''}
    });
  }

  onSwipe() {
    if(!this.state.swipe) {
      this.setState(function(state){
        return {swipe: 'swipe', view: !state.view}
      });
    } else {
      this.setState(function(state){
        return {swipe: '', view: !state.view}
      });
    } 
  }

  mouseDown(e) {
    this.setState({swipeStart: e.clientX});
  }

  mouseUp(e) {
    if(this.state.view) {
      if( (this.state.swipeStart - e.clientX) > 30 && this.state.view) this.onSwipe();
    } else {
      if( (e.clientX - this.state.swipeStart) > 30 &&  !this.state.view) this.onSwipe();
    }
  }

  render() {
    return (
      <div className="app"
        onMouseDown={this.mouseDown.bind(this)}
        onMouseUp={this.mouseUp.bind(this)}>
        <Chat 
          {...this.state}
          handler={{
            swipe: this.onSwipe.bind(this),
            txt: this.onEditMessage.bind(this),
            btn: this.onSendMessage.bind(this)
          }}
        />
        <Time {...this.state} />
      </div>
    );
  } 
}

export default App;
