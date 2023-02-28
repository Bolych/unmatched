
const EloProbability = (props) => {
    function probability(rating1, rating2) {

        // Particular cases. only for experienced players

        let medusa = 2286;
        let alice = 2201;
        let beowulf = 2186;
        let bigfoot = 2271;
        let bruceLee = 2151;
        let bullseye = 2166;
        let daredevil = 2241;
        let dracula = 2216;
        let elektra = 2301;
        let ghostRider = 2171;
        let ingen = 2191;
        let invisible = 2111;
        let lukeCage = 2231;
        let moonKnight = 2211;
        let redHood = 2226;
        let robinHood = 2141;
        let sattler = 2176;
        let sherlock = 2291;
        let sinbad = 2181
        let trex = 2266;
        let wukong = 2251;
        let yennenga = 2276;


        // specifying cases of particular hero vs particular hero
        if (rating1 === invisible && rating2 === lukeCage) {
            return 57
        }
        if (rating1 === lukeCage && rating2 === invisible) {
            return 43
        }

        if (rating1 === moonKnight && rating2 === invisible) {
            return 52
        }
        if (rating1 === invisible && rating2 === moonKnight) {
            return 48
        }

        if (rating1 === ghostRider && rating2 === invisible) {
            return 53
        }
        if (rating1 === invisible && rating2 === ghostRider) {
            return 47
        }

        if (rating1 === robinHood && rating2 === ghostRider) {
            return 21
        }
        if (rating1 === ghostRider && rating2 === robinHood) {
            return 79
        }

        if (rating1 === robinHood && rating2 === elektra) {
            return 15
        }
        if (rating1 === elektra && rating2 === robinHood) {
            return 85
        }

        if (rating1 === robinHood && rating2 === bullseye) {
            return 23
        }
        if (rating1 === bullseye && rating2 === robinHood) {
            return 77
        }

        if (rating1 === robinHood && rating2 === moonKnight) {
            return 19
        }
        if (rating1 === moonKnight && rating2 === robinHood) {
            return 81
        }

        if (rating1 === robinHood && rating2 === daredevil) {
            return 20
        }
        if (rating1 === daredevil && rating2 === robinHood) {
            return 80
        }

        if (rating1 === robinHood && rating2 === lukeCage) {
            return 21
        }
        if (rating1 === lukeCage && rating2 === robinHood) {
            return 79
        }

        if (rating1 === robinHood && rating2 === trex) {
            return 14
        }
        if (rating1 === trex && rating2 === robinHood) {
            return 86
        }

        if (rating1 === bruceLee && rating2 === moonKnight) {
            return 27
        }
        if (rating1 === moonKnight && rating2 === bruceLee) {
            return 73
        }

        if (rating1 === bruceLee && rating2 === lukeCage) {
            return 28
        }
        if (rating1 === moonKnight && rating2 === robinHood) {
            return 72
        }

        if (rating1 === bruceLee && rating2 === trex) {
            return 17
        }
        if (rating1 === trex && rating2 === bruceLee) {
            return 83
        }

        if (rating1 === bruceLee && rating2 === yennenga) {
            return 21
        }
        if (rating1 === yennenga && rating2 === robinHood) {
            return 79
        }

        if (rating1 === bruceLee && rating2 === redHood) {
            return 26
        }
        if (rating1 === redHood && rating2 === bruceLee) {
            return 74
        }

        if (rating1 === bruceLee && rating2 === daredevil) {
            return 46
        }
        if (rating1 === daredevil && rating2 === bruceLee) {
            return 54
        }

        if (rating1 === ingen && rating2 === bullseye) {
            return 31
        }
        if (rating1 === bullseye && rating2 === ingen) {
            return 69
        }

        if (rating1 === ingen && rating2 === trex) {
            return 27
        }
        if (rating1 === trex && rating2 === ingen) {
            return 73
        }

        if (rating1 === moonKnight && rating2 === wukong) {
            return 34
        }
        if (rating1 === wukong && rating2 === moonKnight) {
            return 66
        }

        if (rating1 === moonKnight && rating2 === elektra) {
            return 29
        }
        if (rating1 === elektra && rating2 === moonKnight) {
            return 71
        }

        if (rating1 === dracula && rating2 === elektra) {
            return 40
        }
        if (rating1 === elektra && rating2 === dracula) {
            return 60
        }

        if (rating1 === daredevil && rating2 === medusa) {
            return 50
        }
        if (rating1 === medusa && rating2 === daredevil) {
            return 50
        }

        if (rating1 === daredevil && rating2 === elektra) {
            return 48
        }
        if (rating1 === elektra && rating2 === daredevil) {
            return 52
        }

        if (rating1 === daredevil && rating2 === wukong) {
            return 51
        }
        if (rating1 === wukong && rating2 === daredevil) {
            return 49
        }

        if (rating1 === moonKnight && rating2 === daredevil) {
            return 68
        }
        if (rating1 === daredevil && rating2 === moonKnight) {
            return 32
        }

        if (rating1 === daredevil && rating2 === alice) {
            return 31
        }
        if (rating1 === alice && rating2 === daredevil) {
            return 69
        }

        if (rating1 === daredevil && rating2 === dracula) {
            return 38
        }
        if (rating1 === dracula && rating2 === daredevil) {
            return 62
        }

        if (rating1 === daredevil && rating2 === beowulf) {
            return 31
        }
        if (rating1 === beowulf && rating2 === daredevil) {
            return 69
        }

        if (rating1 === wukong && rating2 === elektra) {
            return 31
        }
        if (rating1 === elektra && rating2 === wukong) {
            return 69
        }

        if (rating1 === wukong && rating2 === ghostRider) {
            return 41
        }
        if (rating1 === ghostRider && rating2 === wukong) {
            return 59
        }

        if (rating1 === wukong && rating2 === trex) {
            return 32
        }
        if (rating1 === trex && rating2 === wukong) {
            return 68
        }

        if (rating1 === wukong && rating2 === alice) {
            return 73
        }
        if (rating1 === elektra && rating2 === alice) {
            return 27
        }

        if (rating1 === wukong && rating2 === sinbad) {
            return 67
        }
        if (rating1 === sinbad && rating2 === wukong) {
            return 33
        }

        if (rating1 === bigfoot && rating2 === wukong) {
            return 38
        }
        if (rating1 === wukong && rating2 === bigfoot) {
            return 62
        }

        if (rating1 === bigfoot && rating2 === sattler) {
            return 76
        }
        if (rating1 === sattler && rating2 === bigfoot) {
            return 24
        }

        if (rating1 === daredevil && rating2 === wukong) {
            return 51
        }
        if (rating1 === wukong && rating2 === daredevil) {
            return 49
        }

        if (rating1 === yennenga && rating2 === sattler) {
            return 45
        }
        if (rating1 === sattler && rating2 === yennenga) {
            return 55
        }

        if (rating1 === yennenga && rating2 === daredevil) {
            return 43
        }
        if (rating1 === daredevil && rating2 === yennenga) {
            return 57
        }

        if (rating1 === yennenga && rating2 === bullseye) {
            return 46
        }
        if (rating1 === bullseye && rating2 === yennenga) {
            return 54
        }

        if (rating1 === yennenga && rating2 === elektra) {
            return 58
        }
        if (rating1 === elektra && rating2 === yennenga) {
            return 42
        }

        if (rating1 === yennenga && rating2 === trex) {
            return 64
        }
        if (rating1 === trex && rating2 === yennenga) {
            return 36
        }

        if (rating1 === medusa && rating2 === trex) {
            return 50
        }
        if (rating1 === trex && rating2 === medusa) {
            return 50
        }

        if (rating1 === medusa && rating2 === ghostRider) {
            return 34
        }
        if (rating1 === ghostRider && rating2 === medusa) {
            return 66
        }

        if (rating1 === sherlock && rating2 === trex) {
            return 39
        }
        if (rating1 === trex && rating2 === sherlock) {
            return 61
        }

        if (rating1 === sherlock && rating2 === bullseye) {
            return 41
        }
        if (rating1 === bullseye && rating2 === sherlock) {
            return 59
        }

        if (rating1 === sherlock && rating2 === moonKnight) {
            return 40
        }
        if (rating1 === moonKnight && rating2 === sherlock) {
            return 60
        }

        else

            // calculator fo probability based on elo rating

            return Math.floor(
                ((1.0 * 1.0) /
                    (1 + 1.0 * Math.pow(10, (1.0 * (rating1 - rating2)) / 400))) *
                100
            );
    }

// otherwise when no value, instead of nothing, outputs NaN

    let result = probability(props.heroTwo, props.heroOne);
    if (isNaN(result)) {
        result = ""
    }

    return (
        <div>
            <h4> Chance of Hero one win: {result}%</h4>
        </div>
    )
}


export default EloProbability