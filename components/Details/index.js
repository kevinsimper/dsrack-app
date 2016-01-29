import React from 'react'
import styles from './style.scss'
import Card from 'material-ui/lib/card/card'
import data from '../Games/games.json'

export default class Details extends React.Component {
  render() {
    let game = data.games[0].Game
    return (
      <div className={styles.Details}>
        <Card className={styles.Cover}>
          <img src={'http://i.imgur.com/UzQQvFS.jpg'} style={{maxWidth: '100%'}}/>
        </Card>
        <Card className={styles.Info}>
          <h1>
            {game.display_name}
          </h1>
          <a href={game.homepage}>{game.homepage}</a>
          <p>
            {game.description}
          </p>
        </Card>
      </div>
    )
  }
}
