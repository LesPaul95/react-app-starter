export default class Backend {
  static type = 'backend';

  // @ts-ignore
  type = 'backend';

  init() {
    // this.services = services;
    // this.options = Object.assign({}, options, defaults);
  }

  read(language: any, namespace: any, callback: any) {
    import(`./locales/${language}/${namespace}.json`).then((module) => callback(null, module));
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(languages: any, namespace: any, key: any, fallbackValue: any) {
    throw new Error('Not implemented');
  }
}
