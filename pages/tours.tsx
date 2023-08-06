
import { tours } from '../src/const';
import { Tour } from '../src/types'
import { displayName } from '../src/util';



export default function Tours() {

  return (
    <ul>
      {tours.map((tour: Tour) => (
        <li key={tour.name}>{displayName(tour)}</li>
      ))}
    </ul>
  );
}