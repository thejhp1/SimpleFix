import React from "react";
import { Switch, Route } from "react-router-dom";
import TicketList from "../Ticket/TicketList";
import PartList from "../Part/PartList";
import ClaimList from "../Claim/ClaimList";
import "../../styles/components/ListTemplate.css"

export default function ListTemplate() {
  return (
    <>
        <Switch>
            <Route path="/tickets">
                <section className="list-template-container">
                    <TicketList />
                </section>
            </Route>
            <Route path="/parts">
                <section className="list-template-container">
                    <PartList />
                </section>
            </Route>
            <Route path="/claims">
                <section className="list-template-container">
                    <ClaimList />
                </section>
            </Route>
        </Switch>
    </>
  );
}
