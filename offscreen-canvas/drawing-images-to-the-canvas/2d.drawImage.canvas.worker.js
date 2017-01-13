// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.drawImage.canvas
// Description:
// Note:

importScripts("/resources/testharness.js");
importScripts("/common/canvas-tests.js");

var t = async_test("");
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

var offscreenCanvas2 = new OffscreenCanvas(100, 50);
var ctx2 = offscreenCanvas2.getContext('2d');
ctx2.fillStyle = '#0f0';
ctx2.fillRect(0, 0, 100, 50);
ctx.fillStyle = '#f00';
ctx.drawImage(offscreenCanvas2, 0, 0);
_assertPixelApprox(offscreenCanvas, 0,0, 0,255,0,255, "0,0", "0,255,0,255", 2);
_assertPixelApprox(offscreenCanvas, 99,0, 0,255,0,255, "99,0", "0,255,0,255", 2);
_assertPixelApprox(offscreenCanvas, 0,49, 0,255,0,255, "0,49", "0,255,0,255", 2);
_assertPixelApprox(offscreenCanvas, 99,49, 0,255,0,255, "99,49", "0,255,0,255", 2);

t.done();

});
done();
