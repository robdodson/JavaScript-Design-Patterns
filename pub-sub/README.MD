# PUB SUB PATTERN

![pub-sub](images/publish-subscribe.png)

## Pub/sub messaging has the following benefits:

- It decouples subsystems that still need to communicate. Subsystems can be managed independently, and messages can be properly managed even if one or more receivers are offline.

- It increases scalability and improves responsiveness of the sender. The sender can quickly send a single message to the input channel, then return to its core processing responsibilities. The messaging infrastructure is responsible for ensuring messages are delivered to interested subscribers.

- It improves reliability. Asynchronous messaging helps applications continue to run smoothly under increased loads and handle intermittent failures more effectively.

- It allows for deferred or scheduled processing. Subscribers can wait to pick up messages until off-peak hours, or messages can be routed or processed according to a specific schedule.

- It enables simpler integration between systems using different platforms, programming languages, or communication protocols, as well as between on-premises systems and applications running in the cloud.

- It facilitates asynchronous workflows across an enterprise.

- It improves testability. Channels can be monitored and messages can be inspected or logged as part of an overall integration test strategy.

- It provides separation of concerns for your applications. Each application can focus on its core capabilities, while the messaging infrastructure handles everything required to reliably route messages to multiple consumers.

## When to use this pattern

Use this pattern when:

- An application needs to broadcast information to a significant number of consumers.

- An application needs to communicate with one or more independently-developed applications or services, which may use different platforms, programming languages, and communication protocols.

- An application can send information to consumers without requiring real-time responses from the consumers.

- The systems being integrated are designed to support an eventual consistency model for their data.

- An application needs to communicate information to multiple consumers, which may have different availability requirements or uptime schedules than the sender.

This pattern might not be useful when:

- An application has only a few consumers who need significantly different information from the producing application.

- An application requires near real-time interaction with consumers.

### References

 - [Microsoft](https://docs.microsoft.com/en-us/azure/architecture/patterns/publisher-subscriber)
 - [Youtube - Dev Pleno - PT-BR](https://www.youtube.com/watch?v=B3YqxAFs-IQ)
