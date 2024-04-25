import { applyDiscount } from "../applyDiscount";
import { createPlanMicro, createPlanPopular } from "./ObjectFactory";

test("ApplyDiscount - return of discount empty", () => {
  expect(applyDiscount({ plan: createPlanMicro() })).toEqual(0.3);
});

test("ApplyDiscount - return of discount fixed", () => {
  expect(
    applyDiscount({
      plan: createPlanPopular({
        discount: {
          type: "fixed",
          value: 0.1,
        },
      }),
    })
  ).toEqual(0.5);
});

test("ApplyDiscount - return of discount fixed", () => {
  expect(
    applyDiscount({
      plan: createPlanPopular({
        discount: {
          type: "fixed",
          value: 0.3,
        },
      }),
    })
  ).toEqual(0.3);
});

test("ApplyDiscount - return of 30% discount percentage", () => {
  expect(
    applyDiscount({
      plan: createPlanPopular({
        discount: {
          type: "percentage",
          value: 30,
        },
      }),
    })
  ).toEqual(0.18);
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
  ).toEqual(0.3);
});
