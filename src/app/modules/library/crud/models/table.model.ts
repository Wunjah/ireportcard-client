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
}

export class TableRow {
  constructor(
    public cells: TableCell[]
  ) {
  }
}

export class TableHeader extends TableRow {

}
