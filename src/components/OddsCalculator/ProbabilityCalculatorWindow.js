
// maybe make list of hero: rating? or maybe add something like 1950.1, 1950,2. Where number corresponds to id

const EloProbability = (props) => {
    function probability(rating2, rating1) {

        // tried to specify case of particular hero vs particular hero
        if (rating1 == 1951 && rating2 == 1831) {return 213}


        else

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