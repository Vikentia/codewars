function DNAStrand(dna) {
    return dna.split('').map(item => {
        switch (item) {
            case 'A': return 'T'
            case 'T': return 'A'
            case 'G': return 'C'
            case 'C': return 'G'
        }
    }
    ).join('')
}

console.log(DNAStrand("ATTGC"));