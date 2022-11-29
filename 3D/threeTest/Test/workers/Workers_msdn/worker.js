self.importScripts( 'js/three.js');

// listen for main to transfer the buffer to myWorker
self.onmessage = function handleMessageFromMain(msg) {
  console.log("message from main received in worker:", msg);

  const bufTransferredFromMain = msg.data;
  const geometry2 = new THREE.PlaneGeometry( 60,20);

  console.log(
    "buf.byteLength in worker BEFORE transfer back to main:",
    bufTransferredFromMain.byteLength
  );
	const bufTransferredFromMain2 =new ArrayBuffer(16);
  // send buf back to main and transfer the underlying ArrayBuffer
  self.postMessage(bufTransferredFromMain2, [bufTransferredFromMain2]);

  console.log(
    "buf.byteLength in worker AFTER transfer back to main:",
    bufTransferredFromMain.byteLength
  );
};
