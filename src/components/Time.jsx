import React from 'react';

class Time extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        }  
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()});
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className={'time ' + this.props.swipe}>
                <div className='time-wrapper'>
                    {this.state.time}
                </div>        
            </div>
        )
    }  
}

export default Time;