export interface LiveInfo {
  env: string;
  schedulerTime: string;
  previous: Track;
  current: Track;
  next: Track;
  timezone: string;
  timezoneOffset: string;
}

export interface Track {
  starts: string;
  startsAt: number;
  ends: string;
  endsAt: number;
  type: string;
  name: string;
  metadata: Metadata;
}

export interface Metadata {
  id: number;
  name?: string;
  mime?: string;
  track_title?: string;
  artist_name?: string;
  bit_rate?: number;
  sample_rate?: number;
  length?: string;
  seconds: number;
  genre?: string;
  replay_gain?: string;
  filesize?: number;
}
