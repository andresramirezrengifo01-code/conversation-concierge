import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface OnboardingData {
  businessName: string;
  country: string;
  industry: string;
  website: string;
  products: Array<{
    name: string;
    price: string;
    link: string;
    faqs: string;
  }>;
  policies: {
    hours: string;
    shipping: string;
    returns: string;
    payments: string;
  };
  tone: {
    style: 'formal' | 'friendly' | '';
    useEmojis: boolean;
    forbiddenWords: string;
  };
}

interface FunnelContextType {
  setupPaid: boolean;
  setSetupPaid: (value: boolean) => void;
  onboardingData: OnboardingData;
  setOnboardingData: (data: OnboardingData) => void;
  onboardingComplete: boolean;
  setOnboardingComplete: (value: boolean) => void;
  selectedPlan: 'PRO' | 'PLUS' | 'MAX' | null;
  setSelectedPlan: (plan: 'PRO' | 'PLUS' | 'MAX' | null) => void;
  annualUpsell: boolean;
  setAnnualUpsell: (value: boolean) => void;
  accompanyUpsell: boolean;
  setAccompanyUpsell: (value: boolean) => void;
}

const defaultOnboardingData: OnboardingData = {
  businessName: '',
  country: '',
  industry: '',
  website: '',
  products: [
    { name: '', price: '', link: '', faqs: '' },
    { name: '', price: '', link: '', faqs: '' },
    { name: '', price: '', link: '', faqs: '' },
  ],
  policies: {
    hours: '',
    shipping: '',
    returns: '',
    payments: '',
  },
  tone: {
    style: '',
    useEmojis: false,
    forbiddenWords: '',
  },
};

const FunnelContext = createContext<FunnelContextType | undefined>(undefined);

export const FunnelProvider = ({ children }: { children: ReactNode }) => {
  const [setupPaid, setSetupPaid] = useState(() => {
    const saved = localStorage.getItem('converxia_setupPaid');
    return saved === 'true';
  });

  const [onboardingData, setOnboardingData] = useState<OnboardingData>(() => {
    const saved = localStorage.getItem('converxia_onboarding');
    return saved ? JSON.parse(saved) : defaultOnboardingData;
  });

  const [onboardingComplete, setOnboardingComplete] = useState(() => {
    const saved = localStorage.getItem('converxia_onboardingComplete');
    return saved === 'true';
  });

  const [selectedPlan, setSelectedPlan] = useState<'PRO' | 'PLUS' | 'MAX' | null>(() => {
    const saved = localStorage.getItem('converxia_selectedPlan');
    return saved as 'PRO' | 'PLUS' | 'MAX' | null;
  });

  const [annualUpsell, setAnnualUpsell] = useState(() => {
    const saved = localStorage.getItem('converxia_annualUpsell');
    return saved === 'true';
  });

  const [accompanyUpsell, setAccompanyUpsell] = useState(() => {
    const saved = localStorage.getItem('converxia_accompanyUpsell');
    return saved === 'true';
  });

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem('converxia_setupPaid', String(setupPaid));
  }, [setupPaid]);

  useEffect(() => {
    localStorage.setItem('converxia_onboarding', JSON.stringify(onboardingData));
  }, [onboardingData]);

  useEffect(() => {
    localStorage.setItem('converxia_onboardingComplete', String(onboardingComplete));
  }, [onboardingComplete]);

  useEffect(() => {
    if (selectedPlan) {
      localStorage.setItem('converxia_selectedPlan', selectedPlan);
    }
  }, [selectedPlan]);

  useEffect(() => {
    localStorage.setItem('converxia_annualUpsell', String(annualUpsell));
  }, [annualUpsell]);

  useEffect(() => {
    localStorage.setItem('converxia_accompanyUpsell', String(accompanyUpsell));
  }, [accompanyUpsell]);

  return (
    <FunnelContext.Provider
      value={{
        setupPaid,
        setSetupPaid,
        onboardingData,
        setOnboardingData,
        onboardingComplete,
        setOnboardingComplete,
        selectedPlan,
        setSelectedPlan,
        annualUpsell,
        setAnnualUpsell,
        accompanyUpsell,
        setAccompanyUpsell,
      }}
    >
      {children}
    </FunnelContext.Provider>
  );
};

export const useFunnel = () => {
  const context = useContext(FunnelContext);
  if (context === undefined) {
    throw new Error('useFunnel must be used within a FunnelProvider');
  }
  return context;
};
