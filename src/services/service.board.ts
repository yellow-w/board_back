import Board from "../models/Board.model";
import { catchError } from "../utils/catchError";

declare type Result<R> = { 
    isError: false; value: R; 
}
declare type Failure<E> = { 
    isError: true; error: E; 
}
export declare type Failable<R,E> = Result<R> | Failure<E>;


const write = async ({ subject, content, writer }: any) => {
    let response : Failable<Board,string>
	try {
		const result = await new Board({ subject, content, writer }).save();
        response = {
            isError: false,
            value: result
        };
	} catch (e: any) {
		catchError(e);
        response = {
            isError: true,
            error: 'service write Error!'
        };
	}
    return response;
};

const list = async () => {
    let response : Failable<Board[],string>

	try {
		const result = await Board.findAll();
        response = {
            isError:false,
            value: result
        }
	} catch (e: any) {
		catchError(e);
        response = {
            isError: true,
            error: 'service list Error!'
        }
	}
	return response;
};

const update = async (idx: string, data?: any) => {
    let response : Failable<Board|null,string>
    try{
        const [result] = await Board.update(data,{
            where:{idx}
        })
        const updatedOne = await Board.findOne({
            where:{idx:result}
        });
        response = {
            isError: false,
            value: updatedOne
        }
    } catch (e: any){
        catchError(e)
        response = {
            isError: true,
            error: 'service update Error!'
        }
    }
}

const remove = async (idx: string) => {
    let response : Failable<number,string>
    try{
        const result = await Board.destroy({
            where:{idx}
        })
        response = {
            isError: false,
            value: result
        }
    } catch (e: any) {
        catchError(e)
        response = {
            isError: true,
            error: 'service delete Error!'
        }
    }
}

export default {
    write,
    list,
    update,
    delete: remove
}