import { ICustomCardProps } from './interface'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { FC, Fragment } from 'react'

const CustomCard: FC<ICustomCardProps> = ({ image, content, actions }) => {
  return (
    <Card
      variant="outlined"
      sx={{ width: 345, textWrap: 'wrap', overflow: 'auto', borderRadius: '5%', boxShadow: 7 }}
    >
      {image && <CardMedia sx={{ height: 140, p: 8 }} image={image} />}
      <CardContent>
        <Fragment>{content}</Fragment>
      </CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  )
}

export default CustomCard
