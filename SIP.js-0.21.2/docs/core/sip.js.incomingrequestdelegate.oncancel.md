<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [IncomingRequestDelegate](./sip.js.incomingrequestdelegate.md) &gt; [onCancel](./sip.js.incomingrequestdelegate.oncancel.md)

## IncomingRequestDelegate.onCancel() method

Receive CANCEL request. https://tools.ietf.org/html/rfc3261\#section-9.2 Note: Currently CANCEL is being handled as a special case. No UAS is created to handle the CANCEL and the response to it CANCEL is being handled statelessly by the user agent core. As such, there is currently no way to externally impact the response to the a CANCEL request and thus the method here is receiving a "message" (as apposed to a "uas").

<b>Signature:</b>

```typescript
onCancel?(message: IncomingRequestMessage): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  message | [IncomingRequestMessage](./sip.js.incomingrequestmessage.md) | Incoming CANCEL request message. |

<b>Returns:</b>

void

