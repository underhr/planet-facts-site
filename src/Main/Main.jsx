import Button from './Button.jsx'
import { useState, useEffect } from 'react';

function Main({ current }) {
    const [currentImage, setImage] = useState(current.images.planet);
    const [currentP, setP] = useState(current.overview);
    const [active, setActive] = useState('overview')

    useEffect(() => {
        setImage(current.images.planet);
        setP(current.overview);
        setActive('overview');
    }, [current])

    return(
        <section className='flex items-center justify-center'>
            <div>
                <img src={currentImage} alt={current.name}></img>
            </div>

            <div className='w-80'>
                <div>
                    <h1 className="text-7xl uppercase">{current.name}</h1>
                    <p className="text-sm">{currentP.content}</p>
                    <span className="text-sm ">
                        Source: <a href={currentP.source} target="_blank" className='underline'>Wikipedia</a>
                        <img src="src/assets/images/icon-source.svg" alt="Open Link" className='inline'></img>
                    </span>
                </div>

                <div className='flex-col gap-2.5'>
                    <Button number="01" title="OVERVIEW" active={active === 'overview'} 
                        onClick={() => {
                        setImage(current.images.planet);
                        setP(current.overview);
                        setActive('overview');
                    }}/>

                    <Button number="02" title="INTERNAL STRUCTURE" active={active === 'structure'}
                        onClick={() => {
                        setImage(current.images.internal);
                        setP(current.structure);
                        setActive('structure');
                    }}/>

                    <Button number="03" title="SURFACE GEOLOGY" active={active === 'geology'}
                        onClick={() => {
                        setImage(current.images.planet);
                        setP(current.geology);
                        setActive('geology');
                    }}/>
                </div>
            </div>
        </section>
    );
}

export default Main