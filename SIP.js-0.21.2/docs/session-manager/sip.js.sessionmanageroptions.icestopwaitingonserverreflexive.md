<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [SessionManagerOptions](./sip.js.sessionmanageroptions.md) &gt; [iceStopWaitingOnServerReflexive](./sip.js.sessionmanageroptions.icestopwaitingonserverreflexive.md)

## SessionManagerOptions.iceStopWaitingOnServerReflexive property

Stop waiting for ICE gathering to complete once a server reflexive address is obtained.

<b>Signature:</b>

```typescript
iceStopWaitingOnServerReflexive?: boolean;
```

## Remarks

This is an aggressive approach to limiting the amount of time spent gathering ICE candidates. While this will contribute to minimizing the post dial/answer delay experienced, it will very likely prevent a complete set of candidates from being gathered. If an ICE gathering timeout is also provided as an option to the session description handler, waiting will stop on whichever event occurs first.

