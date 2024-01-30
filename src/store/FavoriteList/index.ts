import { create } from 'zustand';
import { Post } from '../../types/post';

type FavoriteList = {
  state: {
    favoriteList: Post[];
  };
  actions: {
    addPostInFavoriteList: (post: Post) => void;
  };
};

export const useFavoriteListStore = create<FavoriteList>((set) => {
  return {
    state: {
      favoriteList: [],
    },
    actions: {
      addPostInFavoriteList: (post) => {
        set((state) => ({
          state: {
            ...state.state,
            favoriteList: [...state.state.favoriteList, post],
          },
        }));
      },
    },
  };
});
