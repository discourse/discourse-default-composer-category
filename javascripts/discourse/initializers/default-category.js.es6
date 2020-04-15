import { withPluginApi } from "discourse/lib/plugin-api";
import Category from "discourse/models/category";

export default {
  name: "default-composer-category",

  initialize() {
    withPluginApi("0.8.36", (api) => {
      api.modifyClass("model:composer", {
        open(opts) {
          if (!opts) opts = {};

          if (!opts.categoryId && settings.default_composer_category_id) {
            opts.categoryId = settings.default_composer_category_id;
          }

          return this._super(...arguments);
        },
      });
    });
  },
};
