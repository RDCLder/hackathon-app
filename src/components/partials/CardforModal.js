import React from 'react';
import { Row, Col, Modal, Button, Alert, Card } from "react-bootstrap";

class CardforModal extends React.Component {

    render() {
        return (
            <div style = {styles.cardRow}>
                <Card style = {styles.card}>
                    <div style = {styles.cardHeader}>Question</div>
                    <div style = {styles.content}>{this.props.cardInfo.word}</div>
                </Card >
                <Card style = {styles.card}>
                    <div style = {styles.cardHeader}>Answer</div>
                    <div style = {styles.content}>{this.props.cardInfo.text}</div>
                </Card>
            </div>
        );
    }
}

const styles = {
    cardRow: {
        display:'flex',
        borderBottom: 'solid rgba(0,0,0,.1) 1px'
    },
    card: {
        boxShadow: '1px 1px 3px 1px',
        width:'50vw',
        height:'20vw',
        margin:'2vw',
        display:'flex',
        flexDirection: 'column'
    },
    cardHeader:{
        textAlign: 'center',
        borderBottom: 'solid rgba(0,0,0,.1) 1px'
    },
    content:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexGrow: '1'
    }
}

export default CardforModal;
