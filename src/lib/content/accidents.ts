import {
  carAccident,
  motorcycleAccident,
  rideshareAccident,
  truckAccident,
} from "./accidents-vehicle";
import { dogBite, pedestrianAccident, slipAndFall } from "./accidents-liability";

export {
  carAccident,
  motorcycleAccident,
  rideshareAccident,
  truckAccident,
} from "./accidents-vehicle";
export { dogBite, pedestrianAccident, slipAndFall } from "./accidents-liability";

export const ACCIDENT_PAGES = [
  carAccident,
  truckAccident,
  motorcycleAccident,
  rideshareAccident,
  pedestrianAccident,
  dogBite,
  slipAndFall,
] as const;
