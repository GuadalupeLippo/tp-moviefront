import React from "react";

import { Modal } from "./modal";
import { useState } from "react";

export function MovieCard({movie}) {

   const [verModal, setVerModal]= useState(false)

        return (  
      <div className="card" id={movie.id}>  
        
        <div className="card-body">
            <img src={movie.poster} className="img"/>
            <h5 className="card-title text-secondary text-center">{movie.title}</h5>
            <button type="button" className="btn btn-dark" onClick={()=>{setVerModal(true)}}>Ver mas</button>
            {verModal && <Modal movie={movie} key={movie.id} cerrarModal={setVerModal}/>}
        </div>  
        
    </div>
   ) 
}
