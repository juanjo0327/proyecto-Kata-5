import React, {useState}  from 'react';
import Card from "../components/Card";
import ListCard from "../components/ListCard";
import '../estilosInicio.css';

const API_KEY = "2dbc6cfb9f0b204e19642c36f4bd9762";

function CreateCard() {

    React.useEffect(() => {
        getPeliculas();
    }, []);

    const [peliculasArray, setPeliculas] = useState([]);


    const getPeliculas = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=es&page=1`);
        const peliculas = await response.json();
        setPeliculas(peliculas.results);
    }

    return(
        <>
          <ListCard>
                {peliculasArray.map((peliculaInArray, index) => <Card key={index} peliculas={peliculaInArray}/>)}
          </ListCard> 
        </>
    );
}

export default CreateCard;