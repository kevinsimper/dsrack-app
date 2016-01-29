import React from 'react'
import Game from '../Game'
import data from './games.json'
import styles from './style.scss'

export default class Games extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.Gameslist}>
          {data.games.map(item => <Game item={item}/>)}
        </div>
      </div>
    )
  }
}
