import {ClassLevelPayload} from "../models/payload/class-level.payload";
import {TableCell, TableModel, TableRow} from "../modules/library/crud/models/table.model";

export module ClassLevelUtil {
  export const createClassLevelTable = (payloads: ClassLevelPayload[], title: string = "Classes") => {
    return <TableModel>{
      title: title,
      header: {
        cells: [
          {value: "id"},
          {value: "Name"},
          {value: "Order"},
          {value: "Number of subs"},
        ]
      },
      rows: payloads.map((payload): TableRow => {
          return {
            cells: [
              new TableCell(payload.classLevel.id),
              new TableCell(payload.classLevel.name),
              new TableCell(payload.classLevel.order),
              new TableCell(payload.classLevelSubs.length)
            ]
          }
        }
      )
    }
  }
}
