import { useEffect, useState } from "react";

function useApiRick() {
    const [character, setCharacter] = useState(2);
    const [all, setAll] = useState(null);
    const [data, setData] = useState(null);
    const [filtered, setFiltered] = useState([]);

    const getData = async(url, setDatos) => {
        const res = await fetch(url);
        const datos = await res.json();

        setDatos(datos);
    };

    useEffect(() => {
        if(!isNaN(character)){
            getData(`https://rickandmortyapi.com/api/character/${character}`, setData);
        } else {
            getData(`https://rickandmortyapi.com/api/character/?name=${character}`, setData);
        }
    }, [character]);

    useEffect(() => {
        getData("https://rickandmortyapi.com/api/character", setAll);
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const characterName = e.target[0].value.trim();
        if(!isNaN(characterName)){
            setCharacter(parseInt(characterName));
        } else {
            setCharacter(characterName);
        }
        setFiltered([]);
    };

    return{data, handleSubmit};

}
export default useApiRick;