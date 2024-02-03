import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


export default function HCard({ d, t, i }) {
  return (
    <Card className="hcard"sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={i.src}
        title="green iguana"
      />
      <CardContent>
        <h1>
          {t}
        </h1>
        <p>
          {d}
        </p>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}