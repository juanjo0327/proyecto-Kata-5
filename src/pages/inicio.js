import '../estilosInicio.css';
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ListCard from '../components/ListCard';
import Card from '../components/Card';


const API_KEY = "2dbc6cfb9f0b204e19642c36f4bd9762";

const PageInicio = () => {

  const [peliculaGenero, setPeliculaGenero] = React.useState(28);
  const [peliculasForGenero, setPeliculasForGenero] = React.useState(28);
  
  // React.useEffect( async () => {
  //   const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
  //   const peliculas = await response.json();
  //   console.log(peliculas.genres[0]);
  // }, []); 

  const handleChange = async (event) => {
    event.preventDefault()
    const value = event.target.value;
    setPeliculaGenero(value);
    obtenerPeliculasGeneros(value);
  };

  const obtenerPeliculasGeneros = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    const peliculas = await response.json();
    for(let i = 0; i < 19; i++){
        if(peliculas.genres[i].id === id){
          const genre = peliculas.genres[i].id;
  
          const genreData = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genre}`)

          const genreMovie = await genreData.json();
          setPeliculasForGenero(genreMovie.results);
      }
    }
  }


  return (
    <>
        <div>
          <FormControl sx={{ m: 1, minWidth: 120, bgcolor: 'white', borderRadius: '5px', marginLeft: '45vw'}}>
            <Select
              value={peliculaGenero}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value={28}>Accion</MenuItem>
              <MenuItem value={12}>Aventura</MenuItem>
              <MenuItem value={16}>Animados</MenuItem>
              <MenuItem value={35}>Comedia</MenuItem>
              <MenuItem value={80}>Crimen</MenuItem>
              <MenuItem value={99}>Documentales</MenuItem>
              <MenuItem value={18}>Drama</MenuItem>
              <MenuItem value={10751}>Familiar</MenuItem>
              <MenuItem value={18}>Fantasia</MenuItem>
              <MenuItem value={14}>Historia</MenuItem>
              <MenuItem value={27}>Horror</MenuItem>
              <MenuItem value={10402}>Musicales</MenuItem>
              <MenuItem value={9648}>Misterio</MenuItem>
              <MenuItem value={10749}>Romance</MenuItem>
              <MenuItem value={878}>Ciencia Ficcion"</MenuItem>
              <MenuItem value={10770}>TV Movie</MenuItem>
              <MenuItem value={53}>Thriller</MenuItem>
              <MenuItem value={10752}>Guerra</MenuItem>
              <MenuItem value={37}>Oeste</MenuItem>
            </Select>
          </FormControl>
          {/* <ListCard id="cardList">
              {peliculasForGenero.map((peliculaInArray, index) => <Card key={index} peliculas={peliculaInArray}/>)}
          </ListCard>  */}
    </div>
    </>
  )
}

export default PageInicio