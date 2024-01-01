import CardComp from './CardComp';

function Cards({ data }) {

  return (
    <>
      <div className='cards'>
        {data.map((user, index) => (
          <CardComp data={user} key={index}></CardComp>
        ))}
      </div>
    </>
  );
}

export default Cards;
