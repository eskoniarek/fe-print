import React, { useEffect, useRef } from 'react';

const PaymentPaycoreHPP = () => {
  const iframeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://unpkg.com/@paycore/merchant-widget-js@0.1.7/dist/merchantWidget.umd.min.js";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (iframeRef.current) {
        window.widget.init({
          selector_id: iframeRef.current.id,
          public_key: "pk_live_tr75ZKYxiX_GvNERLsUhWFL4cu6AHpdm1lvJWqdt0Cw",
          amount: 100,
          currency: "UAH",
          base_url: "http://localhost:8015/hpp/",
          language: 'en',
          // Add other configurations as needed
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div ref={iframeRef} id="paycore-hpp-iframe">
      {/* The iframe will be injected here by the Paycore widget */}
    </div>
  );
};

export default PaymentPaycoreHPP;
