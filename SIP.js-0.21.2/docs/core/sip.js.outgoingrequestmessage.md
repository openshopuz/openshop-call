<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [OutgoingRequestMessage](./sip.js.outgoingrequestmessage.md)

## OutgoingRequestMessage class

Outgoing SIP request message.

<b>Signature:</b>

```typescript
export declare class OutgoingRequestMessage 
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(method, ruri, fromURI, toURI, options, extraHeaders, body)](./sip.js.outgoingrequestmessage._constructor_.md) |  | Constructs a new instance of the <code>OutgoingRequestMessage</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [body](./sip.js.outgoingrequestmessage.body.md) |  | { body: string; contentType: string; } \| undefined |  |
|  [branch](./sip.js.outgoingrequestmessage.branch.md) |  | string \| undefined |  |
|  [callId](./sip.js.outgoingrequestmessage.callid.md) |  | string |  |
|  [cseq](./sip.js.outgoingrequestmessage.cseq.md) |  | number |  |
|  [extraHeaders](./sip.js.outgoingrequestmessage.extraheaders.md) |  | Array&lt;string&gt; |  |
|  [from](./sip.js.outgoingrequestmessage.from.md) |  | [NameAddrHeader](./sip.js.nameaddrheader.md) |  |
|  [fromTag](./sip.js.outgoingrequestmessage.fromtag.md) |  | string |  |
|  [fromURI](./sip.js.outgoingrequestmessage.fromuri.md) |  | [URI](./sip.js.uri.md) |  |
|  [headers](./sip.js.outgoingrequestmessage.headers.md) |  | { \[name: string\]: Array&lt;string&gt;; } |  |
|  [method](./sip.js.outgoingrequestmessage.method.md) |  | string |  |
|  [ruri](./sip.js.outgoingrequestmessage.ruri.md) |  | [URI](./sip.js.uri.md) |  |
|  [to](./sip.js.outgoingrequestmessage.to.md) |  | [NameAddrHeader](./sip.js.nameaddrheader.md) |  |
|  [toTag](./sip.js.outgoingrequestmessage.totag.md) |  | string \| undefined |  |
|  [toURI](./sip.js.outgoingrequestmessage.touri.md) |  | [URI](./sip.js.uri.md) |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [getHeader(name)](./sip.js.outgoingrequestmessage.getheader.md) |  | Get the value of the given header name at the given position. |
|  [getHeaders(name)](./sip.js.outgoingrequestmessage.getheaders.md) |  | Get the header/s of the given name. |
|  [hasHeader(name)](./sip.js.outgoingrequestmessage.hasheader.md) |  | Verify the existence of the given header. |
|  [setHeader(name, value)](./sip.js.outgoingrequestmessage.setheader.md) |  | Replace the the given header by the given value. |
|  [setViaHeader(branch, transport)](./sip.js.outgoingrequestmessage.setviaheader.md) |  | <p>The Via header field indicates the transport used for the transaction and identifies the location where the response is to be sent. A Via header field value is added only after the transport that will be used to reach the next hop has been selected (which may involve the usage of the procedures in \[4\]).</p><p>When the UAC creates a request, it MUST insert a Via into that request. The protocol name and protocol version in the header field MUST be SIP and 2.0, respectively. The Via header field value MUST contain a branch parameter. This parameter is used to identify the transaction created by that request. This parameter is used by both the client and the server. https://tools.ietf.org/html/rfc3261\#section-8.1.1.7</p> |
|  [toString()](./sip.js.outgoingrequestmessage.tostring.md) |  |  |

