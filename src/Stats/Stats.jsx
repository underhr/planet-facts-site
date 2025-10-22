import Stat from './Stat.jsx'

function Stats({ current }) {
    return(
        <section className="flex gap-7">
            <Stat title="ROTATION TIME" info={current}/>
            <Stat title="REVOLUTION TIME"/>
            <Stat title="RADIUS"/>
            <Stat title="AVERAGE TEMP."/>
        </section>
    );
}

export default Stats