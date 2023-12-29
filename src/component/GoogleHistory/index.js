import './index.css'

import {Component} from 'react'
import GoogleHistoryItem from '../GoogleHistoryItems/index'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class GoogleHistory extends Component {
  state = {initialSearch: '', initialHistory: initialHistoryList}

  searchableITem = event => this.setState({initialSearch: event.target.value})

  handleDeleteButton = value => {
    const {initialHistory} = this.state
    const filteredHistory = initialHistory.filter(each => each.id !== value)
    this.setState({initialHistory: filteredHistory})
  }

  render() {
    const {initialSearch, initialHistory} = this.state
    console.log(initialSearch)
    const searchableList = initialHistory.filter(each =>
      each.title.toLowerCase().includes(initialSearch.toLowerCase()),
    )
    console.log(searchableList)

    return (
      <>
        <div className="header_container">
          <img
            className="history_image"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search_container">
            <img
              className="search_icon"
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
            />
            <input
              onChange={this.searchableITem}
              value={initialSearch}
              type="search"
              placeholder="Search History"
              className="search_input"
            />
          </div>
        </div>
        <div className="footer_container">
          {searchableList.length > 0 ? (
            <ul className="list_container">
              {searchableList.map(each => (
                <GoogleHistoryItem
                  handlingDelete={this.handleDeleteButton}
                  key={each.id}
                  historyItem={each}
                />
              ))}
            </ul>
          ) : (
            <p className="no_history">There is no history to show</p>
          )}
        </div>
      </>
    )
  }
}

export default GoogleHistory
