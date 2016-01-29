import React from 'react'
import styles from './style.scss'
import Card from 'material-ui/lib/card/card'
import CardHeader from 'material-ui/lib/card/card-header'
import CardMedia from 'material-ui/lib/card/card-media'

export default class Game extends React.Component {
  render() {
    let game = this.props.item.Game
    return (
      <div className={styles.Game}>
        <Card>
          <CardHeader
            title={game.display_name}
            subtitle={game.homepage} />
          <CardMedia>
            <img src='http://i.imgur.com/UzQQvFS.jpg'/>
          </CardMedia>
        </Card>
      </div>
    )
  }
}
