import React from "react";
import infoLog from "../../../assets/images/VibesInfo.svg";
import closeIcon from "../../../assets/images/delete.svg";
import InfoIcon from "../../../assets/images/infoIconToast.svg";
import CurrentlyDateComponent from "../Components/CurrentlyDateComponent";
import CurrentlyDateHistoryComponent from "../Components/CurrentlyDateHistoryComponent";
import BankButton from "../Components/BankButton";
import ButtonWithInfo from "../Components/ButtonWithInfo";
const ReceiptSection = () => {
  return (
    <div
      className="div-background"
      style={{ paddingTop: "20px", paddingBottom: "20px" }}
    >
      <div className="bank-model">
        {/* logo section */}
        <div className="logo-container">
          <div></div>
          <div>
            <img src={infoLog} alt="Info Logo" style={{ width: "100px" }} />
          </div>
          <div>
            <img src={closeIcon} alt="Close Icon" style={{ width: "15px" }} />
          </div>
        </div>

        {/* Title section */}

        <div className="vibes-receipt-id">
          <p>Vibes ID: #987153</p>
        </div>
        {/* headline section */}
        <div className="vibes-acount-balance">
          <div className="balance-headline">
            <p>Total Pay Out Credit:</p>
          </div>
          <div className="balance-amout">
            <p>+650,00$</p>
            <img src={InfoIcon} alt="Info Icon" />
          </div>
        </div>

        <div className="straight-line"></div>

        {/* currently Dates */}

        <div className="currently-dates">
          <div className="currently-dates-title">
            <p>Currently Dates</p>
          </div>
          <div className="currently-dates-component">
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="-18000"
              statusTitle="Upcoming Date"
              statusTag="Money is blocked"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Ready for Date"
              statusTag="Money is blocked"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="Money is blocked"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
            <CurrentlyDateComponent
              date="06.08.2021"
              nameId="Martin [#654321]"
              amount="+18000"
              statusTitle="Date Finished"
              statusTag="48 hours for release"
            />
          </div>
        </div>

        {/* History of dates */}

        <div className="currently-dates">
          <div className="currently-dates-title">
            <p>History Of Dates</p>
          </div>
          <div className="currently-dates-component">
            <CurrentlyDateHistoryComponent
              date="25.07.2017"
              nameId="Ben [#987654]"
              amount="+18023"
            />
            <CurrentlyDateHistoryComponent
              date="25.07.2017"
              nameId="Ben [#987654]"
              amount="+18023"
            />
            <CurrentlyDateHistoryComponent
              date="25.07.2017"
              nameId="Ben [#987654]"
              amount="+18023"
            />
            <CurrentlyDateHistoryComponent
              date="25.07.2017"
              nameId="Ben [#987654]"
              amount="+18023"
            />
            <CurrentlyDateHistoryComponent
              date="25.07.2017"
              nameId="Ben [#987654]"
              amount="+18023"
            />
          </div>
          <div className="straight-line"></div>
          <div>
            <BankButton title="Payout Order" />
          </div>
          <div>
            <BankButton title="Change Bank Details" />
          </div>
          <div style={{ marginTop: "2rem" }}>
            <ButtonWithInfo title="Get Support" background="white" />
          </div>

          <div className="nav-indecator">
            <div className="ind-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiptSection;
