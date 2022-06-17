import { convertTime } from 'utils/convertTime';

export const Date = ({ dateString }) => {
  return <time dateTime={dateString}>{convertTime(dateString)}</time>;
}
