import React from "react";
import Talk from "talkjs";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.inbox = undefined;
  }
  componentDidMount() {
    // Promise can be `then`ed multiple times
    Talk.ready
      .then(() => {
        const me = new Talk.User({
          id: "12345231",
          name: "George Looney",
        });

        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: "t0GxFCPJ",
            me: me,
          });
        }

        const other = new Talk.User({
          id: "54321",
          name: "Ronald Raygun",
        });

        // You control the ID of a conversation. oneOnOneId is a helper method that generates
        // a unique conversation ID for a given pair of users.
        const conversationId = Talk.oneOnOneId(me, other);

        const conversation = window.talkSession.getOrCreateConversation(
          conversationId
        );
        conversation.setParticipant(me);
        conversation.setParticipant(other);

        this.inbox = window.talkSession.createInbox({
          selected: conversation,
        });
        this.inbox.mount(this.container);
      })
      .catch((e) => console.error(e));
  }

  componentWillUnmount() {
    if (this.inbox) {
      this.inbox.destroy();
    }
  }

  render() {
    return (
      <span>
        <div style={{ height: "500px" }} ref={(c) => (this.container = c)}>
          Loading...
        </div>
      </span>
    );
  }
}

export default MessageForm;