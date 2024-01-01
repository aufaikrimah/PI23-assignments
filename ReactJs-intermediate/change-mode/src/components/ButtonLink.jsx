function ButtonLink(props) {
    const { name, img, url } = props.buttonLink;

    return (
        <button className='m-2 px-4 py-2 border-2 sm:w-full w-24 rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-103 hover:shadow-lg hover:shadow-rose-300 duration-300 flex items-center justify-center'>
            <span><img src={img} alt={name} className='w-4 h-4 mr-2' /></span>
            <span>{name}</span>
        </button>

    );
}

export default ButtonLink;