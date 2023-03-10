
const HeroGenerator = (props) => {
    const randomHero = () => {
        let random = Math.floor(Math.random() * props.heroesArr.length);
        return props.heroesArr[random];
    };

    // made scroll to generated hero. inner width <550 because i don't need it on larger screens
    const generatedHero = () => {
        props.setHero(randomHero())
        if (window.innerWidth < 550) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    }

    return (<div>
        <div>
            <button onClick={generatedHero}>Generate</button>
        </div>
        <br/>
        <br/>
    </div>)
}

export default HeroGenerator