gdjs.EndCreditsCode = {};
gdjs.EndCreditsCode.GDNewTiledSpriteObjects1= [];
gdjs.EndCreditsCode.GDNewTiledSpriteObjects2= [];
gdjs.EndCreditsCode.GDNewTiledSprite2Objects1= [];
gdjs.EndCreditsCode.GDNewTiledSprite2Objects2= [];
gdjs.EndCreditsCode.GDFloorObjects1= [];
gdjs.EndCreditsCode.GDFloorObjects2= [];
gdjs.EndCreditsCode.GDShadowObjects1= [];
gdjs.EndCreditsCode.GDShadowObjects2= [];
gdjs.EndCreditsCode.GDNewTextObjects1= [];
gdjs.EndCreditsCode.GDNewTextObjects2= [];
gdjs.EndCreditsCode.GDNewText2Objects1= [];
gdjs.EndCreditsCode.GDNewText2Objects2= [];
gdjs.EndCreditsCode.GDNewText3Objects1= [];
gdjs.EndCreditsCode.GDNewText3Objects2= [];
gdjs.EndCreditsCode.GDEndBackgroundObjects1= [];
gdjs.EndCreditsCode.GDEndBackgroundObjects2= [];
gdjs.EndCreditsCode.GDNewText4Objects1= [];
gdjs.EndCreditsCode.GDNewText4Objects2= [];


gdjs.EndCreditsCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.EndCreditsCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.EndCreditsCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.EndCreditsCode.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.EndCreditsCode.GDNewText4Objects1);
{for(var i = 0, len = gdjs.EndCreditsCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.EndCreditsCode.GDNewTextObjects1[i].setOpacity(gdjs.EndCreditsCode.GDNewTextObjects1[i].getOpacity() + (2));
}
}{for(var i = 0, len = gdjs.EndCreditsCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.EndCreditsCode.GDNewText2Objects1[i].setOpacity(gdjs.EndCreditsCode.GDNewText2Objects1[i].getOpacity() + (2));
}
}{for(var i = 0, len = gdjs.EndCreditsCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.EndCreditsCode.GDNewText3Objects1[i].setOpacity(gdjs.EndCreditsCode.GDNewText3Objects1[i].getOpacity() + (2));
}
}{for(var i = 0, len = gdjs.EndCreditsCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.EndCreditsCode.GDNewText4Objects1[i].setOpacity(gdjs.EndCreditsCode.GDNewText4Objects1[i].getOpacity() + (2));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs.EndCreditsCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.EndCreditsCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText3"), gdjs.EndCreditsCode.GDNewText3Objects1);
gdjs.copyArray(runtimeScene.getObjects("NewText4"), gdjs.EndCreditsCode.GDNewText4Objects1);
{for(var i = 0, len = gdjs.EndCreditsCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs.EndCreditsCode.GDNewTextObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndCreditsCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.EndCreditsCode.GDNewText2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndCreditsCode.GDNewText3Objects1.length ;i < len;++i) {
    gdjs.EndCreditsCode.GDNewText3Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndCreditsCode.GDNewText4Objects1.length ;i < len;++i) {
    gdjs.EndCreditsCode.GDNewText4Objects1[i].setOpacity(0);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "kim-lightyear-legends-109307.mp3", false, 100, 1);
}}

}


};

gdjs.EndCreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCreditsCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.EndCreditsCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.EndCreditsCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.EndCreditsCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.EndCreditsCode.GDFloorObjects1.length = 0;
gdjs.EndCreditsCode.GDFloorObjects2.length = 0;
gdjs.EndCreditsCode.GDShadowObjects1.length = 0;
gdjs.EndCreditsCode.GDShadowObjects2.length = 0;
gdjs.EndCreditsCode.GDNewTextObjects1.length = 0;
gdjs.EndCreditsCode.GDNewTextObjects2.length = 0;
gdjs.EndCreditsCode.GDNewText2Objects1.length = 0;
gdjs.EndCreditsCode.GDNewText2Objects2.length = 0;
gdjs.EndCreditsCode.GDNewText3Objects1.length = 0;
gdjs.EndCreditsCode.GDNewText3Objects2.length = 0;
gdjs.EndCreditsCode.GDEndBackgroundObjects1.length = 0;
gdjs.EndCreditsCode.GDEndBackgroundObjects2.length = 0;
gdjs.EndCreditsCode.GDNewText4Objects1.length = 0;
gdjs.EndCreditsCode.GDNewText4Objects2.length = 0;

gdjs.EndCreditsCode.eventsList0(runtimeScene);

return;

}

gdjs['EndCreditsCode'] = gdjs.EndCreditsCode;
