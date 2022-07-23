import { Request, response, Response } from "express";
import Board from "../models/Board.model";
import serviceBoard from "../services/service.board";
import { catchError } from "../utils/catchError";


declare type Result<R> = { 
    isError: false; value: R; 
}
declare type Failure<E> = { 
    isError: true; error: E; 
}
export declare type Failable<R,E> = Result<R> | Failure<E>;



const list: any  = async(req:Request, res: Response) => {
    let response;
    try{
        response = await serviceBoard.list();
    } catch (e: any){
        catchError(e)
    }
    res.json(response)
}

const write: any= async(req:Request, res: Response) => {
        const { data } = req.body;
        let response;
    try{
        response = await serviceBoard.write( data );
    } catch (e:any){
        catchError(e);

    }
    res.json(response)
}
const update: any = async(req:Request, res: Response) => {
    const { data } = req.body;
    const { idx } = req.params;
    let response;
    try{
        response = await serviceBoard.update(idx, data);
    } catch (e: any){
        catchError(e);
    }
    res.json(response)
}
const remove: any = async(req:Request, res: Response) => {
    let response;
    const { idx } = req.params;
    try{
        response = await serviceBoard.delete(idx);
    } catch (e: any){
        catchError(e);
    }
    res.json(response)
}

export default {
    list,
    write,
    update,
    delete: remove
}