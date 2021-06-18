import React, { useState } from "react";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navi() {
  const { cartItems } = useSelector((state) => state.cart);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();
  function handleSingOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSingIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />

          <Menu.Menu position="right">
            {cartItems.length>0&&<CartSummary />}
            {isAuthenticated ? (
              <SignedIn signOut={handleSingOut} bisey="1" />
            ) : (
              <SignedOut signIn={handleSingIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
