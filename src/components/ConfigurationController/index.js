// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onCheckedShowContent = () => {
        onToggleShowContent()
      }

      const onCheckedShowLeftContent = () => {
        onToggleShowLeftNavbar()
      }

      const onCheckedShowRightContent = () => {
        onToggleShowRightNavbar()
      }

      return (
        <nav className="nav-header">
          <h1>Layout</h1>
          <label>
            <input
              type="checkbox"
              checked={showContent}
              onChange={onCheckedShowContent}
            />
            Content
          </label>

          <label>
            <input
              type="checkbox"
              checked={showLeftNavbar}
              onChange={onCheckedShowLeftContent}
            />
            Left NavBar
          </label>

          <label>
            <input
              type="checkbox"
              checked={showRightNavbar}
              onChange={onCheckedShowRightContent}
            />
            Right NavBar
          </label>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
