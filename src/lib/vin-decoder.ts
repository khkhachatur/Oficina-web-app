const VIN_YEAR_MAP: Record<string, number> = {
    A: 2010, B: 2011, C: 2012, D: 2013, E: 2014,
    F: 2015, G: 2016, H: 2017, J: 2018, K: 2019,
    L: 2020, M: 2021, N: 2022, P: 2023, R: 2024,
    S: 2025, T: 2026, V: 2027, W: 2028, X: 2029,
    Y: 2030,
  };
  
  const WMI_MAP: Record<string, string> = {
    "1G": "General Motors (USA)",
    "1F": "Ford (USA)",
    "2G": "General Motors (Canada)",
    "3N": "Nissan (Mexico)",
    "JH": "Honda (Japan)",
    "JT": "Toyota (Japan)",
    "WA": "Audi (Germany)",
    "WB": "BMW (Germany)",
    "WDB": "Mercedes-Benz (Germany)",
    "WVW": "Volkswagen (Germany)",
  };
  
  export function decodeVIN(vin: string) {
    if (!vin || vin.length !== 17) {
      return { manufacturer: "Unknown", year: "Unknown", plant: "-", serial: "-" };
    }
  
    const wmi = vin.substring(0, 3);
    const yearCode = vin[9];
    const plant = vin[10];
    const serial = vin.substring(11);
  
    return {
      manufacturer: WMI_MAP[wmi.substring(0, 2)] || "Unknown Manufacturer",
      year: VIN_YEAR_MAP[yearCode] || "Unknown Year",
      plant,
      serial,
    };
  }
  