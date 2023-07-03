import {HttpParams} from "@angular/common/http";
import {Pair} from "../app.types";
import {Id} from "../models/entity/base/base.entity";
import {OrganisationId, SchoolId} from "../services/general/local-storage.service";

export interface BaseFilterParams {
  id?: Id
}

export interface OrganisationBaseFilterParams extends BaseFilterParams {
  organisationId: number
}

export interface SchoolBaseFilterParams extends OrganisationBaseFilterParams {
  schoolId: number
}

export abstract class BaseFilter extends HttpParams {
  private readonly _parameters: { [p: string]: any } = {};

  protected constructor(public p: { [p: string]: any }) {
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

  update(o: any) {
    if (typeof o == 'object') {
      Object.entries(o).forEach(([k, v]) => {
        this.param = {key: k, value: v};
      });
    }
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

export class SchoolBaseFilter extends BaseFilter {
  constructor(public params: SchoolBaseFilterParams) {
    super(params);
  }

  static simple() {
    const params = <SchoolBaseFilterParams>{
      schoolId: SchoolId,
      organisationId: OrganisationId
    }
    return new SchoolBaseFilter(params);
  }
}

export class OrganisationBaseFilter extends BaseFilter {
  constructor(public params: OrganisationBaseFilterParams) {
    super(params);
  }
}
