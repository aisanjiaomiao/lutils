
const execa = require("execa");

const envs = [
    "FULL:false", ["FULL:false", "MIN:true", `SOURCE_MAP:true`].filter(Boolean).join(','),
    "FULL:true", ["FULL:true", "MIN:true", `SOURCE_MAP:true`].filter(Boolean).join(',')
];
(async function () {
    for (let e of envs) {
        await execa(
            'rollup',
            ['-c', '--environment', e],
            { stdio: 'inherit' }
        )
    }
})();