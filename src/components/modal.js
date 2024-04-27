import React from 'react';

export function Modal({movie, cerrarModal}) {
    return (
        <div className='modalBackground' id={movie.id}>
            <div className='modalContainer' >
            <p className="text text-dark text-center">Año:{movie.year}</p>
            <p className="text text-dark text-center">Director:{movie.director}</p>
            <p className="text text-dark text-center">Duración:{movie.duration}</p>
            <p className="text text-dark text-center">Rating:{movie.rate}</p>
            <p className="text text-dark text-center">Género:{movie.genre}</p>
            <button type="button" className="btn btn-light" onClick={()=>{cerrarModal(false)}}>cerrar</button>
            </div>
        </div>
    );
}

