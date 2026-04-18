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
    <div className={styles.tags}>
      <div className={styles.tag}>
        <FaGasPump />
        <span>{engine}</span>
      </div>

      <div className={styles.tag}>
        <GiGearStickPattern />
        <span>{transmission}</span>
      </div>

      <div className={styles.tag}>
        <MdOutlineDirectionsCar />
        <span>{form}</span>
      </div>
    </div>
  );
}
