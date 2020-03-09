export function toHHMMSS(time: string | number) {
  const secs = parseFloat(String(time));
  const hours: number = Math.floor(secs / (60 * 60));
  let minutes: number | string = Math.floor((secs - hours * 60 * 60) / 60);
  let seconds: number | string = Math.floor(secs - minutes * 60 - hours * 60 * 60);

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (hours && minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours ? `${hours}:` : ''}${minutes}:${seconds}`;
}
