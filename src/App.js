import './App.css';
import { useEffect, useState } from 'react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { AmplifyAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import './amplify-config'

function App() {
  const [authState, setAuthState] = useState()
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData)
    });
  })

  return authState === AuthState.SignedIn && user ? (
    <div className="App">
      App
      <AmplifySignOut />
    </div>
  ) :  <AmplifyAuthenticator />;
}

export default App;
