interface PaginatedResults<T>{
    data: T[],
    totalCount: number,
    nextPageUrl: string | null;
}

const results:PaginatedResults<number> = {
    data: [1, 2, 3, 4, 5],
    totalCount: 5,
    // nextPageUrl: "nextpage.url"
    nextPageUrl: null
}





 