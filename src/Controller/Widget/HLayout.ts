import { Widget, WidgetConstructor } from "./Widget"

export class HLayout implements Widget {
    children:Widget[]
    variant="HLayout"
    constructor(children:Widget[]){
        this.children = children
    }
    static fromJSON(json: { children: any[]; }){
        return new HLayout(json.children.map(Widget.fromJSON));
    }
}

const check:WidgetConstructor<{}> = HLayout