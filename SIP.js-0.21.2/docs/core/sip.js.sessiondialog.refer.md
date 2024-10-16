<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [SessionDialog](./sip.js.sessiondialog.md) &gt; [refer](./sip.js.sessiondialog.refer.md)

## SessionDialog.refer() method

REFER is a SIP request and is constructed as defined in \[1\]. A REFER request MUST contain exactly one Refer-To header field value. https://tools.ietf.org/html/rfc3515\#section-2.4.1

<b>Signature:</b>

```typescript
refer(delegate?: OutgoingRequestDelegate, options?: RequestOptions): OutgoingReferRequest;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  delegate | [OutgoingRequestDelegate](./sip.js.outgoingrequestdelegate.md) |  |
|  options | [RequestOptions](./sip.js.requestoptions.md) | Options bucket. |

<b>Returns:</b>

[OutgoingReferRequest](./sip.js.outgoingreferrequest.md)

