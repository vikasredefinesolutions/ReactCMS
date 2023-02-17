import axios from 'axios';

export interface _location {
  country_code: string;
  country: string;
  city: string;
  postal_code: string;
  latitude: number;
  longitude: number;
  ip_address: string;
  region: string;
}

export default async function getLocation() {
  const { data: location } = await axios.get(
    `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.NEXT_PUBLIC_GEOLOCATIONAPIKEY}`,
  );

  return location as _location;
}
