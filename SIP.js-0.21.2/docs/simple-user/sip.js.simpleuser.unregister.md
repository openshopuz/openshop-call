<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [SimpleUser](./sip.js.simpleuser.md) &gt; [unregister](./sip.js.simpleuser.unregister.md)

## SimpleUser.unregister() method

Stop receiving incoming calls.

<b>Signature:</b>

```typescript
unregister(registererUnregisterOptions?: RegistererUnregisterOptions): Promise<void>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  registererUnregisterOptions | RegistererUnregisterOptions |  |

<b>Returns:</b>

Promise&lt;void&gt;

## Remarks

Send an un-REGISTER request for the UserAgent's AOR. Resolves when the un-REGISTER request is sent, otherwise rejects.

