import {HttpParams} from "@angular/common/http";
import {Pair} from "../app.types";

export abstract class BaseFilter extends HttpParams {
  private readonly _parameters: {[p: string]: any} = {};
  protected constructor(public p: {[p: string]: any}) {
    super();
    if (typeof p === 'object') {
      Object.entries(p)
        .filter(([_, value]) => value !== undefined)
        .forEach(([key, value]) => {
          this.updateParam({key: key, value: value});
      });
    }
  }

  set param(pair: Pair) {
    this.updateParam(pair)
  }

  get parameters() {
    return this._parameters;
  }

  private updateParam(pair: Pair) {
    if (pair.value) {
      this.p[pair.key] = pair.value;
      this.set(pair.key, pair.value);
      this.append(pair.key, pair.value);
      this._parameters[pair.key] = pair.value;
    }
  }
}
