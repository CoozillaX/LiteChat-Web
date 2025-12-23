import { Route } from "react-router-dom";
import ChatRoutes from "./chat";

const ContactRoutes = (
  <Route path="contacts"  >
    <Route index handle={{ isEmptyPage: true }} element={<></>} />
    {ChatRoutes}
  </Route>
);

export default ContactRoutes;
