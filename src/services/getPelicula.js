let API_KEY = "2dbc6cfb9f0b204e19642c36f4bd9762";

const getPeliculas = async () =>{
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=es&page=1`);
        const trainers = await res.json();
        console.log(trainers)
        // if (!res.ok) {
        //     console.log(res);
        // }
    } catch (error) {
        console.log(error);
    } finally {
        // setLoading(false)
    }
}

// const getTrainers = async () => {
//     const response = await fetch(`${URL}/trainers`);
//     const trainers = await response.json();
//     console.log(trainers)
//     setTrainersArray(trainers)
// }