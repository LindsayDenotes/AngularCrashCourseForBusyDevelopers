export class LikeLb {
    // define fields and their types in the constructor
    constructor(_numLikes, _isOn) {
        this._numLikes = _numLikes;
        this._isOn = _isOn;
    }
    onClick() {
        this._numLikes += (this._isOn) ? -1 : +1;
        this._isOn = !this._isOn;
    }
    get isOn() {
        return this._isOn;
    }
    get numLikes() {
        return this._numLikes;
    }
}
