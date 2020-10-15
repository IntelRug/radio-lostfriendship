export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CalendarEvent = {
  __typename?: 'CalendarEvent';
  summary: Scalars['String'];
  startsAt: Scalars['Float'];
  endsAt: Scalars['Float'];
};

export type CurrentPlaying = {
  __typename?: 'CurrentPlaying';
  previous: CurrentPlayingTrack;
  current: CurrentPlayingTrack;
  next: CurrentPlayingTrack;
  live: Live;
  timestamp: Scalars['Float'];
  listenersCount: Scalars['Float'];
};

export type CurrentPlayingTrack = {
  __typename?: 'CurrentPlayingTrack';
  id: Scalars['String'];
  name: Scalars['String'];
  title: Scalars['String'];
  artist: Scalars['String'];
  startsAt: Scalars['Float'];
  endsAt: Scalars['Float'];
  duration: Scalars['Float'];
  art: Scalars['String'];
};

export type Listeners = {
  __typename?: 'Listeners';
  current: Scalars['Float'];
  unique: Scalars['Float'];
  total: Scalars['Float'];
};

export type Live = {
  __typename?: 'Live';
  isLive: Scalars['Boolean'];
  streamerName: Scalars['String'];
  broadcastStart: Scalars['Float'];
};

export type Mount = {
  __typename?: 'Mount';
  path: Scalars['String'];
  default: Scalars['Boolean'];
  id: Scalars['Float'];
  name: Scalars['String'];
  url: Scalars['String'];
  bitrate: Scalars['Float'];
  format: Scalars['String'];
  listeners: Listeners;
};

export type Mutation = {
  __typename?: 'Mutation';
  signIn: Token;
  signUp: User;
};

export type MutationSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type MutationSignUpArgs = {
  email: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type Picture = {
  __typename?: 'Picture';
  id: Scalars['Int'];
  height: Scalars['Float'];
  width: Scalars['Float'];
  size: Scalars['Float'];
  path: Scalars['String'];
  link: Scalars['String'];
  ownerId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['String'];
};

export type Playlists = {
  __typename?: 'Playlists';
  m3u: Scalars['String'];
  pls: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getHello: Scalars['String'];
  getCurrentUser: User;
  getTracksHistory: Array<TracksHistoryItem>;
  getCurrentPlaying?: Maybe<CurrentPlaying>;
  getCalendarEvents: Array<CalendarEvent>;
  getStation: Station;
};

export type Station = {
  __typename?: 'Station';
  id: Scalars['Float'];
  name: Scalars['String'];
  shortcode: Scalars['String'];
  description: Scalars['String'];
  frontend: Scalars['String'];
  backend: Scalars['String'];
  listenUrl: Scalars['String'];
  public: Scalars['Boolean'];
  playlists: Playlists;
  mounts: Array<Mount>;
};

export type Token = {
  __typename?: 'Token';
  id: Scalars['Int'];
  value: Scalars['String'];
  ownerId: Scalars['Int'];
  createdAt: Scalars['String'];
  expiresIn: Scalars['String'];
  usedAt: Scalars['String'];
};

export type TracksHistoryItem = {
  __typename?: 'TracksHistoryItem';
  starts: Scalars['String'];
  ends: Scalars['String'];
  history_id: Scalars['Int'];
  instance_id: Scalars['Int'];
  track_title?: Maybe<Scalars['String']>;
  artist_name?: Maybe<Scalars['String']>;
  info_url?: Maybe<Scalars['String']>;
  checkbox: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  username?: Maybe<Scalars['String']>;
  registeredAt: Scalars['String'];
  onlineAt: Scalars['String'];
  role: Scalars['Float'];
  avatar: Picture;
  background: Picture;
};

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type SignInMutation = { __typename?: 'Mutation' } & {
  signIn: { __typename?: 'Token' } & Pick<Token, 'ownerId' | 'value'>;
};

export type GetCalendarEventsQueryVariables = Exact<{ [key: string]: never }>;

export type GetCalendarEventsQuery = { __typename?: 'Query' } & {
  getCalendarEvents: Array<
    { __typename?: 'CalendarEvent' } & Pick<
      CalendarEvent,
      'summary' | 'startsAt' | 'endsAt'
    >
  >;
};

export type GetCurrentPlayingQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentPlayingQuery = { __typename?: 'Query' } & {
  getCurrentPlaying?: Maybe<
    { __typename?: 'CurrentPlaying' } & Pick<
      CurrentPlaying,
      'listenersCount' | 'timestamp'
    > & {
        live: { __typename?: 'Live' } & Pick<
          Live,
          'isLive' | 'streamerName' | 'broadcastStart'
        >;
        previous: { __typename?: 'CurrentPlayingTrack' } & Pick<
          CurrentPlayingTrack,
          | 'id'
          | 'name'
          | 'title'
          | 'artist'
          | 'startsAt'
          | 'endsAt'
          | 'duration'
          | 'art'
        >;
        current: { __typename?: 'CurrentPlayingTrack' } & Pick<
          CurrentPlayingTrack,
          | 'id'
          | 'name'
          | 'title'
          | 'artist'
          | 'startsAt'
          | 'endsAt'
          | 'duration'
          | 'art'
        >;
        next: { __typename?: 'CurrentPlayingTrack' } & Pick<
          CurrentPlayingTrack,
          | 'id'
          | 'name'
          | 'title'
          | 'artist'
          | 'startsAt'
          | 'endsAt'
          | 'duration'
          | 'art'
        >;
      }
  >;
};

export type GetGeneralDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetGeneralDataQuery = { __typename?: 'Query' } & {
  getCurrentPlaying?: Maybe<
    { __typename?: 'CurrentPlaying' } & Pick<
      CurrentPlaying,
      'listenersCount' | 'timestamp'
    > & {
        live: { __typename?: 'Live' } & Pick<
          Live,
          'isLive' | 'streamerName' | 'broadcastStart'
        >;
        previous: { __typename?: 'CurrentPlayingTrack' } & Pick<
          CurrentPlayingTrack,
          | 'id'
          | 'name'
          | 'title'
          | 'artist'
          | 'startsAt'
          | 'endsAt'
          | 'duration'
          | 'art'
        >;
        current: { __typename?: 'CurrentPlayingTrack' } & Pick<
          CurrentPlayingTrack,
          | 'id'
          | 'name'
          | 'title'
          | 'artist'
          | 'startsAt'
          | 'endsAt'
          | 'duration'
          | 'art'
        >;
        next: { __typename?: 'CurrentPlayingTrack' } & Pick<
          CurrentPlayingTrack,
          | 'id'
          | 'name'
          | 'title'
          | 'artist'
          | 'startsAt'
          | 'endsAt'
          | 'duration'
          | 'art'
        >;
      }
  >;
  getCalendarEvents: Array<
    { __typename?: 'CalendarEvent' } & Pick<
      CalendarEvent,
      'summary' | 'startsAt' | 'endsAt'
    >
  >;
  getTracksHistory: Array<
    { __typename?: 'TracksHistoryItem' } & Pick<
      TracksHistoryItem,
      'track_title' | 'artist_name' | 'info_url' | 'ends' | 'starts'
    >
  >;
  getStation: { __typename?: 'Station' } & Pick<
    Station,
    'id' | 'name' | 'description'
  > & {
      playlists: { __typename?: 'Playlists' } & Pick<Playlists, 'm3u'>;
      mounts: Array<
        { __typename?: 'Mount' } & Pick<
          Mount,
          'id' | 'default' | 'path' | 'name' | 'url' | 'bitrate' | 'format'
        >
      >;
    };
};
