import React from 'react'
import styles from './style.scss'
import Card from 'material-ui/lib/card/card'
import CardTitle from 'material-ui/lib/card/card-title'
import CardMedia from 'material-ui/lib/card/card-media'

var covers = [
  'http://i.imgur.com/UzQQvFS.jpg',
  'http://www.madplayer.net/wp-content/uploads/2015/11/1410597954_counter_strike_source-cover.jpg',
  'http://images.complex.com/complex/image/upload/t_article_image/jmub4shwxh5bta6julbm.jpg',
  'http://images.complex.com/complex/image/upload/t_article_image/zhjnanclgx7fsxffnkms.jpg',
  'http://images.complex.com/complex/image/upload/t_article_image/xpmvu3p77pslw4xrxfxx.jpg',
  'http://images.complex.com/complex/image/upload/t_article_image/uwmorjrgifvaahdzp4b9.jpg'
]

export default class Game extends React.Component {
  render() {
    let game = this.props.item.Game
    return (
      <div className={styles.Game}>
        <Card>
          <CardMedia
            overlay={<CardTitle title={game.display_name} subtitle={game.homepage} />}
            >
            <img src={covers[Math.floor(Math.random() * covers.length)]}/>
          </CardMedia>
        </Card>
      </div>
    )
  }
}
