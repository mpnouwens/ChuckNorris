import { init } from "@rematch/core";
import joke from "./joke";

const models = {
  joke
};

const store = init({
  models
});

export default store;
