import cars from'./cars.json';
function List(){





const ListIteams = cars.map(car=> <li key ={car.id}>{car.name}</li>);

return(<ol>{ListIteams}</ol>);
}

export default List