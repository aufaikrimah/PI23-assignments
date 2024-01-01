function CardComp({ data }) {

  console.log(data)
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }} >
      <h3>Name: {data.name}</h3>
      <p>Address: {data.address}</p>
      <p>{data.isTeenager ? 'Teen' : 'Adult'}</p>
    </div>
  );
}

export default CardComp; 