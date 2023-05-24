gdjs.IntroCode = {};
gdjs.IntroCode.GDNewTiledSpriteObjects1= [];
gdjs.IntroCode.GDNewTiledSpriteObjects2= [];
gdjs.IntroCode.GDNewTiledSprite2Objects1= [];
gdjs.IntroCode.GDNewTiledSprite2Objects2= [];
gdjs.IntroCode.GDFloorObjects1= [];
gdjs.IntroCode.GDFloorObjects2= [];
gdjs.IntroCode.GDShadowObjects1= [];
gdjs.IntroCode.GDShadowObjects2= [];
gdjs.IntroCode.GDNewTextObjects1= [];
gdjs.IntroCode.GDNewTextObjects2= [];
gdjs.IntroCode.GDNewText2Objects1= [];
gdjs.IntroCode.GDNewText2Objects2= [];
gdjs.IntroCode.GDNewText3Objects1= [];
gdjs.IntroCode.GDNewText3Objects2= [];
gdjs.IntroCode.GDNewText4Objects1= [];
gdjs.IntroCode.GDNewText4Objects2= [];


gdjs.IntroCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main game", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "kim-lightyear-legends-109307.mp3", true, 50, 1);
}}

}


};

gdjs.IntroCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.IntroCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.IntroCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.IntroCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.IntroCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.IntroCode.GDFloorObjects1.length = 0;
gdjs.IntroCode.GDFloorObjects2.length = 0;
gdjs.IntroCode.GDShadowObjects1.length = 0;
gdjs.IntroCode.GDShadowObjects2.length = 0;
gdjs.IntroCode.GDNewTextObjects1.length = 0;
gdjs.IntroCode.GDNewTextObjects2.length = 0;
gdjs.IntroCode.GDNewText2Objects1.length = 0;
gdjs.IntroCode.GDNewText2Objects2.length = 0;
gdjs.IntroCode.GDNewText3Objects1.length = 0;
gdjs.IntroCode.GDNewText3Objects2.length = 0;
gdjs.IntroCode.GDNewText4Objects1.length = 0;
gdjs.IntroCode.GDNewText4Objects2.length = 0;

gdjs.IntroCode.eventsList0(runtimeScene);

return;

}

gdjs['IntroCode'] = gdjs.IntroCode;
