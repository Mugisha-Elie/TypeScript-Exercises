type Point = {
    x: number;
    y: number;
}

type NullablePoint = {
    // [key in keyof Point] ?: Point[key]; 
    [key in keyof Point] : Point[key] | null;
}

const np: NullablePoint = {
    x: 5,
    y: null
}


