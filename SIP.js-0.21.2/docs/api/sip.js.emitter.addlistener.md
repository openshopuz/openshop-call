<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [Emitter](./sip.js.emitter.md) &gt; [addListener](./sip.js.emitter.addlistener.md)

## Emitter.addListener() method

Sets up a function that will be called whenever the target changes.

<b>Signature:</b>

```typescript
addListener(listener: (data: T) => void, options?: {
        once?: boolean;
    }): void;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  listener | (data: T) =&gt; void | Callback function. |
|  options | { once?: boolean; } | An options object that specifies characteristics about the listener. If once true, indicates that the listener should be invoked at most once after being added. If once true, the listener would be automatically removed when invoked. |

<b>Returns:</b>

void

