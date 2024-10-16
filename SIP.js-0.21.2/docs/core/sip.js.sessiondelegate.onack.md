<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [SessionDelegate](./sip.js.sessiondelegate.md) &gt; [onAck](./sip.js.sessiondelegate.onack.md)

## SessionDelegate.onAck() method

Receive ACK request.

<b>Signature:</b>

```typescript
onAck?(request: IncomingAckRequest): Promise<void> | void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  request | [IncomingAckRequest](./sip.js.incomingackrequest.md) | Incoming ACK request. |

<b>Returns:</b>

Promise&lt;void&gt; \| void

The callback MUST return a promise if it asynchronously handles answers. For example, an ACK with an answer (offer in the 200 Ok) may require asynchronous processing in which case the callback MUST return a Promise which resolves when the answer handling is complete.

