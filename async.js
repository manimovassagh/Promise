const maniPromise= async () => { 
    const response = await fetch('mani.json');
    const data = await response.json();
    return data;
    // no need to pars because response.json make automatic parsing
};

maniPromise().then(data=>console.log('resolved',data)).catch;
// maniPromise().then(data=>console.log('resolved',data));
// bedoone catch ham moshkeli nist
//kheili mofid baraye badan
