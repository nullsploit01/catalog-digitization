import { ICustomCardProps } from './interface'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { FC, Fragment } from 'react'

const CustomCard: FC<ICustomCardProps> = ({ image, content, actions }) => {
  return (
    <Card variant="outlined" sx={{ width: 345, textWrap: 'wrap', overflow: 'auto' }}>
      {image && <CardMedia sx={{ height: 140, py: 8 }} image={image} />}
      <CardContent>
        <Fragment>{content}</Fragment>
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
