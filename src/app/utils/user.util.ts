import {UserPayload} from "../models/user/user.payload";
import {TableCell, TableModel, TableRow} from "../modules/library/crud/models/table.model";

export module UserUtil {
  export const createTable = (users: UserPayload[], title: string = "Users") : TableModel => {
    return {
      title: title,
      header: {
        cells: [
          {value: "id"},
          {value: "Username"},
          {value: "Full Name"},
          {value: "Gender"},
          {value: "Approved"},
        ]
      },
      rows: users.map((user): TableRow => {
          return {
            cells: [
              new TableCell(user.user.id),
              new TableCell(user.user.username),
              new TableCell(`${user.user.firstname} ${user.user.lastname}`),
              new TableCell(user.account?.gender ?? ''),
              new TableCell(user.user.approved),
            ]
          }
        }
      )
    }
  }
}
