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

  /** Menu object */
  @observable menuObject = [{
                key: "home-page",
                label: "Home Page",
            },
            {
                key: "errors",
                label: "Error Pages",
                children: [
                    {
                        key: "error-page",
                        label: "404",
                    },
                ],
            },];
  @action setMenuObject = (object: any) => {
    this.menuObject = object;
  }

}

export default new CommonStore();