import { Request, response, Response } from "express";
import serviceBoard from "../services/service.board";
import { catchError } from "../utils/catchError";
import Board from '../models/Board.model'

declare type Result<R> = { 
    isError: false; value: R; 
}
declare type Failure<E> = { 
    isError: true; error: E; 
}
export declare type Failable<R,E> = Result<R> | Failure<E>;



const list: any  = async(req:Request, res: Response) => {
    let response: Failable<Board[],string>;
    try{
        response = await serviceBoard.list();
    } catch (e: any){
        catchError(e)
        response = {
            isError:true,
            error: 'board list Error!'
        }
    }
    res.json(response)

}

const write: any= async(req:Request, res: Response) => {
        const { data } = req.body;
        let response: Failable<Board,string>;
    try{
        response = await serviceBoard.write( data );
    } catch (e:any){
        catchError(e);
        response = {
            isError:true,
            error: 'board write Error!'
        }
    }
    res.json(response)
}
const update: any = async(req:Request, res: Response) => {
    let response: Failable<Board|null,string>;
    const { data } = req.body;
    const { idx } = req.params;
    try{
        response = await serviceBoard.update(idx, data);
    } catch (e: any){
        catchError(e);
        response = {
            isError:true,
            error: 'board update Error!'
        }
    }
    res.json(response)
}
const remove: any = async(req:Request, res: Response) => {
    let response: Failable<number,string>;
    const { idx } = req.params;
    try{
        response = await serviceBoard.delete(idx);
    } catch (e: any){
        catchError(e);
        response = {
            isError:true,
            error: 'board delete Error!'
        }
    }
    res.json(response)
}

export default {
    list,
    write,
    update,
    delete: remove
}