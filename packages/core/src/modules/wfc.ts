import {
    IQ,
    IQCoreAssets,
    IQFrameColorOptions,
    IQMenuLoopMessageResponse,
    IQModule,
    IQModuleACLS,
    IQModuleRuntime,
    IQReactor,
    randomAsset
} from "@iniquitybbs/core"
import { IQCoreModules } from "."

/**
 * The iniquity waiting for caller module
 */
@IQModule({
    basepath: "/iniquity/core/src/assets",
    data: IQReactor({
        message: "foo"
    }),
    assets: "",
    access: IQModuleACLS.low,
    encoding: "CP437",
    computed: undefined
})
export class WFC extends IQ {
    @IQModuleRuntime()
    start() {
        this.data.observe("message", () => {
            const box = { width: 40, height: 5 }

            const frame = this.frame({
                x: (this.terminfo.x - box.width) / 2,
                y: (this.terminfo.y - box.height) / 2,
                width: box.width,
                height: box.height,
                color: IQFrameColorOptions.blue
            })

            frame.open()
            frame.say(this.data.model.message)
            frame.draw()
            this.wait(2000)
            frame.close()
        })

        const frame = this.frame({
            x: 10,
            y: 10,
            width: 30,
            height: 15,
            color: IQFrameColorOptions.blue
        })

        const menu = this.menu({
            name: "Iniquity waiting for caller screen",
            description: "Really I just get to rattle off more non-sense.",
            commands: {
                A: () => {
                    this.data.model.message = "Preparing to apply to this bbs."
                    IQCoreModules.apply()
                },
                O: () => {
                    this.data.model.message = "You pressed O. Oh how cool."
                },
                L: () => {
                    this.data.model.message = "Preparing to login..."
                    IQCoreModules.login()
                },
                default: () => {
                    this.data.model.message = "There is no command for that."
                }
            }
        })

        menu.render((res: IQMenuLoopMessageResponse, cmdkey: Function) => {
            this.artwork().render({
                filename: randomAsset([IQCoreAssets.iq3_avewfc, IQCoreAssets.iq3_cxwfc, IQCoreAssets.drm_inq1_wfc]),
                data: this.data.model,
                encoding: "CP437",
                mode: "character"
            })

            menu.prompt({ x: 20, y: 30, text: "Foo me: " }).command(cmdkey)
        })
    }
}

export default new WFC()
