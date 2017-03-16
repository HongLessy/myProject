cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        tree_skin:{
            type:cc.SpriteFrame,
            default:[],
        },
    },

    // use this for initialization
    onLoad: function () {
        this.anim = this.node.getChildByName("anim");
    },
    start: function() {
        this._set_tree_skin();    
    },
    //更换树的皮肤
    _set_tree_skin: function() {
        var skin_type = Math.random() * 4 + 1;
        skin_type = Math.floor(skin_type);
        if (skin_type >= 5) {
            skin_type = 4;
        }
        this.anim.getComponent(cc.Sprite).spriteFrame = this.tree_skin[skin_type - 1];
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
