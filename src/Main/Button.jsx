
function Button({ number, title, onClick }) {
    return(
        <button className={'w-full border border-white border-opacity-50 h-12 cursor-pointer text-left'} onClick={onClick}>
            <span className='p-8'>{number}</span>
            {title}
        </button>
    );
}

export default Button