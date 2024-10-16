<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [PeerConnectionDelegate](./sip.js.peerconnectiondelegate.md) &gt; [oniceconnectionstatechange](./sip.js.peerconnectiondelegate.oniceconnectionstatechange.md)

## PeerConnectionDelegate.oniceconnectionstatechange() method

This happens whenever the local ICE agent needs to deliver a message to the other peer through the signaling server. This lets the ICE agent perform negotiation with the remote peer without the browser itself needing to know any specifics about the technology being used for signalingTriggered when the IceConnectionState changes.

<b>Signature:</b>

```typescript
oniceconnectionstatechange?(event: Event): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  event | Event | Event. |

<b>Returns:</b>

void

