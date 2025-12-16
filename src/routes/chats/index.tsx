import { Route } from "react-router-dom";

const ChatRoutes = (
  <Route path="chats" index handle={{ isEmptyPage: true }} element={<></>} />
);

export default ChatRoutes;
