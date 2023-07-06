import {SubjectPayload} from "../models/payload/subject.payload";
import {TableCell, TableModel, TableRow} from "../modules/library/crud/models/table.model";

export module SubjectUtil {
  export const createSubjectTable = (payloads: SubjectPayload[], title: string = "Subjects") => {
    return <TableModel>{
      title: title,
      header: {
        cells: [
          {value: "id"},
          {value: "Name"},
          {value: "Code"},
          {value: "Coefficient"},
        ]
      },
      rows: payloads.map((payload): TableRow => {
          return {
            cells: [
              new TableCell(payload.subject.id),
              new TableCell(payload.subject.name),
              new TableCell(payload.subject.code),
              new TableCell(payload.subject.coefficient)
            ]
          }
        }
      )
    }
  }
}
