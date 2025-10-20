
function Button({ number, title, onClick, active, planet }) {
    const planetColors = {
        mercury: "bg-mercury",
        venus: "bg-venus",
        earth: "bg-earth",
        mars: "bg-mars",
        jupiter: "bg-jupiter",
        saturn: "bg-saturn",
        uranus: "bg-uranus",
        neptune: "bg-neptune",
      };

    return(
        <button className={`w-full border border-white border-opacity-50 h-12 cursor-pointer text-left
            ${active ? 'bg-mercury' : 'hover:bg-white/30'}
        `} onClick={onClick}>
            <span className='p-8'>{number}</span>
            {title}
        </button>
    );
}

export default Button