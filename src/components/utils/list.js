export function chunk(list, n) {
    const copy = Array.from(list)
    const result = []
    while (copy.length) {
        result.push(copy.splice(0, n))
    }
    return result
}