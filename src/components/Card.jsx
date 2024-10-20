function Card({ data }) {
    if (!data) {
        return <p>Loading...</p>;
    }

    // Si `data.results` existe, significa que es una búsqueda por nombre y devuelve múltiples personajes
    if (data.results) {
        return (
            <section>
                <h2>Resultados de la búsqueda</h2>
                {data.results.map((character) => (
                    <div key={character.id}>
                        <h3>{character.name}</h3>
                        <img src={character.image} alt={character.name} />
                        <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Status</th>
                        <th>Especie</th>
                        <th>Género</th>
                        <th>Origen</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{character.id}</td>
                        <td>{character.status}</td>
                        <td>{character.species}</td>
                        <td>{character.gender}</td>
                        <td>{character.origin.name}</td>
                    </tr>
                </tbody>
            </table>
                    </div>
                ))}
            </section>
        );
    }

    // Si no hay `data.results`, significa que es un solo personaje
    return (
        <section>
            <div>
                <h1>{data.name}</h1>
            </div>
            <div>
                <img src={data.image} alt={data.name} />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Status</th>
                        <th>Especie</th>
                        <th>Género</th>
                        <th>Origen</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.status}</td>
                        <td>{data.species}</td>
                        <td>{data.gender}</td>
                        <td>{data.origin.name}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
export default Card;
