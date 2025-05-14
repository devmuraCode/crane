export interface Details {
  id: number;
  name: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  pricing: {
    id: number;
    hourly_rate: string;
    minimum_order: string;
  };
  load_capacity: string;
  boom_reach: string;
  floor_reach: string;
  description: string;
  rental_condition: string;
  characteristics: {
    map(arg0: (char: any) => import("react").JSX.Element): import("react").ReactNode;
    length: number;
    name: string;
    value: string;
  };
  image: string;
}
