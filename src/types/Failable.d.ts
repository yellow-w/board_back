declare type Result<R> = { 
    isError: false; value: R; 
}

declare type Failure<E> = { 
    isError: true; error: E; 
}

export declare type Failable<R,E> = Result<R> | Failure<E>;
