<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [NonInviteServerTransaction](./sip.js.noninviteservertransaction.md) &gt; [receiveResponse](./sip.js.noninviteservertransaction.receiveresponse.md)

## NonInviteServerTransaction.receiveResponse() method

Receive responses from TU for this transaction.

<b>Signature:</b>

```typescript
receiveResponse(statusCode: number, response: string): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  statusCode | number | Status code of response. 101-199 not allowed per RFC 4320. |
|  response | string | Response to send. |

<b>Returns:</b>

void

