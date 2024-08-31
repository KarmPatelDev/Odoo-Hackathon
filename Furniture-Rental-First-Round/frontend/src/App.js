import logo from './logo.svg';
import './App.css';
import  Navbar  from './Components/Navbar';
import { Allroutes } from './Pages/Allroutes';
import Footer from './Pages/Footer';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.botpressWebChat.init({
      composerPlaceholder: "Chat with bot",
      botConversationDescription:
        "This chatbot was built surprisingly fast with Botpress",
      botId: "e13e14a0-de1b-4423-8a9f-4909b1c3824f",
      hostUrl: "https://cdn.botpress.cloud/webchat/v1",
      messagingUrl: "https://messaging.botpress.cloud",
      clientId: "e13e14a0-de1b-4423-8a9f-4909b1c3824f",
      webhookId: "48fb9560-5e01-4f81-af00-485e16085161",
      lazySocket: true,
      themeName: "prism",
      frontendVersion: "v1",
      showPoweredBy: true,
      theme: "prism",
      themeColor: "#2563eb",
      userData: { test: "test" },
    });
  }, []);

  return (
    <div className="App">
        <Navbar/>
        <Allroutes/>
        <Footer/>
    </div>
  );
}

export default App;
