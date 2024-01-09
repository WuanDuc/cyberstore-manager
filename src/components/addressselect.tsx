"use client"

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Label, Select } from 'flowbite-react';


const AddressSelect: React.FC = () => {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedWard, setSelectedWard] = useState('');

  const host = 'https://provinces.open-api.vn/api/';

  useEffect(() => {
    callAPI(`${host}p?depth=2`);
  }, []);

  const callAPI = (api: string) => {
    axios.get(api).then((response) => {
      setCities(response.data);
    });
  };

  const callApiDistrict = (api: string) => {
    axios.get(api).then((response) => {
      setDistricts(response.data.districts);
    });
  };

  const callApiWard = (api: string) => {
    axios.get(api).then((response) => {
      setWards(response.data.wards);
    });
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cityCode = event.target.value;
    setSelectedCity(cityCode);
    setSelectedDistrict('');
    setSelectedWard('');
    if (cityCode) {
      callApiDistrict(`${host}p/${cityCode}?depth=2`);
    }
  };

  const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const districtCode = event.target.value;
    setSelectedDistrict(districtCode);
    setSelectedWard('');
    if (districtCode) {
      callApiWard(`${host}d/${districtCode}?depth=2`);
    }
  };

  const handleWardChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedWard(event.target.value);
  };

  return (
    <div className=' flex flex-col'>
      <Select style={{backgroundColor: 'white', color: 'black'}} className=' my-1 w-60' id="city" value={selectedCity} onChange={handleCityChange}>
        <option value="" disabled>
          Chọn tỉnh thành
        </option>
        {cities.map((city: any) => (
          <option key={city.code} value={city.code}>
            {city.name}
          </option>
        ))}
      </Select>

      <Select style={{backgroundColor: 'white', color: 'black'}} className=' my-1 w-60' id="district" value={selectedDistrict} onChange={handleDistrictChange}>
        <option value="" disabled>
          Chọn quận huyện
        </option>
        {districts.map((district: any) => (
          <option key={district.code} value={district.code}>
            {district.name}
          </option>
        ))}
      </Select>

      <Select style={{backgroundColor: 'white', color: 'black'}} className=' my-1 w-60' id="ward" value={selectedWard} onChange={handleWardChange}>
        <option value="" disabled>
          Chọn phường xã
        </option>
        {wards.map((ward: any) => (
          <option key={ward.code} value={ward.code}>
            {ward.name}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default AddressSelect;