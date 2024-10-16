<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [sip.js](./sip.js.md) &gt; [RegistererState](./sip.js.registererstate.md)

## RegistererState enum

[Registerer](./sip.js.registerer.md) state.

<b>Signature:</b>

```typescript
export declare enum RegistererState 
```

## Enumeration Members

|  Member | Value | Description |
|  --- | --- | --- |
|  Initial | <code>&quot;Initial&quot;</code> |  |
|  Registered | <code>&quot;Registered&quot;</code> |  |
|  Terminated | <code>&quot;Terminated&quot;</code> |  |
|  Unregistered | <code>&quot;Unregistered&quot;</code> |  |

## Remarks

The [Registerer](./sip.js.registerer.md) behaves in a deterministic manner according to the following Finite State Machine (FSM).

```txt
                  __________________________________________
                 |  __________________________              |
Registerer       | |                          v             v
Constructed -> Initial -> Registered -> Unregistered -> Terminated
                             |   ^____________|             ^
                             |______________________________|
```

