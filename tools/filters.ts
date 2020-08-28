function getHoursMinutesSeconds(time: string | number) {
  const secs = parseFloat(String(time));
  const hours: number = Math.floor(secs / (60 * 60));
  const minutes: number | string = Math.floor((secs - hours * 60 * 60) / 60);
  const seconds: number | string = Math.floor(
    secs - minutes * 60 - hours * 60 * 60,
  );

  return { seconds, minutes, hours };
}

export function toHHMMSS(time: string | number) {
  const { seconds, minutes, hours } = getHoursMinutesSeconds(time);
  const secondsString = `${seconds}`.padStart(2, '0');
  const minutesString = `${minutes}`.padStart(2, '0');
  return `${hours ? `${hours}:` : ''}${minutesString}:${secondsString}`.trim();
}

export function toRemainingTime(time: string | number) {
  const { minutes, hours } = getHoursMinutesSeconds(time);
  const minutesString = `${minutes}`.padStart(2, '0');
  return `${hours ? `${hours} ч.` : ''} ${minutesString} м.`.trim();
}
