import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import { AsyncStorage } from "react-native";
import rootReducer from "./rootReducer";

// 永続化の設定
const persistConfig = {
  key: "TODO",
  storage: AsyncStorage,
  whitelist: ["todos", "currentIndex"]
};
// 新しいReducerを設定
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
// store から persistor オブジェクトを作成
export const persistor = persistStore(store);

export default store;
