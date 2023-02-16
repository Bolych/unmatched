const Arthur = ( {state} ) => {
    return <div>
        <div>
        <p>Name:{state.name}</p>
        </div>
        <div>Power: {state.power}</div>
        <div>Difficulty: {state.difficulty}</div>
        <div>Origin: {state.origin}</div>
        <div>Description: {state.description}  </div>
        <div>Tactics: {state.tactics}  </div>
    </div>
}

export default Arthur
