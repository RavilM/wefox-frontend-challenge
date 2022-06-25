export type TPayload = {
    url: string;
}

export type TResult<TRecord> = {
    data: TRecord;
    refetch(): Promise<Response>;
}
