'use client';

import styles from './CamperDetails.module.css';
import { FaGasPump } from 'react-icons/fa';
import { MdOutlineDirectionsCar } from 'react-icons/md';
import { GiGearStickPattern } from 'react-icons/gi';

type Props = {
  engine: string;
  transmission: string;
  form: string;
};

export default function CamperDetails({ engine, transmission, form }: Props) {
  return (
    <ul className={styles.tags}>
      <li className={styles.tag}>
        <FaGasPump />
        <span>{engine}</span>
      </li>

      <li className={styles.tag}>
        <GiGearStickPattern />
        <span>{transmission}</span>
      </li>

      <li className={styles.tag}>
        <MdOutlineDirectionsCar />
        <span>{form}</span>
      </li>
    </ul>
  );
}
