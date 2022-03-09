import { ListUserService } from "../services/ListUsersService"
import { Request, Response} from "express"

class ListUserController{
    async handle(req:Request, res:Response){
        const listUserService = new ListUserService();

        const users = await listUserService.execute();

        return (res.status(200),res.json(users))
    }
}

export { ListUserController }