// Write your code here
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onSuggestedValue = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props

    const filterSerachInput = suggestionsList.filter(eachList =>
      eachList.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-img"
        />
        <div className="card-container">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              className="search-input"
            />
          </div>

          <ul className="list-container">
            {filterSerachInput.map(eachList => (
              <SuggestionItem
                suggestionsListDetails={eachList}
                key={eachList.id}
                onSuggestedValue={this.onSuggestedValue}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
