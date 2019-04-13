import React from 'react';
import {
    isSignInPending,
    loadUserData,
    Person,
    getFile,
    putFile,
    lookupProfile
  } from 'blockstack';

const cardFileName = 'cards.json'
class Data extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          person: {
            name() {
              return 'Anonymous';
            },
            avatarUrl() {
              return avatarFallbackImage;
            },
          },
          username: "",
          deck: [],
          newCard: {
            term: "",
            definition: ""
          },
          cardIndex: 0,
          isLoading: false
        };
      }
    // componentDidMount() {
    // this.fetchData()
    // }

    handleNewCardChange(event) {
        this.setState({
          newCard: event.target.value
        })
      }
    
    handleNewCardSubmit(event) {
    this.saveNewCard(this.state.newCard)
    this.setState({
        newCard: {
            term: "",
            definition: ""
        },
    })
    }

    saveNewCard(cardText) {
        let cards = this.state.cards
    
        let term = {
          id: this.state.cardIndex++,
          text: statusText.trim(),
          created_at: Date.now()
        }
    
        statuses.unshift(status)
        const options = { encrypt: false }
        putFile(statusFileName, JSON.stringify(statuses), options)
          .then(() => {
            this.setState({
              statuses: statuses
            })
          })
      }

    render() {
        return (
            <>
        
            </>
        );
    }
}


export default Data
