<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [Invitation](./sip.js.invitation.md) &gt; [reject](./sip.js.invitation.reject.md)

## Invitation.reject() method

Reject the invitation.

<b>Signature:</b>

```typescript
reject(options?: InvitationRejectOptions): Promise<void>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  options | [InvitationRejectOptions](./sip.js.invitationrejectoptions.md) | Options bucket. |

<b>Returns:</b>

Promise&lt;void&gt;

## Remarks

Replies to the INVITE request with a 4xx, 5xx, or 6xx final response. Resolves once the response sent, otherwise rejects.

The expectation is that this method is used to reject an INVITE request. That is indeed the case - a call to `progress` followed by `reject` is a typical way to "decline" an incoming INVITE request. However it may also be called after calling `accept` (but only before it completes) which will reject the call and cause `accept` to reject.

