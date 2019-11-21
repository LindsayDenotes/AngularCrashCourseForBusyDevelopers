export class LikeLb {
    // define fields and their types in the constructor
    constructor(private _numLikes: number, private _isOn: boolean){
    }

    onClick(){
        this._numLikes += (this._isOn) ? -1 : +1;
        this._isOn = !this._isOn;
    }
    // you will rarely need to define get and set properties when using Angular because view is bound directly to value.
    get isOn(){
        return this._isOn;
    }

    get numLikes(){
        return this._numLikes;
    }

    

}