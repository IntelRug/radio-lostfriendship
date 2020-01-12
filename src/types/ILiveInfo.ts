export default ILiveInfo;

interface ILiveInfo {
  env: string;
  schedulerTime: string;
  previous: ITrack;
  current: ITrack;
  next: ITrack;
  timezone: string;
  timezoneOffset: string;
}

export interface ITrack {
  starts: string;
  startsAt: number;
  ends: string;
  endsAt: number;
  type: string;
  name: string;
  metadata: IMetadata;
}
export interface IMetadata {
  id: number;
  name?: string;
  mime?: string;
  // eslint-disable-next-line camelcase
  track_title?: string;
  // eslint-disable-next-line camelcase
  artist_name?: string;
  // eslint-disable-next-line camelcase
  bit_rate?: number;
  // eslint-disable-next-line camelcase
  sample_rate?: number;
  length?: string;
  seconds: number;
  genre?: string;
  // eslint-disable-next-line camelcase
  replay_gain?: string;
  filesize?: number;
}
