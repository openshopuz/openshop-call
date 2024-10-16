<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [SessionDelegate](./sip.js.sessiondelegate.md) &gt; [onSessionDescriptionHandler](./sip.js.sessiondelegate.onsessiondescriptionhandler.md)

## SessionDelegate.onSessionDescriptionHandler() method

Called upon creating a SessionDescriptionHandler.

<b>Signature:</b>

```typescript
onSessionDescriptionHandler?(sessionDescriptionHandler: SessionDescriptionHandler, provisional: boolean): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  sessionDescriptionHandler | [SessionDescriptionHandler](./sip.js.sessiondescriptionhandler.md) | The handler. |
|  provisional | boolean | True if created provisionally. |

<b>Returns:</b>

void

## Remarks

It's recommended that the SessionDescriptionHandler be accessed via the `Session.sessionDescriptionHandler` property. However there are use cases where one needs access immediately after it is constructed and before it is utilized. Thus this callback.

In most scenarios a single SessionDescriptionHandler will be created per Session in which case this callback will be called at most once and `provisional` will be `false`<!-- -->.

However if reliable provisional responses are being supported and an INVITE is sent without SDP, one or more session description handlers will be created if remote offers are received in reliable provisional responses. When remote offers are received in reliable provisional responses, the `provisional` parameter will be `true`<!-- -->. When the `provisional` paramter is `true`<!-- -->, this callback may (or may not) be called again. If the session is ultimately established using a SessionDescriptionHandler which was not created provisionally, this callback will be called again and the `provisional` parameter will be `false`<!-- -->. If the session is ultimately established using a SessionDescriptionHandler which was created provisionally, this callback will not be called again. Note that if the session is ultimately established using a SessionDescriptionHandler which was created provisionally, the provisional SessionDescriptionHandler being utilized will be available via the `Session.sessionDescriptionHandler` property.

