import { ICustomCardProps } from './interface'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

const CustomCard: FC<ICustomCardProps> = ({ image, title, description, actions }) => {
  return (
    <Card variant="outlined" sx={{ maxWidth: 345 }}>
      {image && (
        <CardMedia sx={{ height: 140 }} image="/static/images/cards/contemplative-reptile.jpg" />
      )}

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {actions && actions.length && (
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      )}
    </Card>
  )
}

export default CustomCard
