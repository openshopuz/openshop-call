<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [Referral](./sip.js.referral.md) &gt; [makeInviter](./sip.js.referral.makeinviter.md)

## Referral.makeInviter() method

Creates an inviter which may be used to send an out of dialog INVITE request.

<b>Signature:</b>

```typescript
makeInviter(options?: InviterOptions): Inviter;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  options | [InviterOptions](./sip.js.inviteroptions.md) | Options bucket. |

<b>Returns:</b>

[Inviter](./sip.js.inviter.md)

## Remarks

This a helper method to create an Inviter which will execute the referral of the `Session` which was referred. The appropriate headers are set and the referred `Session` is linked to the new `Session`<!-- -->. Note that only a single instance of the `Inviter` will be created and returned (if called more than once a reference to the same `Inviter` will be returned every time).

