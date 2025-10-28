import Button from './Button.jsx'
import { useState, useEffect } from 'react';
import { getImageUrl } from '../utils/getImageUrl.js';

function Main({ current }) {
    const [currentImage, setImage] = useState(getImageUrl(current.images.internal));
    const [currentP, setP] = useState(current.overview);
    const [active, setActive] = useState('overview');

    const planetColors = {
        Mercury: "bg-mercury",
        Venus: "bg-venus",
        Earth: "bg-earth",
        Mars: "bg-mars",
        Jupiter: "bg-jupiter",
        Saturn: "bg-saturn",
        Uranus: "bg-uranus",
        Neptune: "bg-neptune",
    };

    useEffect(() => {
        setImage(getImageUrl(current.images.planet));
        setP(current.overview);
        setActive('overview');
    }, [current])

    return(
        <section className='flex flex-col items-center justify-between w-5xl lg:flex-row'>
            <div className='w-full flex justify-center'>
                <img src={currentImage} alt={current.name}></img>
            </div>

            <div className='max-w-xs flex flex-row lg:flex-col gap-5'>
                <div className='flex flex-col gap-8'>
                    <h1 className="text-7xl uppercase font-antonio">{current.name}</h1>
                    <p className="text-sm">{currentP.content}</p>
                    <span className="text-sm ">
                        Source: <a href={currentP.source} target="_blank" className='underline'>Wikipedia
                            <img src={getImageUrl('icon-source.svg')} alt="Open Link" className='inline'></img>
                        </a>
                    </span>
                </div>

                <div className='flex flex-col gap-3'>
                    <Button number="01" title="OVERVIEW" active={active === 'overview'} 
                        onClick={() => {
                            setImage(getImageUrl(current.images.planet));
                            setP(current.overview);
                            setActive('overview');
                        }}
                    />

                    <Button number="02" title="INTERNAL STRUCTURE" active={active === 'structure'}
                        onClick={() => {
                            setImage(getImageUrl(current.images.internal));
                            setP(current.structure);
                            setActive('structure');
                        }}
                    />

                    <Button number="03" title="SURFACE GEOLOGY" active={active === 'geology'}
                        onClick={() => {
                            setImage(getImageUrl(current.images.planet));
                            setP(current.geology);
                            setActive('geology');
                        }}
                    />
                </div>
            </div>
        </section>
    );
}

export default Main