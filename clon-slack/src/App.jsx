import { DATA_JSON_CHANNELS, DATA_JSON_MESSAGES } from "../public/data";
import ChannelsList from "./Components/ChannelsList/ChannelsList";
import MessageList from "./Components/MessagesList/MessageList";
function App() {

  const dataMessages = DATA_JSON_MESSAGES
  const dataChannels = DATA_JSON_CHANNELS

  return (
    <>
      <MessageList messages={dataMessages}></MessageList>
      <ChannelsList channels={dataChannels}></ChannelsList>
    </>
  )
}

export default App
