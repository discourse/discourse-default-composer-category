import { withPluginApi } from "discourse/lib/plugin-api";

export default {
  name: "default-composer-category",

  initialize() {
    withPluginApi("0.8.36", (api) => {
      api.modifyClass("model:composer", {
        pluginId: "default-composer-category",

        open(opts) {
          opts ||= {};

          if (opts.action === "reply") {
            return this._super(...arguments);
          }

          if (!opts.categoryId && settings.default_composer_category_id) {
            opts.categoryId = parseInt(
              settings.default_composer_category_id,
              10
            );
          }

          return this._super(...arguments);
        },
      });
    });
  },
};
