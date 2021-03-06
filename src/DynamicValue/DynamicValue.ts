import { DateValue, IndexValue, ParsedValue, SplitValue, TextValue, XMLValue } from ".";
import { BooleanizedValue } from "./BooleanizedValue";
import { HttpValue } from "./HttpValue";
import { NumberValue } from "./NumberValue";
import { StringifiedValue } from "./StringifiedValue";

/**
 * A callback for a [[DynamicValue]]
 */
export type Listener<T> = (value:T)=>void
/**
 * A function to unsubscribe from a [[DynamicValue]]
 */
export type Unsubscriber = ()=>void

/**
 * A DynamicValue holds a value that can potentially change and is observable
 * @template T The type of the value that is held
 */
export interface DynamicValue<T> {
    /**Metadata holding the class name of the DynamicValue, so it can be mapped back to the class from a JSON */
    __variant__:string
    name:string|void
    /**A function to subscribe to the value that is held by the DynamicValue*/
    onValue:(listener:Listener<T>)=>Unsubscriber
    getValue:()=>Promise<T>
}

export class DynamicValue<T> {
    /**
     * Maps a JSON object to an instance of its class
     */
    static fromJSON(json:any){
        switch (json.__variant__){
            case "DateValue":
                return DateValue.fromJSON(json)
            case "ParsedValue":
                return ParsedValue.fromJSON(json)
            case "TextValue":
                return TextValue.fromJSON(json)
            case "HttpValue":
                return HttpValue.fromJSON(json)
            case "SplitValue":
                return SplitValue.fromJSON(json)
            case "IndexValue":
                return IndexValue.fromJSON(json)
            case "XMLValue":
                return XMLValue.fromJSON(json)
            case "BooleanizedValue":
                return BooleanizedValue.fromJSON(json)
            case "NumberValue":
                return NumberValue.fromJSON(json)
            case "StringifiedValue":
                return StringifiedValue.fromJSON(json)
        }
    }
}