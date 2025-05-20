declare module "moment-jalaali" {
  import * as moment from "moment";

  interface MomentJalaali extends moment.Moment {
    format(format: string): string;
  }

  interface MomentStatic extends moment.MomentStatic {
    loadPersian(config?: {
      dialect?: "persian" | "persian-modern";
      usePersianDigits?: boolean;
    }): void;
    (): MomentJalaali;
  }

  const momentJalaali: MomentStatic;
  export = momentJalaali;
}
