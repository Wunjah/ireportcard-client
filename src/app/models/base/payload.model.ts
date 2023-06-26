abstract class Payload<T> {}

export class ApiPayload extends Payload<any> {
  constructor(
    public message: string,
    public log: boolean,
    public id?: number
  ) {
    super();
  }
}
