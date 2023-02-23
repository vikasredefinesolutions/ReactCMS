/* eslint-disable react-hooks/exhaustive-deps */
import { employeeData } from '@constants/global.constant';
import CryptoJS from 'crypto-js';
import { useActions } from 'hooks';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
const EmployeeController = () => {
  const { updateEmployeeV2 } = useActions();
  const router = useRouter();
  const [decrptedData, setDecrptedData] = useState<{
    id: number;
    firstname: string;
    lastname: string;
    email: string;
  } | null>(null);
  let empData = router.query.id;

  const decryptData = () => {
    if (typeof empData === 'string') {
      empData = empData?.replaceAll(' ', '+');
      const bytes = CryptoJS.AES.decrypt(empData, employeeData.secretPass);
      let stringyfiedBytes = bytes.toString(CryptoJS.enc.Utf8);
      const data = JSON.parse(stringyfiedBytes);
      localStorage.setItem('emp_data', JSON.stringify(data));
      setDecrptedData(data);
    }
  };

  useEffect(() => {
    if (empData) {
      decryptData();
    }
  }, [empData]);

  useEffect(() => {
    const savedEmpData = localStorage.getItem('emp_data');

    if (savedEmpData) {
      const newsavedEmpData = JSON.parse(savedEmpData);

      updateEmployeeV2({
        empId: newsavedEmpData.id,
        employee: {
          firstname: newsavedEmpData.firstname,
          lastName: newsavedEmpData.lastname,
          email: newsavedEmpData.email,
        },
      });
    }
  }, []);

  useEffect(() => {
    if (decrptedData) {
      updateEmployeeV2({
        empId: decrptedData.id,
        employee: {
          firstname: decrptedData.firstname,
          lastName: decrptedData.lastname,
          email: decrptedData.email,
        },
      });
    }
  }, [decrptedData]);
};

export default EmployeeController;
