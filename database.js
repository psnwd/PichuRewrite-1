class db {
    constructor(name) {
        this.name = name
    }
    get(key) {
        require("axios").post("https://pichu-api.glitch.me/database/create", { password: "pichuIsTheBestBotEver", name: this.name })
        require("axios").post("https://pichu-api.glitch.me/database/" + this.name + "/get", { password: "pichuIsTheBestBotEver", key: key }).then(result => {
            return result.data
        })
    }
    has(key) {
        require("axios").post("https://pichu-api.glitch.me/database/create", { password: "pichuIsTheBestBotEver", name: this.name })
        require("axios").post("https://pichu-api.glitch.me/database/" + this.name + "/has", { password: "pichuIsTheBestBotEver", key: key }).then(result => {
            return result.data
        })
        
    }
    delete(key) {
        require("axios").post("https://pichu-api.glitch.me/database/create", { password: "pichuIsTheBestBotEver", name: this.name })
        require("axios").post("https://pichu-api.glitch.me/database/" + this.name + "/delete", { password: "pichuIsTheBestBotEver", key: key }).then(result => {
            return result.data
        })
    }
    set(key, value) {
        require("axios").post("https://pichu-api.glitch.me/database/create", { password: "pichuIsTheBestBotEver", name: this.name })
        require("axios").post("https://pichu-api.glitch.me/database/" + this.name + "/set", { password: "pichuIsTheBestBotEver", key: key, value: value }).then(result => {
            return result.data
        })
    }
    all(key) {
        require("axios").post("https://pichu-api.glitch.me/database/create", { password: "pichuIsTheBestBotEver", name: this.name })
        require("axios").post("https://pichu-api.glitch.me/database/" + this.name + "/all", { password: "pichuIsTheBestBotEver" }).then(result => {
            return result.data
        })
    }
}
