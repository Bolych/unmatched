

const EloProbability = (props) => {
    function probability(rating1, rating2) {

        return Math.floor(
            ((1.0 * 1.0) /
                (1 + 1.0 * Math.pow(10, (1.0 * (rating1 - rating2)) / 400))) *
            100
        );
    }

    let result = probability(props.heroTwo, props.heroOne);
    if ( isNaN(result)) {result = ""}

    return (
        <div>
                <h4> Chance of Hero one win: {result}%</h4>
        </div>
    )
}


export default EloProbability