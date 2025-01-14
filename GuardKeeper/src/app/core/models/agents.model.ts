
export interface Agent {
  id: number,
  photo: string,
  name: string,
  gender: string,
  age: number,
  contact: string,
  emergencyContact: string,
  category: string,
  rank?: string;                // Posto ou Graduação (opcional para civis)
  unit?: string;

}

