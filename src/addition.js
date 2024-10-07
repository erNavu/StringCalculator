const addition = (exp) => {
    const chunks = getChunks(exp)
    return calculateSum(chunks)
}

const getChunks = (exp) => {
    let delimiters = [",", "\n"];
    if (exp.startsWith('//')) {
        let delimiterEndPoint = exp.indexOf('\n')
        delimiters.push(exp.charAt(2))
        exp = exp.substring(delimiterEndPoint + 1)// first line
    }
    return getSubChunks([exp], delimiters);
}

const getSubChunks = (chunksTillNow, delimiters) => {
    if (delimiters.length === 0) return chunksTillNow
    let subChunks = []
    let delimiter = delimiters.pop()
    for (let i = 0; i < chunksTillNow.length; i++) {
        subChunks = subChunks.concat(chunksTillNow[i].split(delimiter))
    }
    return getSubChunks(subChunks, delimiters)
}

const calculateSum = (exp) => {
    let sum = 0;
    let negatives = exp.filter(val => val < 0)
    if (negatives.length > 0) {
        throw new Error("Negative numbers not allowed " + negatives.join(", "))
    }
    exp.map((value) => {
        sum += parseInt(value) || 0
    })
    return sum;
}

export default addition