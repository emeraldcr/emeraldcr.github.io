
import { tours, defaultTitle } from '../src/const';
import { Tour } from '../src/types'
import { displayName } from '../src/util';
import Header from './header';



export default function HomePage() {

  return (
    <div>
      <Header title={defaultTitle} />
      <ul>
        {tours.map((tour: Tour) => (
          <li key={tour.name}>{displayName(tour)}</li>
        ))}
      </ul>
    </div>
  );
}