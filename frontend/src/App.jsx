import {
  OrganizationSwitcher,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import "./App.css";

function App() {
  return (
    <>
      <h1>Welcome to Authentication </h1>

      <SignedOut>
        <SignInButton mode="modal"> sign in with google </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
}

export default App;
