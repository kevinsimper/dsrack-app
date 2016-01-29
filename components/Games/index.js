import React from 'react'
import Game from '../Game'
import data from './games.json'
import styles from './style.scss'

export default class Games extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.Gameslist}>
          {data.games.map((item, key) => <Game key={key} item={item}/>)}
        </div>
      </div>
    )
  }
}
