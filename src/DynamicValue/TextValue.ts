import { DynamicValue, Listener, Unsubscriber } from "./DynamicValue"

export class TextValue implements DynamicValue<string> {
    variant="TextValue"
    text:string
    constructor(text:string){
        this.text = text
    }
    onValue(listener:Listener<string>):Unsubscriber{
        listener(this.text)
        return ()=> {}
    }
    toJSON(){
        return {
            text:this.text,
            variant:this.variant
        }
    }
    static fromJSON(json:{text:string}){
        return new TextValue(json.text)
    }
}