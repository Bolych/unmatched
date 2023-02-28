
const ExpansionButton = (props) => {
    const addExpansion = () => {
        props.setVisibleHeroes(
        props.heroesArr.push(...props.expansionPack),
     props.setVisibleHeroes(props.heroesArr))
    }

    return (
        <div>
            <div>
                <button onClick={addExpansion}>{props.name}</button>
            </div>
            <br/>
        </div>
    );
}

export default ExpansionButton