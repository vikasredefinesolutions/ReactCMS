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
    `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.NEXT_PUBLIC_GEOLOCATIONAPIKEY}`,
  );

  return location as _location;
}
