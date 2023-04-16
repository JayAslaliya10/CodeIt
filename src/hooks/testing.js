const check = (str1, str2) => {
    const normalizedStr1 = str1.trim().replace(/\s+/g, " ");
    const normalizedStr2 = str2.trim().replace(/\s+/g, " ");
    console.log(normalizedStr1, normalizedStr2);
    // compare the normalized strings
    return normalizedStr1 === normalizedStr2;
} 

module.exports = check;
