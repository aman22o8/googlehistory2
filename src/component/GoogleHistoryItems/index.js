import './index.css'

const GoogleHistoryItem = props => {
  const {historyItem, handlingDelete} = props
  const {timeAccessed, id, logoUrl, title, domainUrl} = historyItem
  const handleClick = () => {
    handlingDelete(id)
  }
  return (
    <li className="each_container">
      <div className="left_right_container">
        <div className="left_container">
          <p className="date_stamp">{timeAccessed}</p>
          <img src={logoUrl} alt="domain logo" className="site_logo" />
          <p className="heading">{title}</p>
          <p className="domain_url">{domainUrl}</p>
        </div>
        <button
          onClick={handleClick}
          type="button"
          data-testid="delete"
          className="delete_btn"
        >
          <img
            className="delete_icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default GoogleHistoryItem
