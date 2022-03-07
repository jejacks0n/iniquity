import iniquity, { IQModule, IQModuleContainer, IQModuleRuntime, IQModuleACLS } from "@iniquitybbs/core"

@IQModule({
    assets: "/iniquity/core/src/assets/",
    access: IQModuleACLS.medium
})
export class Apply extends IQModuleContainer {
    @IQModuleRuntime({ debug: true })
    _() {
        iniquity.artwork({ basepath: "/iniquity/core/src/assets", filename: "5m-ink2menu.ans" }).render({ clearScreenBefore: true })

        let newUser = iniquity.user({
            name: iniquity.ask("What would you like your handle to be?".newlines(2).color("white")),
            password: iniquity.ask("And your password?".newlines(2).color("white"))
        })

        iniquity.say(`Welcome ${newUser.name}. And goodbye!`.newlines().center())
    }
}