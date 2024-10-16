<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [PublisherOptions](./sip.js.publisheroptions.md)

## PublisherOptions interface

Options for [Publisher](./sip.js.publisher.md) constructor.

<b>Signature:</b>

```typescript
export interface PublisherOptions 
```

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [body](./sip.js.publisheroptions.body.md) |  | string |  |
|  [contentType](./sip.js.publisheroptions.contenttype.md) |  | string |  |
|  [expires](./sip.js.publisheroptions.expires.md) |  | number | Expire value for the published event. |
|  [extraHeaders](./sip.js.publisheroptions.extraheaders.md) |  | Array&lt;string&gt; | Array of extra headers added to the PUBLISH request message. |
|  [params](./sip.js.publisheroptions.params.md) |  | { fromDisplayName?: string; fromTag?: string; fromUri?: URI; toDisplayName?: string; toUri?: URI; } |  |
|  [unpublishOnClose](./sip.js.publisheroptions.unpublishonclose.md) |  | boolean | If set true, UA will gracefully unpublish for the event on UA close. |

