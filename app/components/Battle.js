var React = require('react');
var Link = require('react-router-dom').Link;

class Battle extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        }

        this.handleSubmit = handleSubmit.bind(this);
    }

    handleSubmit(id, username){
        this.setState(function() {
            var newState = {};
            newState[id + 'Name'] = username;
            newState[id + 'Image'] = 'http://github.com/' + username + '.png?size=200';
            return newState;
        })
    }

    render() {
        return (
            <div>
                Battle!
            </div>
        )
    }
}

module.exports = Battle;