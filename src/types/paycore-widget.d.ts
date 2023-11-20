interface Window {
    widget: PaycoreWidget;
  }
  
  interface PaycoreWidgetConfig {
    selector_id: string;
    public_key: string;
    amount: number;
    currency: string;
    base_url: string;
    language: string;
    styling?: object; // Define more specific type if you have the structure
    frameId?: string;
    theme?: string;
    // Add other fields as per the widget's documentation
  }
  
  interface PaycoreWidget {
    init: (config: PaycoreWidgetConfig) => void;
    reinit: (config: PaycoreWidgetConfig) => void;
    close: (config: PaycoreWidgetConfig) => void;
  }
  