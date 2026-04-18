import styles from './Chip.module.css';

type ChipProps = {
  icon?: React.ReactNode;
  label: string;
};

export default function Chip({ icon, label }: ChipProps) {
  return (
    <div className={styles.chip}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{label}</span>
    </div>
  );
}
