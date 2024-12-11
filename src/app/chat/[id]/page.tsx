/**
 * leets create a chat page that have a header in the top content the name of the chat and a back button and also leave button in the right side of the header
 * then we will have a chat box that will have the messages of the chat and a input box to send messages
 * the chat box will have a scroll bar to scroll through the messages
 * the input box will have a send button to send the message
 * all this use a shadcn component to style the page
 * and this is is a child of chard tag
 */

import ChatPage from "./_components/Chatpage";

const Page = async function ({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const messages = [
      {
        text: 'Hello! How are you?',
        sender: 'User',  // or 'You' for the current user
        timestamp: new Date('2024-12-11T10:30:00Z'),
      },
      {
        text: 'I am good, thanks!',
        sender: 'Other User',
        timestamp: new Date('2024-12-11T10:31:00Z'),
      },
    ];

    
    
    return <ChatPage id={id} oldMessages={messages} />;
};

export default Page;
