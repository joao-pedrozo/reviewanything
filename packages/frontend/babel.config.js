module.exports = {
    presets: ["next/babel"],
    plugins: [["styled-components", { "ssr": true }], ["relay", { "artifactDirectory": "types/__generated__" }]]
}