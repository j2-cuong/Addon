import { action, observable } from 'mobx';

export class CommonStore {

  /** App theme */
  @observable appTheme = localStorage.getItem('appTheme') || '#5522bb';
  @action setTheme = (themeName: string) => {
    this.appTheme = themeName;
    localStorage.setItem('appTheme', themeName);
  };

  /** Offline mode */
  @observable isOffline = false;
  @action checkIsOffline = (state: boolean) => {
    this.isOffline = state;
  };

}

export default new CommonStore();