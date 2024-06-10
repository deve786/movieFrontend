import React, { useEffect, useState } from 'react';
import { deleteMovie, fetchMovies } from './services/allAPI';

function Card() {
    const [movies, setMovies] = useState([]);
    const [filterYear, setFilterYear] = useState('');

    const accessMovies = async () => {
        const result = await fetchMovies();
        console.log(result.data);
        setMovies(result.data);
    };

    useEffect(() => {
        accessMovies();
    }, []);

    const handleFilterChange = (e) => {
        setFilterYear(e.target.value);
    };

    const filteredMovies = filterYear
        ? movies.filter((movie) => movie.year === filterYear)
        : movies;


    return (
        <div className="mt-5 p-5">
            <h2 className="text-2xl font-bold">Movies</h2>
            <div className='mt-6'>
                <h3 className='text-lg'>Filter by Year</h3>
                <select value={filterYear} onChange={handleFilterChange} className='border'>
                    <option value="">All</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                </select>
            </div>
            <div className='flex flex-wrap gap-3 justify-center'>
                {filteredMovies.map((movie) => (
                    <div key={movie.id} className="max-w-sm bg-white justify-between flex flex-col  rounded-lg shadow dark:bg-gray-800  mt-4 w-72">
                        <div className="relative h-52 w-full bg-gray-200">
                            <img className="rounded-t-lg h-full w-full object-cover" src={movie.image} alt={movie.name} />
                        </div>
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.name}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.year}</p>
                            <a onClick={() => {
                                deleteMovie(movie.id)
                                console.log('Deleted')
                            }} className="cursor-pointer inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 ">
                                Delete

                            </a>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default Card;
