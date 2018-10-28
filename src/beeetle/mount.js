import { when } from "ramda";

const didMount = when(
  element => element.read().componentDidMount,
  element =>
    element.read().componentDidMount({
      getState: element.read().getState(element),
      setState: fn => element.read().setState(element)(fn)
    })
);

const render = when(
  element => element.read().render,
  element => element.read().render(element)
);

export const mount = {
  mount: element => {
    didMount(element);
    render(element);
  }
};
