let now = new Date().toLocaleTimeString();
let listeners = <any>[];

setInterval(() => {
  now = new Date().toLocaleTimeString();
  listeners.forEach((notify: any) => notify());
  console.log(listeners);
}, 1000);

export const timeStore = {
  subscribe(listener: any) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l: any) => l !== listener);
    };
  },
  getSnapshot() {
    return now;
  },
};
