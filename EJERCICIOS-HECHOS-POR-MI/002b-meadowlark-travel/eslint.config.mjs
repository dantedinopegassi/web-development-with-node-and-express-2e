import globals from "globals";
import pluginJs from "@eslint/js";

// nidea por que pinches eslint cambio el formato de configuracion que tenia...
// antes era        env: {"jest": true}
// ahora es asi:    ...globals.jest
// vaya dio a saber por que es asi... +Info: 
// https://eslint.org/docs/latest/use/configure/migration-guide#configuring-language-options

export default [
    { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest,
            },
        },
    },
    pluginJs.configs.recommended,
];
