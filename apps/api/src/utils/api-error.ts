import * as z from "zod";

export class ApiError extends Error {
  public readonly success: boolean = false;
  public readonly reasons: string[] | null;
  public readonly validationIssues: z.core.$ZodIssue[] | null;

  constructor(
    message: string,
    reasons: string[] | null = null,
    validatioIssues: z.core.$ZodIssue[] | null = null,
  ) {
    super(message);
    Object.setPrototypeOf(this, ApiError.prototype);
    this.reasons = reasons;
    this.validationIssues = validatioIssues;
  }

  toJSON() {
    return {
      success: this.success,
      message: this.message,
      reasons: this.reasons,
      validationIssues: this.validationIssues,
    };
  }
}
