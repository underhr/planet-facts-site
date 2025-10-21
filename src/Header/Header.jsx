function Header({ data, setPlanet, planet }) {
    return(
        <header className='flex items-center justify-between p-10 border-b-neutral-700/20 w-dvw'>
            <h1 className='font-medium text-3xl font-Antonio'>THE PLANETS</h1>
                
            <ul className='flex gap-7 uppercase'>
                {data.map((p) => (
                    <li className='font-bold cursor-pointer' key={p.name}
                    onClick={() => setPlanet(p.name)}>
                        {p.name}
                    </li>
                ))}
            </ul>
        </header>
    );
}

export default Header