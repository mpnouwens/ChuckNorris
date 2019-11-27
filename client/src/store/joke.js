const joke = {
  state: "",
  reducers: {
    search(state, search) {
      return {
        ...state,
        search
      };
    }
  }
};

export default joke;
