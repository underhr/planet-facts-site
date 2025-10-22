export default function Header({ data, setPlanet, planet }) {
    return(
        <header className='flex items-center justify-between p-10'>
            <h1 className=''>THE PLANETS</h1>
                
            <ul className='flex gap-7 uppercase'>
                {data.map((p) => (
                    <li className='font-semibold cursor-pointer' key={p.name}
                    onClick={() => setPlanet(p.name)}>
                        {p.name}
                    </li>
                ))}
            </ul>
        </header>
    );
}
// header
// p-10 border-b-neutral-700/20

// h1
// font-medium text-3xl font-Antonio