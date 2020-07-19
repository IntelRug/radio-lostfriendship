export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
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

export type SignInMutationVariables = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignInMutation = { __typename?: 'Mutation' } & {
  signIn: { __typename?: 'Token' } & Pick<Token, 'ownerId' | 'value'>;
};

export type GetListenersQueryVariables = {};

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
