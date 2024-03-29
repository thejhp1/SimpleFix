import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import session from "./session";
import logger from "redux-logger";
import ticketReducer from "./ticket";
import singleTicketReducer from "./singleTicket"
import partReducer from "./part";
import claimReducer from "./claim"

const rootReducer = combineReducers({
  session,
  tickets: ticketReducer,
  singleTicket: singleTicketReducer,
  parts: partReducer,
  claims: claimReducer,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
