const ResetButton = (props) => {
    function reset() {
        props.heroesArr.splice(0)
        props.setVisibleHeroes(props.heroesArr)
    }
    return (
        <div>
<button onClick={reset}>Reset</button>
        </div>
    )
}

export default ResetButton