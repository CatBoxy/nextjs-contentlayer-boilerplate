import { convertTime } from 'utils/convertTime';

export default function Date({ dateString }) {
  return <time dateTime={dateString}>{convertTime(dateString)}</time>;
}
