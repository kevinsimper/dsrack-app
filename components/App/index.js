import React from 'react'
import styles from './style.scss'
import AppBar from 'material-ui/lib/app-bar'
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import theme from '../../theme/dsrack'
import Games from '../Games'

export default class App extends React.Component {
  static childContextTypes = {
    muiTheme: React.PropTypes.object,
  };
  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(theme)
    }
  }
  render() {
    return (
      <div>
        <AppBar title="DS RACK"/>
        <div className={styles.Main}>
          <Games/>
        </div>
      </div>
    )
  }
}
