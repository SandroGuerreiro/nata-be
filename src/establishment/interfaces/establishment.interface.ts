import { UUID } from 'crypto';

export interface Establishment {
  id: UUID;
  name: string;
  address: string;
}
