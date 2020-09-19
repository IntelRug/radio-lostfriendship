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
  listenersCount: Scalars['Float'];
};

export type CurrentPlayingTrack = {
  __typename?: 'CurrentPlayingTrack';
  id: Scalars['Int'];
  name: Scalars['String'];
  title: Scalars['String'];
  artist: Scalars['String'];
  startsAt: Scalars['Float'];
  endsAt: Scalars['Float'];
  length: Scalars['Float'];
  hasArtwork: Scalars['Boolean'];
  type: Scalars['String'];
};

export type Listener = {
  __typename?: 'Listener';
  id: Scalars['Int'];
  icecastId: Scalars['Int'];
  mount: Scalars['String'];
  ip: Scalars['String'];
  connectedFor: Scalars['Int'];
  agent?: Maybe<Scalars['String']>;
  connectedAt: Scalars['Int'];
  disconnectedAt?: Maybe<Scalars['Int']>;
  location?: Maybe<Location>;
};

export type Location = {
  __typename?: 'Location';
  country: Scalars['String'];
  city: Scalars['String'];
  lat: Scalars['Float'];
  lon: Scalars['Float'];
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

export type Query = {
  __typename?: 'Query';
  getHello: Scalars['String'];
  getCurrentUser: User;
  getListeners: Array<Listener>;
  getTracksHistory: Array<TracksHistoryItem>;
  getCurrentPlaying?: Maybe<CurrentPlaying>;
  getCalendarEvents: Array<CalendarEvent>;
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

export type GetGeneralDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetGeneralDataQuery = { __typename?: 'Query' } & {
  getCurrentPlaying?: Maybe<
    { __typename?: 'CurrentPlaying' } & Pick<
      CurrentPlaying,
      'listenersCount'
    > & {
        previous: { __typename?: 'CurrentPlayingTrack' } & Pick<
          CurrentPlayingTrack,
          | 'id'
          | 'name'
          | 'title'
          | 'artist'
          | 'startsAt'
          | 'endsAt'
          | 'length'
          | 'hasArtwork'
          | 'type'
        >;
        current: { __typename?: 'CurrentPlayingTrack' } & Pick<
          CurrentPlayingTrack,
          | 'id'
          | 'name'
          | 'title'
          | 'artist'
          | 'startsAt'
          | 'endsAt'
          | 'length'
          | 'hasArtwork'
          | 'type'
        >;
        next: { __typename?: 'CurrentPlayingTrack' } & Pick<
          CurrentPlayingTrack,
          | 'id'
          | 'name'
          | 'title'
          | 'artist'
          | 'startsAt'
          | 'endsAt'
          | 'length'
          | 'hasArtwork'
          | 'type'
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
      'track_title' | 'artist_name' | 'info_url'
    >
  >;
};

export type GetListenersQueryVariables = Exact<{ [key: string]: never }>;

export type GetListenersQuery = { __typename?: 'Query' } & {
  getListeners: Array<
    { __typename?: 'Listener' } & Pick<
      Listener,
      | 'id'
      | 'icecastId'
      | 'ip'
      | 'mount'
      | 'connectedAt'
      | 'connectedFor'
      | 'disconnectedAt'
      | 'agent'
    > & {
        location?: Maybe<
          { __typename?: 'Location' } & Pick<
            Location,
            'country' | 'city' | 'lat' | 'lon'
          >
        >;
      }
  >;
};
