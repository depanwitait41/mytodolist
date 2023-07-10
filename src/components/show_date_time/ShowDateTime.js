export default function ShowDateTime(props) {
  const dateObj = props.date;
  const month = dateObj.getUTCMonth() + 1;
  const day = dateObj.getUTCDate();
  const year = dateObj.getUTCFullYear();
  const hour = dateObj.getHours().toString().padStart(2, "0");
  const minute = dateObj.getMinutes().toString().padStart(2, "0");
  return (
    <div className="ml-8 flex justify-between">
      <div>
        {day}.{month}.{year}
      </div>
      <div>
        {hour}:{minute}
      </div>
    </div>
  );
}
