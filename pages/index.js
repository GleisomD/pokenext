import styles from '../styles/Home.module.css'

export async function getStaticProps() {
    
    const maxPokemons = 386
    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const res = await fetch(`${api}/?limit=${maxPokemons}`) // request using fetch api, can be used Axios too. Its used limit to limited the numbers of API request
    const data = await res.json() // Calling the API data and transforming these data in object

    //Add Pokemon Index
    data.results.forEach((item, index) => {
        item.id = index + 1
    })

    return {
        props: {
            pokemons: data.results,
        },
    }
}

export default function Home({pokemons}) {
    return (<div>
            <h1>PokeNext</h1>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.id}>{pokemon.name}</li>
                ))}
            </ul>
        </div>)
}