<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [ClientTransaction](./sip.js.clienttransaction.md) &gt; [receiveResponse](./sip.js.clienttransaction.receiveresponse.md)

## ClientTransaction.receiveResponse() method

Receive incoming responses from the transport which match this transaction. Responses will be delivered to the transaction user as necessary.

<b>Signature:</b>

```typescript
abstract receiveResponse(response: IncomingResponseMessage): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  response | [IncomingResponseMessage](./sip.js.incomingresponsemessage.md) | The incoming response. |

<b>Returns:</b>

void

