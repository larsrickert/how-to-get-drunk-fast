# API `Frontend/GUI <-> Backend/Businesslogic`

This file and [openapi.yaml](the OpenAPI specification) fully describe all interfaces/interactions between the GUI and the backend managing the game logic.

There are two interfaces between the GUI and the backend: Firstly a REST-API for delivering static data and for Request-Response Actions initiated by the client.
The second interface is Websocket (using SOCKET.IO) which broadcasts data from the server to all connected clients (without any responses from the clients).

The REST-API is fully described in [openapi.yaml](the OpenAPI specification).
The semantic protocol for data transferred over the websocket is described below.

## Semantic user broadcast agreement (SUBRA)

The SUBRA-protocol uses two topic-patterns to broadcast data to the users.
These patterns are `lobby::{LID}::state` and `lobby::{LID}::prompt`.

### `lobby::{LID}::state`
This topic is used to publish the current state of a lobby.
All messages published on these topics are compliant with the Schema-object `LobbyData` from [openapi.yaml](the OpenAPI specification).
The optional attribute `LobbyData#lastMessage` will NEVER be contained in this data.
A message is published on this topic when any of the following events takes place:
  - A player joins/leaves/connects/disconnects.
  - The settings for the promptTypes are changed.
  - The value of `LobbyData#waitingFor` changes.

Note that the data will NOT be sent when the round changes. The clients should use `PromptMessage#round` from `lobby::{LID}::prompt` to update their round number.

### `lobby::{LID}::prompt`
This topic is used to publish prompts for the lobby.
Every prompt has a sequential number which increments.
This value may be monitored to detect lost messages (but it is not necessary).
There is no message secrecy. It is the clients obligation to check which information may be displayed and which may not (e.g. IMPOSTOR tasks are still sent to every client, but may only be shown to the recipient of the task).