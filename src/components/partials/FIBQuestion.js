import React from 'react';
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types';

class FIBQuestion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            answer: '',
            correct: ''
        }
    }
    answer(e) {
        this.setState({
            answer: e.target.value,
        });
    }
    handleCheckCorrect = () => {

        if (this.state.answer === this.props.text) {
            this.setState({
                correct: true
            })
        }else{
            this.setState({
                correct: false
            })
        }
    }

    render() {
        var correctBorder = '1px solid rgba(0,0,0,.1)'

        if (this.state.correct === true) {
            correctBorder = '1px solid green'
        }else if (this.state.correct ===false){
            correctBorder = '1px solid red'
        }
        
        var styles = {
            card: {
                display: 'flex',
                margin: '2%',
                marginTop: '50px',
                minHeight: '15vh',
                border: correctBorder,

            },
            word: {
                width: '30%',
                display: 'flex',
                alignItems: 'center',
                borderRight: '3px solid rgba(0,0,0,.1)',
                paddingLeft: '5%',
                margin: '1%'
            },
            text: {
                display: 'flex',
                alignItems: 'center',
                flex: '1',
                paddingLeft: '5%',
                paddingRight: '5%'
            }
        }
        return (
            <div style={styles.card}>
                <div style={styles.word}>
                    {this.props.word}
                </div>
                <div style={styles.text}>
                    <input
                        style={{ flex: '1', border: 'none' }}
                        type='text'
                        placeholder='Text goes here'
                        onChange={(e) => { this.answer(e) }}
                    />
                </div>
                <Button onClick={this.handleCheckCorrect}>Check</Button>
            </div>
        );
    }
}



FIBQuestion.propTypes = {

};

export default FIBQuestion
