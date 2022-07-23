export const catchError = (e: Error) => {
    if(e instanceof Error) console.log(e.message);
}