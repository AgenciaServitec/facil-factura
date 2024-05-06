export const applyDiscount = ({ plan }) => {
  if (!plan?.discount) return plan.prices.value;

  if (plan.discount.type === "fixed")
    return +(plan.prices.value - plan.discount.value).toFixed(2);

  if (plan.discount.type === "percentage")
    return +(
      plan.prices.value -
      (plan.discount.value * plan.prices.value) / 100
    ).toFixed(2);
};
