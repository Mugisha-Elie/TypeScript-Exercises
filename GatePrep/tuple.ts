type OperationResult = readonly [statusCode: number, message: string];

function sendRefferal(): OperationResult{
    return [201, "Referral Created Successfully"];
}

const [code, msg] = sendRefferal();