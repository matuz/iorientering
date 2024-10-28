const points = [
    {points: [
      false, true, false, 
      false, false, false, 
      true, false, true, 
      false, true, false, 
      false, true, false
    ], id: 31}
  ]

export default ({number}) => {
    const elem = points.find(item => item.id === number);


    return (
    <div className='taile'>
        { elem.points.map((point) => (<div className={point ? 'on' : 'off'} />))}
    </div> );
};