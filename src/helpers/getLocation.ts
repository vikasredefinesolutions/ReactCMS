// import axios from 'axios';

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
  // const { data: location } = await axios.get(
  //   `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.NEXT_PUBLIC_GEOLOCATIONAPIKEY}`,
  // );
  // return location as _location;

  // ====================================================================================
  // Hardcoded for now, if found some solution for location API we will change this...
  // ====================================================================================

  return {
    country_code: '',
    country: '',
    city: '',
    postal_code: '',
    latitude: 0,
    longitude: 0,
    ip_address: '192.168.1.1',
    region: '',
  };
}
