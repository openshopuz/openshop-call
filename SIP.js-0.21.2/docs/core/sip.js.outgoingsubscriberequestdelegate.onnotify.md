<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [OutgoingSubscribeRequestDelegate](./sip.js.outgoingsubscriberequestdelegate.md) &gt; [onNotify](./sip.js.outgoingsubscriberequestdelegate.onnotify.md)

## OutgoingSubscribeRequestDelegate.onNotify() method

Received the initial subscription creating NOTIFY in response to this request. Called for out of dialog SUBSCRIBE requests only (not called for re-SUBSCRIBE requests).

<b>Signature:</b>

```typescript
onNotify?(request: IncomingRequestWithSubscription): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [IncomingRequestWithSubscription](./sip.js.incomingrequestwithsubscription.md) | Incoming NOTIFY request (including a Subscription). |

<b>Returns:</b>

void

