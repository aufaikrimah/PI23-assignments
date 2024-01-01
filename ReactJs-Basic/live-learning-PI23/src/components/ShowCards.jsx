import Cards from './Cards';

function ShowCards() {

    const dataUser = [
        {
            name: 'Dewi',
            address: 'Indonesia',
            isTeenager: true,
        },
        {
            name: 'Indah',
            address: 'Boston',
            isTeenager: false,
        },
        {
            name: 'Budi',
            address: 'Jepang',
            isTeenager: false,
        },
        {
            name: 'Felicia',
            address: 'Swiss',
            isTeenager: true,
        },
    ];

    return (
        <>
            <div >
                <Cards data={dataUser} ></Cards>
            </div>
        </>
    );
}

export default ShowCards;
