import { ourPlans } from "../../data-list";

export const createPlans = () => [
  createPlanMicro(),
  createPlanPopular(),
  createPlanControl(),
];

export const createPlanMicro = (props) => ({
  ...ourPlans[0],
  ...props,
});

export const createPlanPopular = (props) => ({
  ...ourPlans[1],
  ...props,
});

export const createPlanControl = (props) => ({
  ...ourPlans[2],
  ...props,
});
