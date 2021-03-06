import { Widget, WidgetConstructor } from "./Widget"
import { Action } from "../../Action"
import { staticImplements } from "../../utils/staticImplements"

/**
 * A [[Widget]] that holds an [[Action]], and when pressed on the client the action is run
 * 
 * @example
 * ```jsx
 * new Button({icon:"power-on",action: new HttpAction({
 *       name:"on",
 *       method:"GET",
 *       base:"https://device.ip",
 *       path:"turnOn"
 *    })
 * })
 * //JSX
 * <Button icon="power-on" action={new HttpAction({
 *       name:"on",
 *       method:"GET",
 *       base:"https://device.ip",
 *       path:"turnOn"
 *    })}/>
 * ```
 */
@staticImplements<WidgetConstructor<{action:Action,icon?:string}>>()
export class Button implements Widget {
    action:Action
    icon:string
    text:string
    __variant__="Button"
    constructor({action,icon,text}:{action:Action,icon?:string,text?:string}){
        this.action = action
        this.icon = icon
        this.text = text
    }
    static fromJSON(json: { action: any; icon?: string; text?:string }){
        return new Button({action:Action.fromJSON(json.action),icon:json.icon,text:json.text});
    }
}