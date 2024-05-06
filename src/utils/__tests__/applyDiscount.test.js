import { applyDiscount } from "../applyDiscount";
import { createPlanMicro, createPlanPopular } from "./ObjectFactory";

test("ApplyDiscount - return of discount empty", () => {
  expect(applyDiscount({ plan: createPlanMicro() })).toEqual(0.35);
});

test("ApplyDiscount - return of discount fixed", () => {
  expect(
    applyDiscount({
      plan: createPlanPopular({
        discount: {
          type: "fixed",
          value: 0.01,
        },
      }),
    })
  ).toEqual(0.41);
});

test("ApplyDiscount - return of 10% discount percentage", () => {
  expect(
    applyDiscount({
      plan: createPlanPopular({
        discount: {
          type: "percentage",
          value: 10,
        },
      }),
    })
  ).toEqual(0.38);
});

test("ApplyDiscount - return of 50% discount percentage", () => {
  expect(
    applyDiscount({
      plan: createPlanPopular({
        discount: {
          type: "percentage",
          value: 50,
        },
      }),
    })
  ).toEqual(0.21);
});
