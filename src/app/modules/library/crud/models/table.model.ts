export class TableModel {
  constructor(
    public title: string,
    public header: TableHeader,
    public rows: TableRow[]
  ) {
  }
}

export class TableCell {
  constructor(
    public value: any,
  ) {
  }

  get isAction(): boolean {
    return this.value instanceof TableRowAction;
  }

  get action(): TableRowAction<any> | null {
    if (this.isAction) {
      return this.value
    } else {
      return null
    }
  }
}

export class TableRow {
  constructor(
    public cells: TableCell[]
  ) {
  }
}

export class TableHeader extends TableRow {

}

export interface TableRowActionDesc {
  name: string,
  action: (p: any) => void
}

export class TableRowAction<T> {
  constructor(
    public name: string,
    private params: T,
    private action: (params: T) => void
  ) {
  }

  onAction = () => this.action(this.params);
}
