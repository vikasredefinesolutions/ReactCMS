import axios from 'axios';

export interface _location {
  country_code: string;
  country_name: string;
  city: string;
  postal: string;
  latitude: number;
  longitude: number;
  IPv4: string;
  state: string;
}

export default async function getLocation() {
  const { data: location } = await axios.get(
    'https://geolocation-db.com/json/',
  );

  return location as _location;
}
