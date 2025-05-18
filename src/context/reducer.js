const store = JSON.parse(localStorage.getItem("store"));

export const initialState = store || {
  count: 0,
  saved: [],
  wishlist: [],
  token: null,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SAVED":
      let index = state.saved.findIndex(({ id }) => id === payload.id);
      let store = null;
      if (index < 0) {
        store = { ...state, saved: [...state.saved, payload] };
      } else {
        store = {
          ...state,
          saved: state.saved.filter(({ id }) => id !== payload.id),
        };
      }

      localStorage.setItem("store", JSON.stringify(store));
      return store;
    default:
      return state;
  }
};
