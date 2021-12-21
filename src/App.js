import React, { useEffect, useState } from "react";

import { Route, Switch } from "react-router-dom";

import Login from "./Views/Login/Login";
import VerificationOtp from "./Views/VerificationOtp/VerificationOtp";
import ChoseGender from "./Views/ChoseGender/ChoseGender";

import DateOfBirth from "./Views/DateOfBirth/DateOfBirth";
import DeleteUser from "./Views/DeleteUser/DeleteUser";
import HomePage from "./Views/HomePage/HomePage";
import BankDetails from "./Views/OfferingProfileSection/Views/BankDetails";
import CallInfoSection from "./Views/OfferingProfileSection/Views/CallInfoSection";
import EscortSection from "./Views/OfferingProfileSection/Views/EscortSection";
import VideoRecording from "./Views/OfferingProfileSection/Views/VideoRecording";
import ConfirmYou from "./Views/OfferingProfileSection/Views/ConfirmYou";
import ExperienceLevel from "./Views/OfferingProfileSection/Views/ExperienceLevel";
import ReceiptSection from "./Views/OfferingProfileSection/Views/ReceiptSection";
import DemoVideoRecording from "./Views/OfferingProfileSection/Views/DemoVideoRecording";
import DateRequest from "./Views/DateRequestFromSexWorker/DateRequest";
import DateChatScreen from "./Views/DateRequestFromSexWorker/DateChatScreen";
import DateConfirmFromSexWorker from "./Views/DateRequestFromSexWorker/DateConfirmFromSexWorker";
import RequestFromSexWorker from "./Views/DateRequestFromSexWorker/RequestFromSexWorker";
import QrScannerFromSexWorker from "./Views/DateRequestFromSexWorker/QrScannerFromSexWorker";
import DateConfirmProfileFromSexWorker from "./Views/DateRequestFromSexWorker/DateConfirmProfileFromSexWorker";
import QrCodeProfileFromSexWorker from "./Views/DateRequestFromSexWorker/QrCodeProfileFromSexWorker";
import RequestAnswerFromSexWorker from "./Views/DateRequestFromSexWorker/RequestAnswerFromSexWorker";
import UserListWithSelectedProfile from "./Views/DateRequestFromSexWorker/UserListWithSelectedProfile";

const App = () => {
  const [innerHeightDiv, setInnerHeightDiv] = useState(0);

  useEffect(() => {
    let height = window.innerHeight;

    setInnerHeightDiv(height);
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/confirm">
        <ConfirmYou />
      </Route>
      <Route exact path="/confirm-experience">
        <ExperienceLevel />
      </Route>
      <Route exact path="/demo-video">
        <DemoVideoRecording />
      </Route>
      <Route exact path="/record-video">
        <VideoRecording />
      </Route>
      <Route exact path="/escort-section">
        <EscortSection />
      </Route>
      <Route exact path="/sexworker-section">
        <CallInfoSection />
      </Route>
      <Route exact path="/bankdetails-section">
        <BankDetails />
      </Route>
      <Route exact path="/bankdetails-receipt">
        <ReceiptSection />
      </Route>

      <Route exact path="/date-request">
        <DateRequest />
      </Route>
      <Route exact path="/date-chat">
        <DateChatScreen />
      </Route>
      <Route exact path="/date-confirm-from-sex-worker">
        <DateConfirmFromSexWorker />
      </Route>
      <Route exact path="/request-from-sexworker">
        <RequestFromSexWorker />
      </Route>
      <Route exact path="/qr-scanner-from-sexworker">
        <QrScannerFromSexWorker />
      </Route>
      <Route exact path="/date-confirm-profile">
        <DateConfirmProfileFromSexWorker />
      </Route>
      <Route exact path="/qr-code-profile">
        <QrCodeProfileFromSexWorker />
      </Route>
      <Route exact path="/request-answer-from-sexworker">
        <RequestAnswerFromSexWorker />
      </Route>
      <Route exact path="/selected-user-profiles">
        <UserListWithSelectedProfile />
      </Route>

      <Route exact path="/login">
        <Login screenHeight={innerHeightDiv} />
      </Route>
      <Route exact path="/verification">
        <VerificationOtp screenHeight={innerHeightDiv} />
      </Route>
      <Route exact path="/gender-selection">
        <ChoseGender screenHeight={innerHeightDiv} />
      </Route>
      <Route exact path="/date-of-birth">
        <DateOfBirth screenHeight={innerHeightDiv} />
      </Route>
      <Route exact path="/delete-profile">
        <DeleteUser screenHeight={innerHeightDiv} />
      </Route>
    </Switch>
  );
};

export default App;
