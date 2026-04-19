import styles from './VehicleDetails.module.css';

type Props = {
  form: string;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
};

export default function CamperSpecs({
  form,
  length,
  width,
  height,
  tank,
  consumption,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Vehicle details</h3>

      {/* ЧІПСИ */}
      <div className={styles.features}>
        <span className={styles.tag}>Automatic</span>
        <span className={styles.tag}>AC</span>
        <span className={styles.tag}>Petrol</span>
        <span className={styles.tag}>Kitchen</span>
        <span className={styles.tag}>Radio</span>
        <span className={styles.tag}>Alcove</span>
      </div>

      {/* ЛІНІЯ */}
      <div className={styles.divider} />

      <ul className={styles.list}>
        <li className={styles.item}>
          <span>Form</span>
          <span>{form}</span>
        </li>
        <li className={styles.item}>
          <span>Length</span>
          <span>{length}</span>
        </li>
        <li className={styles.item}>
          <span>Width</span>
          <span>{width}</span>
        </li>
        <li className={styles.item}>
          <span>Height</span>
          <span>{height}</span>
        </li>
        <li className={styles.item}>
          <span>Tank</span>
          <span>{tank}</span>
        </li>
        <li className={styles.item}>
          <span>Consumption</span>
          <span>{consumption}</span>
        </li>
      </ul>
    </div>
  );
}
