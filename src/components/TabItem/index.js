// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, updateTabId, isActive} = props
  const {tabId, displayText} = tabItem

  const changeTabId = () => {
    updateTabId(tabId)
  }

  const changeStyles = isActive ? 'active-styles' : ''

  return (
    <li className="tab-list-item">
      <button
        type="button"
        className={`tab ${changeStyles}`}
        onClick={changeTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
