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
    <div>
      <h3>Vehicle details</h3>

      <ul>
        <li>Form: {form}</li>
        <li>Length: {length}</li>
        <li>Width: {width}</li>
        <li>Height: {height}</li>
        <li>Tank: {tank}</li>
        <li>Consumption: {consumption}</li>
      </ul>
    </div>
  );
}
