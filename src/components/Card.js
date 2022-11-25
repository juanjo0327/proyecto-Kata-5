import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import '../estilosInicio.css';

export default function MediaControlCard(peliculas) {
  let backdrop_path = peliculas.peliculas.backdrop_path;
  let imgMovie = `https://image.tmdb.org/t/p/w500${backdrop_path}`;


  return (
    <div style={{display: 'inline-block', 
    width: '25vw',
    marginLeft: '60px',
    }}>
            <Card className="CardStyle" sx={{ display: 'inline-block', bgcolor: '#bbb'}}>
              <Box sx={{ display: 'flex'}}>
                <CardContent sx={{ flex: '1'}}>
                  <Typography component="div" variant="h5">
                    {peliculas.peliculas.id}
                  </Typography>
                  <Typography variant="subtitle1" color="text.primary" component="div">
                  {peliculas.peliculas.title}
                  </Typography>
                </CardContent>
                <CardMedia
                component="img"
                sx={{ width: 130, height: 130}}
                image={imgMovie}
                />
              </Box>
            </Card>
    </div>
      
    )
}