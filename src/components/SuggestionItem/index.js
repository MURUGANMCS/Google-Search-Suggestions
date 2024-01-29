// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsListDetails, onSuggestedValue} = props

  const {suggestion} = suggestionsListDetails

  const onSuggested = () => {
    onSuggestedValue(suggestion)
  }

  return (
    <li className="list-container">
      <div className="card">
        <p className="sugg-list">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
          onClick={onSuggested}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
