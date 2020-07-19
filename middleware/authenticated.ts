import { Context } from '@nuxt/types';

export default function({ app, route, store, redirect }: Context) {
  const blockedForLoggedIn: string[] = ['login'];
  const unblockedForLoggedOut: string[] = [];
  if (
    blockedForLoggedIn.includes(route.name || '') &&
    store.state.logged &&
    app.router
  ) {
    redirect(302, '/');
  } else if (
    !unblockedForLoggedOut.includes(route.name || '') &&
    !store.state.logged &&
    app.router
  ) {
    redirect(302, '/login');
  }
}
