import commonStore, { CommonStore } from './commonStore';
import authenticationStore, { AuthenticationStore } from '@/stores/authenticationStore';
import loadingAnimationStore, { LoadingAnimationStore } from '@/stores/loadingAnimationStore';

export type RootStore = {
  authenticationStore: AuthenticationStore;
  commonStore: CommonStore;
  loadingAnimationStore: LoadingAnimationStore;
}

const rootStore: RootStore = {
  authenticationStore,
  commonStore,
  loadingAnimationStore,
};

export default rootStore;