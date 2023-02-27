
// maybe make list of hero: rating? or maybe add something like 1950.1, 1950,2. Where number corresponds to id

import lukeCage from "../Heroes/MarvelRedemptionRow/LukeCage";

const EloProbability = (props) => {
    function probability(rating1, rating2) {

        // Particular cases

        let medusa = 2286;
        let alice = 2201;
     let ingen = 2191;
     let bullseye = 2166;
     let daredevil = 2241;
     let elektra = 2301;
     let trex = 2266;
     let wukong = 2251;
     let dracula = 2216;
     let beowulf = 2186;
     let yennenga = 2276;
     let sattler = 2176;
     let ghostRider = 2171;
     let moonKnight = 2211;
     let bruceLee = 2151;
     let invisible = 2111;
     let lukeCage = 2231;



        // tried to specify case of particular hero vs particular hero
        if (rating1 === invisible && rating2 === lukeCage) {return 57 }
        if (rating1 === lukeCage && rating2 === invisible) {return 43}
        if (rating1 === moonKnight && rating2 === invisible) {return 52}
        if (rating1 === invisible && rating2 === moonKnight) {return 48}
        if (rating1 === ghostRider && rating2 === moonKnight) {return 48}
        if (rating1 === invisible && rating2 === ghostRider) {return 48}


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