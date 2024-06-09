import {
  SignInDocument,
  User,
  WhoamiDocument,
  apolloClient,
} from '../../../apollo';

export const AuthService = {
  async whoami() {
    const resMe = await apolloClient.query({
      query: WhoamiDocument,
      fetchPolicy: 'no-cache',
    });
    const me = resMe?.data?.whoami;
    const user = me as User;
    return user;
  },

  async doLogin(login: string, pass: string) {
    await apolloClient.mutate({
      mutation: SignInDocument,
      variables: { input: { login, pass } },
    });
  },
};
