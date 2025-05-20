import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";

const createEmotionCache = () => {
  return createCache({
    key: "muirtl",
    stylisPlugins: [rtlPlugin],
  });
};
const createEmotionCacheLtr = () => {
  return createCache({
    key: "muiltr",
  });
};

export { createEmotionCache, createEmotionCacheLtr };
