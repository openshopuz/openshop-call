<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [SessionManager](./sip.js.sessionmanager.md) &gt; [message](./sip.js.sessionmanager.message.md)

## SessionManager.message() method

Send a message.

<b>Signature:</b>

```typescript
message(destination: string, message: string): Promise<void>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  destination | string | The target destination for the message. A SIP address to send the MESSAGE to. |
|  message | string |  |

<b>Returns:</b>

Promise&lt;void&gt;

## Remarks

Send a MESSAGE request.

