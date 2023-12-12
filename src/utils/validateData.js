export function isInvalidData(data) {
    let error = [];

    data.forEach((row, index) => {
        if (row.length !== 4) {
            error.push(index + 1);
        }
    })
    return error;
}