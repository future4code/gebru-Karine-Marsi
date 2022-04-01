import React from 'react';
import { useNavigate } from 'react-router-dom';


const HomePage = () =>{

    const navigate = useNavigate ()
    return (
        <div>
            <h1>Labex</h1>
            <div>
                <button>Ver Viagens</button>
                <button> Área Admin</button>
            </div>
        </div>
    )
}

export default HomePage;