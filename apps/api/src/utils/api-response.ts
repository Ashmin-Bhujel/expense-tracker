export class ApiResponse<ResponseDataType, ResponseMetadataType> {
  public readonly success: boolean;
  public readonly message: string;
  public readonly data: ResponseDataType | null;
  public readonly metadata: ResponseMetadataType | null;

  constructor(
    message: string,
    data: ResponseDataType | null = null,
    metadata: ResponseMetadataType | null = null,
  ) {
    this.success = true;
    this.message = message;
    this.data = data;
    this.metadata = metadata;
  }

  toJSON() {
    return {
      success: this.success,
      message: this.message,
      data: this.data,
      metadata: this.metadata,
    };
  }
}
