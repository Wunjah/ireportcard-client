import {SchoolModel} from "../models/school/school.model";
import {
  TableRowAction,
  TableCell,
  TableModel,
  TableRow,
  TableRowActionDesc
} from "../modules/library/crud/models/table.model";
import {SchoolStaffPayload} from "../models/payload/school-staff.payload";

export module SchoolUtil {
  export const createSchoolsTable = (
      schools: SchoolModel[],
      actionDesc: TableRowActionDesc
    ): TableModel => {
    const title = "Schools"
    return <TableModel>{
      title: title,
      header: {
        cells: [
          {value: "id"},
          {value: "Name"},
          {value: "Created"},
          {value: "Actions"}
        ]
      },
      rows: schools.map((school): TableRow => {
        const action = new TableRowAction(actionDesc?.name, school.id, actionDesc.action)
        return {
          cells: [
            new TableCell(school.id),
            new TableCell(school.name),
            new TableCell(school.createdAt),
            new TableCell(action)
          ]
        }
      })
    }
  }

  export const createSchoolStaffTable = (payload: SchoolStaffPayload): TableModel => {
    const title = "Schools"
    return <TableModel>{
      title: title,
      header: {
        cells: [
          {value: "id"},
          {value: "User ID"},
          {value: "Created"}
        ]
      },
      rows: payload.staff.map(s => {
        return {
          cells: [
            new TableCell(s.id),
            new TableCell(s.userId),
            new TableCell(s.createdAt),
          ]
        };
      }),
    }
  }
}
