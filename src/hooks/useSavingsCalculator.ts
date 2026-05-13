import { useState, useMemo } from 'react';

export function useSavingsCalculator() {
  const [distance, setDistance] = useState(30);
  const [petrolPrice, setPetrolPrice] = useState(280);
  const [daysPerWeek, setDaysPerWeek] = useState(5);

  const stats = useMemo(() => {
    // Petrol cost formula: (distance × daysPerWeek × 4.33 × petrolPrice) / 40
    const petrolCost = (distance * daysPerWeek * 4.33 * petrolPrice) / 40;
    
    // OKLA cost formula: (distance × daysPerWeek × 4.33 × 2.5)
    const oklaCost = distance * daysPerWeek * 4.33 * 2.5;
    
    const monthlySavings = petrolCost - oklaCost;
    const annualSavings = monthlySavings * 12;
    
    // Trees formula: (annualSavings / 1000) × 0.04
    const treesEquivalent = Math.floor((annualSavings / 1000) * 0.04);

    return {
      petrolCost,
      oklaCost,
      monthlySavings,
      annualSavings,
      treesEquivalent
    };
  }, [distance, petrolPrice, daysPerWeek]);

  return {
    distance,
    setDistance,
    petrolPrice,
    setPetrolPrice,
    daysPerWeek,
    setDaysPerWeek,
    ...stats
  };
}
