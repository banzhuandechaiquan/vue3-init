import type { PersistedStateOptions, StorageLike } from "pinia-plugin-persistedstate";

/**
 * @description pinia 持久化参数配置
 * @param {String} key 存储到持久化的 name
 * @param {String} storage 存储到持久化的类型
 * @param {Array} paths 需要持久化的 state name
 * @return persist
 * */
const piniaPersistConfig = (
  key: string,
  storage: StorageLike | undefined = localStorage,
  paths?: string[]
) => {
  const persist: PersistedStateOptions = {
    key,
    storage: storage,
    paths
  };
  return persist;
};

export default piniaPersistConfig;
