// PaymentPage.tsx
import React from 'react';
import Payment from '../../components/Premium/PricingPage/Payment';
import { useLocation } from 'react-router-dom';
import SidebarNav from '../../components/SideBarNav/SidebarNav';
import Header from '../../components/Header/Header';


type PaymentProps = {
    price: number
}


const PaymentPage = (props: PaymentProps) => {
  document.title = "Payment";

    let location = useLocation();
    
    const currPrice = location.state;

    let [menuState, setMenuState] = React.useState(false);
  return (
    <div>
      <div>
      <Header menuState={menuState} setMenuState={setMenuState}/>
        <SidebarNav menuState={menuState} setMenuState={setMenuState}/>
        </div>
      <Payment price={currPrice} />
    </div>
  );
};

export default PaymentPage;
